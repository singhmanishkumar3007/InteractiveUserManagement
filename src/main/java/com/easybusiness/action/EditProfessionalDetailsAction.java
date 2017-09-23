package com.easybusiness.action;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.UserDTO;
import com.easybusiness.bean.UserProfessionDTO;
import com.easybusiness.restclient.UserClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class EditProfessionalDetailsAction extends ActionSupport implements SessionAware {

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

    private UserProfessionDTO userProfessionDTO;

    private String editTotalExp;
    private String editRelevantExp;
    private String editPrimarySkill;
    private String editPrimarySkillDuration;
    private String editPrevOrganization;
    private String editPrevFromDate;
    private String editPrevToDate;
    private String editPrevOnsite;
    private String editPrevTech;
    private String editPrevAchieve;
    private String editPrevDesig;
    private String formattedFromDate;
    private String formattedToDate;

    private String errorMessage;

    public EditProfessionalDetailsAction() {
	super();
    }

    public UserProfessionDTO getUserProfessionDTO() {
	return userProfessionDTO;
    }

    public void setUserProfessionDTO(UserProfessionDTO userProfessionDTO) {
	this.userProfessionDTO = userProfessionDTO;
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

    public String getEditTotalExp() {
	return editTotalExp;
    }

    public void setEditTotalExp(String editTotalExp) {
	this.editTotalExp = editTotalExp;
    }

    public String getEditRelevantExp() {
	return editRelevantExp;
    }

    public void setEditRelevantExp(String editRelevantExp) {
	this.editRelevantExp = editRelevantExp;
    }

    public String getEditPrimarySkill() {
	return editPrimarySkill;
    }

    public void setEditPrimarySkill(String editPrimarySkill) {
	this.editPrimarySkill = editPrimarySkill;
    }

    public String getEditPrimarySkillDuration() {
	return editPrimarySkillDuration;
    }

    public void setEditPrimarySkillDuration(String editPrimarySkillDuration) {
	this.editPrimarySkillDuration = editPrimarySkillDuration;
    }

    public String getEditPrevOrganization() {
	return editPrevOrganization;
    }

    public void setEditPrevOrganization(String editPrevOrganization) {
	this.editPrevOrganization = editPrevOrganization;
    }

    public String getEditPrevFromDate() {
	return editPrevFromDate;
    }

    public void setEditPrevFromDate(String editPrevFromDate) {
	this.editPrevFromDate = editPrevFromDate;
    }

    public String getEditPrevToDate() {
	return editPrevToDate;
    }

    public void setEditPrevToDate(String editPrevToDate) {
	this.editPrevToDate = editPrevToDate;
    }

    public String getEditPrevOnsite() {
	return editPrevOnsite;
    }

    public void setEditPrevOnsite(String editPrevOnsite) {
	this.editPrevOnsite = editPrevOnsite;
    }

    public String getEditPrevTech() {
	return editPrevTech;
    }

    public void setEditPrevTech(String editPrevTech) {
	this.editPrevTech = editPrevTech;
    }

    public String getEditPrevAchieve() {
	return editPrevAchieve;
    }

    public void setEditPrevAchieve(String editPrevAchieve) {
	this.editPrevAchieve = editPrevAchieve;
    }

    public String getEditPrevDesig() {
	return editPrevDesig;
    }

    public void setEditPrevDesig(String editPrevDesig) {
	this.editPrevDesig = editPrevDesig;
    }

    public Map<String, Object> getSession() {
	return session;
    }
    
    

    public String getFormattedFromDate() {
        return formattedFromDate;
    }

    public void setFormattedFromDate(String formattedFromDate) {
        this.formattedFromDate = formattedFromDate;
    }

    public String getFormattedToDate() {
        return formattedToDate;
    }

    public void setFormattedToDate(String formattedToDate) {
        this.formattedToDate = formattedToDate;
    }

    public String execute() {
	try{
	if (null != this.editTotalExp) {

	    UserProfessionDTO userProfessionResultDTO = new UserProfessionDTO();
	    this.userDetailsDTO = userClient.getUserLoginDetails(this.session.get("userName").toString(), null);
	    this.userProfessionDTO = new UserProfessionDTO();
	    this.userProfessionDTO.setPrevAchievement(this.editPrevAchieve);
	    this.userProfessionDTO.setPrevDesignation(this.editPrevDesig);
	    try {
		userProfessionDTO.setPrevFromDate(
			new java.sql.Date((new SimpleDateFormat("dd-MMM-yyyy").parse(this.editPrevFromDate)).getTime()));
		userProfessionDTO.setPrevToDate(
			new java.sql.Date((new SimpleDateFormat("dd-MMM-yyyy").parse(this.editPrevToDate)).getTime()));
	    } catch (ParseException e) {
		e.printStackTrace();
	    }
	    this.userProfessionDTO.setPrevOnsiteDuration(this.editPrevOnsite);
	    this.userProfessionDTO.setPrevOrganization(this.editPrevOrganization);
	    this.userProfessionDTO.setPrevTechnology(this.editPrevTech);
	    this.userProfessionDTO.setPrimarySkill(this.editPrimarySkill);
	    this.userProfessionDTO.setPrimarySkillDuration(this.editPrimarySkillDuration);
	    this.userProfessionDTO.setRelevantExp(this.editRelevantExp);
	    this.userProfessionDTO.setTotalExp(this.editTotalExp);
	    this.userProfessionDTO.setUser(this.userDetailsDTO);
	    try {
		userProfessionResultDTO = userClient.getUserProfession(this.userDetailsDTO.getId().toString());
	    } catch (Exception e) {
		System.out.println("exception in getting user profession " + e.getMessage());
		userProfessionResultDTO = null;
	    }
	    if (null == userProfessionResultDTO) {
		userClient.addUserProfession(this.userProfessionDTO);
	    } else {
		this.userProfessionDTO.setId(userProfessionResultDTO.getId());
		userClient.updateUserProfession(this.userProfessionDTO);
	    }
	    
	    this.formattedFromDate=formatDate(this.userProfessionDTO.getPrevFromDate());
	    this.formattedToDate=formatDate(this.userProfessionDTO.getPrevToDate());

	    this.showResult = "yes";
	} else {
	    this.userDetailsDTO = userClient.getUserLoginDetails(this.session.get("userName").toString(), null);
	    try {
		this.userProfessionDTO = userClient.getUserProfession(this.userDetailsDTO.getId().toString());
		 System.out.println("user profession  details is " + this.userProfessionDTO.toString());
		  this.formattedFromDate=formatDate(this.userProfessionDTO.getPrevFromDate());
		  this.formattedToDate=formatDate(this.userProfessionDTO.getPrevToDate());
	    } catch (Exception e) {
		System.out.println("exception in getting profesional details of user "
			+ this.session.get("userName").toString() + " " + e.getMessage());
		this.userProfessionDTO = new UserProfessionDTO();
	    }

	    System.out.println("user details is " + this.userDetailsDTO.toString());
	   
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
    
    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    private String formatDate(Date dateToFormat)
    {
	SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
	String dateformat=formatter.format(dateToFormat);
	System.out.println("first date format"+ dateformat);
	return dateformat;
    }

}
