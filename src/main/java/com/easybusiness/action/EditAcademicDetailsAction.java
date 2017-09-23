package com.easybusiness.action;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.UserAcademicsDTO;
import com.easybusiness.bean.UserDTO;
import com.easybusiness.restclient.UserClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class EditAcademicDetailsAction extends ActionSupport implements SessionAware {

    private static final long serialVersionUID = 1L;

    @Autowired
    UserClient userClient;

    Map<String, Object> session;
    private String user_id;
    private String user_name;
    private String showResult;
    private UserDTO userDetailsDTO;
    private String user_id_search;
    private String user_name_search;

    private UserAcademicsDTO userAcademicsDTO;

    private String editUniversity;
    private String editCollege;
    private String editPassOutYear;
    private String editHighestDegree;
    private String editMarks;

    private String errorMessage;

    public EditAcademicDetailsAction() {
	super();
    }

    public String getUser_id() {
	return user_id;
    }

    public void setUser_id(String user_id) {
	this.user_id = user_id;
    }

    public String getUser_name() {
	return user_name;
    }

    public void setUser_name(String user_name) {
	this.user_name = user_name;
    }

    public String getShowResult() {
	return showResult;
    }

    public void setShowResult(String showResult) {
	this.showResult = showResult;
    }

    public UserDTO getUserDetailsDTO() {
	return userDetailsDTO;
    }

    public void setUserDetailsDTO(UserDTO userDetailsDTO) {
	this.userDetailsDTO = userDetailsDTO;
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

    public UserClient getUserClient() {
	return userClient;
    }

    public void setUserClient(UserClient userClient) {
	this.userClient = userClient;
    }

    public Map<String, Object> getSession() {
	return session;
    }

    public UserAcademicsDTO getUserAcademicsDTO() {
	return userAcademicsDTO;
    }

    public void setUserAcademicsDTO(UserAcademicsDTO userAcademicsDTO) {
	this.userAcademicsDTO = userAcademicsDTO;
    }

    public String getEditUniversity() {
	return editUniversity;
    }

    public void setEditUniversity(String editUniversity) {
	this.editUniversity = editUniversity;
    }

    public String getEditCollege() {
	return editCollege;
    }

    public void setEditCollege(String editCollege) {
	this.editCollege = editCollege;
    }

    public String getEditPassOutYear() {
	return editPassOutYear;
    }

    public void setEditPassOutYear(String editPassOutYear) {
	this.editPassOutYear = editPassOutYear;
    }

    public String getEditHighestDegree() {
	return editHighestDegree;
    }

    public void setEditHighestDegree(String editHighestDegree) {
	this.editHighestDegree = editHighestDegree;
    }

    public String getEditMarks() {
	return editMarks;
    }

    public void setEditMarks(String editMarks) {
	this.editMarks = editMarks;
    }
    
    

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String execute() {
	try {
	    if (null != this.editHighestDegree) {

		UserAcademicsDTO userAcademicsResultDTO = new UserAcademicsDTO();
		this.userDetailsDTO = userClient.getUserLoginDetails(this.session.get("userName").toString(), null);
		this.userAcademicsDTO = new UserAcademicsDTO();
		this.userAcademicsDTO.setCollege(this.editCollege);
		this.userAcademicsDTO.setHighestDegree(this.editHighestDegree);
		this.userAcademicsDTO.setMarks(this.editMarks);
		this.userAcademicsDTO.setPassOutYear(this.editPassOutYear);
		this.userAcademicsDTO.setUniversity(this.editUniversity);
		this.userAcademicsDTO.setUser(this.userDetailsDTO);
		try {
		    userAcademicsResultDTO = userClient.getUserAcademics(this.userDetailsDTO.getId().toString());
		} catch (Exception e) {
		    System.out.println("exception in getting user academics " + e.getMessage());
		    userAcademicsResultDTO = null;
		}
		if (null == userAcademicsResultDTO) {
		    userClient.addUserAcademics(this.userAcademicsDTO);
		} else {
		    this.userAcademicsDTO.setId(userAcademicsResultDTO.getId());
		    userClient.updateUserAcademics(this.userAcademicsDTO);
		}

		this.showResult = "yes";
	    } else {
		this.userDetailsDTO = userClient.getUserLoginDetails(this.session.get("userName").toString(), null);
		try {
		    this.userAcademicsDTO = userClient.getUserAcademics(this.userDetailsDTO.getId().toString());
		    System.out.println("user academics  details is " + this.userAcademicsDTO.toString());
		} catch (Exception e) {
		    System.out.println("exception in getting academic details of user "
			    + this.session.get("userName").toString() + " " + e.getMessage());
		    this.userAcademicsDTO = new UserAcademicsDTO();
		}

		System.out.println("user details is " + this.userDetailsDTO.toString());

		this.showResult = "no";
	    }
	    return SUCCESS;
	} catch (Exception e) {
	    this.errorMessage="Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }

}
