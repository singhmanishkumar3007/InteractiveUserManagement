package com.easybusiness.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.MenuDTO;
import com.easybusiness.bean.SubMenuDTO;
import com.easybusiness.bean.UserGroupDTO;
import com.easybusiness.bean.UserGroupMenuDTO;
import com.easybusiness.bean.UserGroupMenuSubMenuDTO;
import com.easybusiness.restclient.MenuGroupClient;
import com.easybusiness.restclient.UserGroupClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class MapGroupMenuLandingAction extends ActionSupport implements SessionAware {

    private static final long serialVersionUID = 1L;

    @Autowired
    MenuGroupClient menuGroupClient;

    @Autowired
    UserGroupClient userGroupClient;

    Map<String, Object> session;

    private String showResult;

    private List<UserGroupDTO> userGroupAllList;

    private List<MenuDTO> allMenuList;

    private List<SubMenuDTO> allSubMenuList;

    private String checkedMenuItems;

    private String groupNameWithMenu;

    private List<String> listOfMenu;

    private List<String> listOfSubMenu;

    private Map<Long, String> subMap;

    private String errorMessage;

    public MapGroupMenuLandingAction() {
	super();
    }

    public List<String> getListOfMenu() {
	return listOfMenu;
    }

    public void setListOfMenu(List<String> listOfMenu) {
	this.listOfMenu = listOfMenu;
    }

    public List<String> getListOfSubMenu() {
	return listOfSubMenu;
    }

    public void setListOfSubMenu(List<String> listOfSubMenu) {
	this.listOfSubMenu = listOfSubMenu;
    }

   

    public String getGroupNameWithMenu() {
        return groupNameWithMenu;
    }

    public void setGroupNameWithMenu(String groupNameWithMenu) {
        this.groupNameWithMenu = groupNameWithMenu;
    }

    public String getShowResult() {
	return showResult;
    }

    public void setShowResult(String showResult) {
	this.showResult = showResult;
    }

    public List<UserGroupDTO> getUserGroupAllList() {
	return userGroupAllList;
    }

    public void setUserGroupAllList(List<UserGroupDTO> userGroupAllList) {
	this.userGroupAllList = userGroupAllList;
    }

    public List<MenuDTO> getAllMenuList() {
	return allMenuList;
    }

    public void setAllMenuList(List<MenuDTO> allMenuList) {
	this.allMenuList = allMenuList;
    }

    public String getCheckedMenuItems() {
	return checkedMenuItems;
    }

    public void setCheckedMenuItems(String checkedMenuItems) {
	this.checkedMenuItems = checkedMenuItems;
    }

    public List<SubMenuDTO> getAllSubMenuList() {
	return allSubMenuList;
    }

    public void setAllSubMenuList(List<SubMenuDTO> allSubMenuList) {
	this.allSubMenuList = allSubMenuList;
    }

    public Map<Long, String> getSubMap() {
	return subMap;
    }

    public void setSubMap(Map<Long, String> subMap) {
	this.subMap = subMap;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String execute() {
	
	try{
	System.out.println("user group selected is " + this.groupNameWithMenu);
	if (null != this.checkedMenuItems) {
	    this.showResult = "yes";
	    checkedMenuItems=checkedMenuItems.substring(0, checkedMenuItems.length()-1);
	    System.out.println("chckedMenuItems is " + this.checkedMenuItems);
	    userGroupAllList = new ArrayList<UserGroupDTO>();
	    userGroupAllList = userGroupClient.getAllUserGroups();

	    this.allSubMenuList = menuGroupClient.getAllSubMenus();
	    listOfSubMenu = new ArrayList<String>();
	    subMap = new HashMap<Long, String>();
	    allSubMenuList.forEach(allSubMenu -> {
		listOfSubMenu.add(allSubMenu.getSubMenu());
		subMap.put(allSubMenu.getId(), allSubMenu.getSubMenu());
	    });

	    StringTokenizer subMenuTokenizer = new StringTokenizer(checkedMenuItems, ",");
	    Set<Long> uniqueMenuSet = new HashSet<Long>();

	    // delete existing user group menu sub menu values
	    List<UserGroupMenuSubMenuDTO> userGroupMenuSubList = menuGroupClient
		    .getUserGroupMenuSubByGroupName(groupNameWithMenu);
	    if (userGroupMenuSubList.size() > 0) {
		userGroupMenuSubList.forEach(userGroupmenuSubMenuItem -> {
		    menuGroupClient.deleteUserGroupMenuSubMenu(userGroupmenuSubMenuItem);
		});

	    }

	    List<UserGroupMenuDTO> userGroupMenuList = menuGroupClient
		    .getUserGroupMenuByGroupName(groupNameWithMenu);
	    if (userGroupMenuList.size() > 0) {
		userGroupMenuList.forEach(userGroupmenuItem -> {
		    menuGroupClient.deleteUserGroupMenu(userGroupmenuItem);
		});

	    }

	    while (subMenuTokenizer.hasMoreTokens()) {
		SubMenuDTO subMenuDTO = menuGroupClient
			.getSubMenuById(Long.parseLong(subMenuTokenizer.nextToken().trim()));

		UserGroupMenuSubMenuDTO userGroupMenuSubMenuDTO = new UserGroupMenuSubMenuDTO();
		userGroupMenuSubMenuDTO.setIsEnable(1L);
		userGroupMenuSubMenuDTO.setMenuItem(menuGroupClient.getMenuById(subMenuDTO.getMenu().getId()));
		userGroupMenuSubMenuDTO.setSubMenuItem(subMenuDTO);
		userGroupMenuSubMenuDTO
			.setUserGroup(userGroupClient.getUserGroupByGroupName(groupNameWithMenu));
		menuGroupClient.mapGroupMenuSubMenu(userGroupMenuSubMenuDTO);

		uniqueMenuSet.add(subMenuDTO.getMenu().getId());
	    }
	    uniqueMenuSet.forEach(menuId -> {

		UserGroupMenuDTO userGroupMenuDTO = new UserGroupMenuDTO();
		userGroupMenuDTO.setIsEnable(1L);
		userGroupMenuDTO.setMenuItem(menuGroupClient.getMenuById(menuId));
		userGroupMenuDTO.setUserGroup(userGroupClient.getUserGroupByGroupName(groupNameWithMenu));
		menuGroupClient.mapGroupMenu(userGroupMenuDTO);
	    });

	} else {
	    userGroupAllList = new ArrayList<UserGroupDTO>();
	    userGroupAllList = userGroupClient.getAllUserGroups();
	    this.allSubMenuList = menuGroupClient.getAllSubMenus();
	    listOfSubMenu = new ArrayList<String>();
	    subMap = new HashMap<Long, String>();
	    allSubMenuList.forEach(allSubMenu -> {
		listOfSubMenu.add(allSubMenu.getSubMenu());
		subMap.put(allSubMenu.getId(), allSubMenu.getSubMenu());
	    });
	    this.showResult = "no";
	}
	return SUCCESS;
	}catch(Exception e)
	{
	    this.errorMessage="Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }

}
