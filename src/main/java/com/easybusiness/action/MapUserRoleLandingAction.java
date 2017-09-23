package com.easybusiness.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.RoleDTO;
import com.easybusiness.bean.UserRoleMapDTO;
import com.easybusiness.restclient.UserClient;
import com.easybusiness.restclient.UserRoleClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class MapUserRoleLandingAction extends ActionSupport implements SessionAware {

    private static final long serialVersionUID = 1L;

    private static final Logger LOGGER = LoggerFactory.getLogger(MapUserRoleLandingAction.class);

    @Autowired
    UserClient userClient;

    @Autowired
    UserRoleClient userRoleClient;

    Map<String, Object> session;

    private String showResult;

    private List<RoleDTO> roleList;

    private Map<Long, RoleDTO> roleMap;

    private String accountNum;

    private String user_id_search;

    private String user_name_search;

    private String selection_role_id;

    private String errorMessage;

    public MapUserRoleLandingAction() {
	super();
    }

    public String getAccountNum() {
	return accountNum;
    }

    public void setAccountNum(String accountNum) {
	this.accountNum = accountNum;
    }

    public String getUser_id_search() {
	return user_id_search;
    }

    public void setUser_id_search(String user_id_search) {
	this.user_id_search = user_id_search;
    }

    public String getUser_name_search() {
	return user_name_search;
    }

    public void setUser_name_search(String user_name_search) {
	this.user_name_search = user_name_search;
    }

    public String getSelection_role_id() {
	return selection_role_id;
    }

    public void setSelection_role_id(String selection_role_id) {
	this.selection_role_id = selection_role_id;
    }

    public String getShowResult() {
	return showResult;
    }

    public void setShowResult(String showResult) {
	this.showResult = showResult;
    }

    public Map<Long, RoleDTO> getRoleMap() {
	return roleMap;
    }

    public void setRoleMap(Map<Long, RoleDTO> roleMap) {
	this.roleMap = roleMap;
    }

    public List<RoleDTO> getRoleList() {
	return roleList;
    }

    public void setRoleList(List<RoleDTO> roleList) {
	this.roleList = roleList;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String execute() {
	try{
	if (null != this.user_name_search || null != this.user_id_search) {
	    LOGGER.info("in set user to role block");
	    roleList = new ArrayList<RoleDTO>();
	    roleList = userRoleClient.getRoleDetails();
	    roleMap = new HashMap<Long, RoleDTO>();
	    roleList.forEach(roleItem -> {
		roleMap.put(roleItem.getId(), roleItem);
	    });
	    this.showResult = "yes";
	    UserRoleMapDTO userRoleMapDTO = new UserRoleMapDTO();
	    if (null != this.user_id_search) {
		userRoleMapDTO.setUser(userClient.getUserDetailsById(this.user_id_search));
	    } else if (null != this.user_name_search) {
		userRoleMapDTO.setUser(userClient.getUserDetailsByName(this.user_name_search));
	    }
	    userRoleMapDTO.setIsEnable(1L);
	    userRoleMapDTO.setRole(userRoleClient.getRoleById(this.selection_role_id));
	    userRoleClient.addUserRole(userRoleMapDTO);
	    LOGGER.info("mapping of user role done");

	} else {
	    roleList = new ArrayList<RoleDTO>();
	    roleList = userRoleClient.getRoleDetails();
	    roleMap = new HashMap<Long, RoleDTO>();
	    roleList.forEach(roleItem -> {
		roleMap.put(roleItem.getId(), roleItem);
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
