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

import com.easybusiness.bean.UserDTO;
import com.easybusiness.bean.UserGroupDTO;
import com.easybusiness.bean.UserGroupMapDTO;
import com.easybusiness.restclient.UserClient;
import com.easybusiness.restclient.UserGroupClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class MapUserGroupLandingAction extends ActionSupport implements SessionAware {

    private static final long serialVersionUID = 1L;

    @Autowired
    UserClient userClient;

    @Autowired
    UserGroupClient userGroupClient;

    Map<String, Object> session;
    private String userNameForGroupMapping;

    private String userIdForGroupMapping;

    private String groupNameForMapping;

    private String showResult;

    private UserDTO userForGroupDTO;

    private UserGroupMapDTO userGroupMapForUserDTO;

    private List<UserGroupDTO> userGroupAllList;

    private UserGroupMapDTO userGroupMapResponseDTO;

    private String errorMessage;
    
    private Map<Long, String> subMap;
    
    private List<UserDTO> listOfAllUsers;

    public MapUserGroupLandingAction() {
	super();
    }

    
    public String getShowResult() {
	return showResult;
    }

    public void setShowResult(String showResult) {
	this.showResult = showResult;
    }

    public String getUserNameForGroupMapping() {
	return userNameForGroupMapping;
    }

    public void setUserNameForGroupMapping(String userNameForGroupMapping) {
	this.userNameForGroupMapping = userNameForGroupMapping;
    }

    public String getUserIdForGroupMapping() {
	return userIdForGroupMapping;
    }

    public void setUserIdForGroupMapping(String userIdForGroupMapping) {
	this.userIdForGroupMapping = userIdForGroupMapping;
    }

    public String getGroupNameForMapping() {
	return groupNameForMapping;
    }

    public void setGroupNameForMapping(String groupNameForMapping) {
	this.groupNameForMapping = groupNameForMapping;
    }

    public UserDTO getUserForGroupDTO() {
	return userForGroupDTO;
    }

    public void setUserForGroupDTO(UserDTO userForGroupDTO) {
	this.userForGroupDTO = userForGroupDTO;
    }

    public UserGroupMapDTO getUserGroupMapForUserDTO() {
	return userGroupMapForUserDTO;
    }

    public void setUserGroupMapForUserDTO(UserGroupMapDTO userGroupMapForUserDTO) {
	this.userGroupMapForUserDTO = userGroupMapForUserDTO;
    }

    public List<UserGroupDTO> getUserGroupAllList() {
	return userGroupAllList;
    }

    public void setUserGroupAllList(List<UserGroupDTO> userGroupAllList) {
	this.userGroupAllList = userGroupAllList;
    }

    public UserGroupMapDTO getUserGroupMapResponseDTO() {
	return userGroupMapResponseDTO;
    }

    public void setUserGroupMapResponseDTO(UserGroupMapDTO userGroupMapResponseDTO) {
	this.userGroupMapResponseDTO = userGroupMapResponseDTO;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
    
    

    public String execute() {
	try{
	if (null != this.groupNameForMapping) {
	    userGroupAllList = new ArrayList<UserGroupDTO>();
	    userGroupAllList = userGroupClient.getAllUserGroups();
	    UserGroupDTO userGroupDTOForMapping = userGroupClient.getUserGroupByGroupName(this.groupNameForMapping);
	    userNameForGroupMapping=userNameForGroupMapping.substring(0, userNameForGroupMapping.length()-1);
	    StringTokenizer userTokenizer = new StringTokenizer(userNameForGroupMapping, ",");
	    while (userTokenizer.hasMoreTokens()) {
	    UserDTO userDTOForMapping = userClient.getUserLoginDetails(userTokenizer.nextToken().trim(), null);
	    
	    UserGroupMapDTO userGroupMapDTOForMapping = new UserGroupMapDTO();
	    userGroupMapDTOForMapping.setIsEnable(1L);
	    userGroupMapDTOForMapping.setUser(userDTOForMapping);
	    userGroupMapDTOForMapping.setUserGroup(userGroupDTOForMapping);

	    this.userGroupMapResponseDTO = new UserGroupMapDTO();
	    this.userGroupMapResponseDTO = userGroupClient.mapUserToUserGroup(userGroupMapDTOForMapping);
	    }
	    this.listOfAllUsers = userClient.getAllUserDetails();
		   
	    subMap = new HashMap<Long, String>();
	    listOfAllUsers.forEach(allUsers -> {
		subMap.put(allUsers.getId(), allUsers.getUserName());
	    });
	    this.showResult = "yes";
	} else {
	    userGroupAllList = new ArrayList<UserGroupDTO>();
	    userGroupAllList = userGroupClient.getAllUserGroups();
	    this.listOfAllUsers = userClient.getAllUserDetails();
	   
	    subMap = new HashMap<Long, String>();
	    listOfAllUsers.forEach(allUsers -> {
		subMap.put(allUsers.getId(), allUsers.getUserName());
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


    public Map<Long, String> getSubMap() {
        return subMap;
    }


    public void setSubMap(Map<Long, String> subMap) {
        this.subMap = subMap;
    }


    public List<UserDTO> getListOfAllUsers() {
        return listOfAllUsers;
    }


    public void setListOfAllUsers(List<UserDTO> listOfAllUsers) {
        this.listOfAllUsers = listOfAllUsers;
    }

}
