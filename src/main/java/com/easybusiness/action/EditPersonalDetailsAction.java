package com.easybusiness.action;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.UserBankMapDTO;
import com.easybusiness.bean.UserDTO;
import com.easybusiness.bean.UserGroupMapDTO;
import com.easybusiness.bean.UserRoleMapDTO;
import com.easybusiness.restclient.UserClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class EditPersonalDetailsAction extends ActionSupport implements SessionAware {

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
    private UserRoleMapDTO[] userRoleDetailsDTO;
    private UserGroupMapDTO[] userGroupMapDetailsDTO;
    private UserBankMapDTO[] userBankMapDetailsDTO;

    private String editName;
    private String editAddress;
    private String editEmail;
    private String editMobile;
    private String editState;
    private String editCountry;
    private String editCity;
    private String editZip;
    private String editDOB;
    private String editFather;
    private String editSpouse;
    private String editPassport;
    private String editLastName;
    private String formattedDate;

    private String errorMessage;

    public EditPersonalDetailsAction() {
	super();
    }

    public String getUser_id() {
	return user_id;
    }

    public void setUser_id(String user_id) {
	this.user_id = user_id;
    }

    
    public String getFormattedDate() {
        return formattedDate;
    }

    public void setFormattedDate(String formattedDate) {
        this.formattedDate = formattedDate;
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

    public UserRoleMapDTO[] getUserRoleDetailsDTO() {
	return userRoleDetailsDTO;
    }

    public void setUserRoleDetailsDTO(UserRoleMapDTO[] userRoleDetailsDTO) {
	this.userRoleDetailsDTO = userRoleDetailsDTO;
    }

    public UserGroupMapDTO[] getUserGroupMapDetailsDTO() {
	return userGroupMapDetailsDTO;
    }

    public void setUserGroupMapDetailsDTO(UserGroupMapDTO[] userGroupMapDetailsDTO) {
	this.userGroupMapDetailsDTO = userGroupMapDetailsDTO;
    }

    public UserBankMapDTO[] getUserBankMapDetailsDTO() {
	return userBankMapDetailsDTO;
    }

    public void setUserBankMapDetailsDTO(UserBankMapDTO[] userBankMapDetailsDTO) {
	this.userBankMapDetailsDTO = userBankMapDetailsDTO;
    }
    
    

    public UserClient getUserClient() {
        return userClient;
    }

    public void setUserClient(UserClient userClient) {
        this.userClient = userClient;
    }

    public String getEditName() {
        return editName;
    }

    public void setEditName(String editName) {
        this.editName = editName;
    }

    public String getEditAddress() {
        return editAddress;
    }

    public void setEditAddress(String editAddress) {
        this.editAddress = editAddress;
    }

    public String getEditEmail() {
        return editEmail;
    }

    public void setEditEmail(String editEmail) {
        this.editEmail = editEmail;
    }

    public String getEditMobile() {
        return editMobile;
    }

    public void setEditMobile(String editMobile) {
        this.editMobile = editMobile;
    }

    public String getEditState() {
        return editState;
    }

    public void setEditState(String editState) {
        this.editState = editState;
    }

    public String getEditCountry() {
        return editCountry;
    }

    public void setEditCountry(String editCountry) {
        this.editCountry = editCountry;
    }

    public String getEditCity() {
        return editCity;
    }

    public void setEditCity(String editCity) {
        this.editCity = editCity;
    }

    public String getEditZip() {
        return editZip;
    }

    public void setEditZip(String editZip) {
        this.editZip = editZip;
    }

    public String getEditDOB() {
        return editDOB;
    }

    public void setEditDOB(String editDOB) {
        this.editDOB = editDOB;
    }

    public String getEditFather() {
        return editFather;
    }

    public void setEditFather(String editFather) {
        this.editFather = editFather;
    }

    public String getEditSpouse() {
        return editSpouse;
    }

    public void setEditSpouse(String editSpouse) {
        this.editSpouse = editSpouse;
    }

    public String getEditPassport() {
        return editPassport;
    }

    public void setEditPassport(String editPassport) {
        this.editPassport = editPassport;
    }
    
    

    public String getEditLastName() {
        return editLastName;
    }

    public void setEditLastName(String editLastName) {
        this.editLastName = editLastName;
    }

    public Map<String, Object> getSession() {
        return session;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String execute() {
	try{
	if (null != this.editName) {
	   
		this.userDetailsDTO = userClient.getUserLoginDetails(this.session.get("userName").toString(), null);
		this.userDetailsDTO.setFirstName(this.editName);
		this.userDetailsDTO.setLastName(this.editLastName);
		this.userDetailsDTO.setCity(this.editCity);
		this.userDetailsDTO.setCountry(this.editCountry);
		try {
		    this.userDetailsDTO.setDateOfBirth(
				new java.sql.Date((new SimpleDateFormat("dd-MMM-yyyy").parse(this.editDOB)).getTime()));
		    } catch (ParseException e) {
			e.printStackTrace();
		    }
		this.userDetailsDTO.setEmail(this.editEmail);
		this.userDetailsDTO.setFatherName(this.editFather);
		this.userDetailsDTO.setMobile(Long.parseLong(this.editMobile));
		this.userDetailsDTO.setPassport(this.editPassport);
		this.userDetailsDTO.setPermAddr(this.editAddress);
		this.userDetailsDTO.setSpouseName(this.editSpouse);
		this.userDetailsDTO.setState(this.editState);
		this.userDetailsDTO.setZip(this.editZip);
		userClient.updateUser(this.userDetailsDTO);
		this.formattedDate=formatDate(this.userDetailsDTO.getDateOfBirth());
	    
		this.showResult = "yes";
	} else {
	    this.userDetailsDTO = userClient.getUserLoginDetails(this.session.get("userName").toString(), null);
	    System.out.println("user details is " + this.userDetailsDTO.toString());
	    this.formattedDate=formatDate(this.userDetailsDTO.getDateOfBirth());
	    this.showResult = "no";
	}
	return SUCCESS;
	}
	catch(Exception e)
	{
	    this.errorMessage="Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }
    

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }
    
    private String formatDate(Date dateToFormat)
    {
	SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
	String dateformat=formatter.format(dateToFormat);
	System.out.println("first date format"+ dateformat);
	return dateformat;
    }


}
