package com.easybusiness.action;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.UserAcademicsDTO;
import com.easybusiness.bean.UserBankMapDTO;
import com.easybusiness.bean.UserDTO;
import com.easybusiness.bean.UserGroupMapDTO;
import com.easybusiness.bean.UserProfessionDTO;
import com.easybusiness.bean.UserRoleMapDTO;
import com.easybusiness.restclient.UserClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class ViewUserLandingAction extends ActionSupport implements SessionAware {

    private static final long serialVersionUID = 1L;

    @Autowired
    UserClient userClient;

    private static final Logger LOGGER = LoggerFactory.getLogger(ViewUserLandingAction.class);

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

    private UserAcademicsDTO userAcademicsDTO;

    private String imgId, name, image;

    private UserProfessionDTO userProfessionDTO;

    private String errorMessage;

    public ViewUserLandingAction() {
	super();
    }

    public UserProfessionDTO getUserProfessionDTO() {
	return userProfessionDTO;
    }

    public void setUserProfessionDTO(UserProfessionDTO userProfessionDTO) {
	this.userProfessionDTO = userProfessionDTO;
    }

    public UserAcademicsDTO getUserAcademicsDTO() {
	return userAcademicsDTO;
    }

    public void setUserAcademicsDTO(UserAcademicsDTO userAcademicsDTO) {
	this.userAcademicsDTO = userAcademicsDTO;
    }

    public String getImgId() {
	return imgId;
    }

    public void setImgId(String imgId) {
	this.imgId = imgId;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public String getImage() {
	return image;
    }

    public void setImage(String image) {
	this.image = image;
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

    public String getErrorMessage() {
	return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
	this.errorMessage = errorMessage;
    }

    public String execute() {
	try {
	    if (null != this.user_name_search || null != this.user_id_search) {
		try {
		    if (null != this.user_name_search) {
			this.userDetailsDTO = userClient.getUserLoginDetails(this.user_name_search.trim(), null);
		    } else if (null != this.user_id_search) {
			this.userDetailsDTO = userClient.getUserDetailsById(this.user_id_search.trim());
		    }
		} catch (Exception e) {
		    LOGGER.info("exception in getting  details for user {},{},{} " + this.user_name_search
			    + this.user_id_search + e.getMessage());
		}

		/*
		 * this.userGroupMapDetailsDTO =
		 * userClient.getUserGroup(this.userDetailsDTO.getId());
		 * this.userRoleDetailsDTO =
		 * userClient.getUserRole(this.userDetailsDTO.getId());
		 */
		try {
		    this.userBankMapDetailsDTO = userClient.getBankByUserId(this.userDetailsDTO.getId());
		} catch (Exception e) {
		    LOGGER.info("exception in getting bank details for user {},{} " + this.userDetailsDTO.getId()
			    + e.getMessage());
		}
		try {
		    byte data[] = userClient.getUserImage(this.userDetailsDTO.getId().toString()).getUserImg();
		    String imageBase64 = new String(Base64.encodeBase64(data));
		    StringBuilder imageString = new StringBuilder();
		    imageString.append("data:image/png;base64,");
		    imageString.append(imageBase64);
		    image = imageString.toString();
		} catch (Exception e) {
		    System.out.println("exception in getting image for user {},{} " + this.userDetailsDTO.getId()
			    + e.getMessage());
		}
		try {
		    this.userAcademicsDTO = userClient.getUserAcademics(this.userDetailsDTO.getId().toString());
		} catch (Exception e) {
		    LOGGER.info("exception while getting user academics for {}, {}" + this.userDetailsDTO.getId()
			    + e.getMessage());
		}
		try {
		    this.userProfessionDTO = userClient.getUserProfession(this.userDetailsDTO.getId().toString());
		} catch (Exception e) {
		    LOGGER.info("exception while getting user professional details for {}, {}"
			    + this.userDetailsDTO.getId() + e.getMessage());
		}
		this.showResult = "yes";

	    } else {
		this.showResult = "no";
	    }
	    return SUCCESS;
	} catch (Exception e) {
	    this.errorMessage = "Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }

}
