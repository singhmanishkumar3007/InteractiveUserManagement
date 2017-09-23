package com.easybusiness.action;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.SubMenuDTO;
import com.easybusiness.bean.SubMenuUrlDTO;
import com.easybusiness.bean.UserAcademicsDTO;
import com.easybusiness.bean.UserBankMapDTO;
import com.easybusiness.bean.UserDTO;
import com.easybusiness.bean.UserGroupMapDTO;
import com.easybusiness.bean.UserGroupMenuDTO;
import com.easybusiness.bean.UserGroupMenuSubMenuDTO;
import com.easybusiness.bean.UserRoleMapDTO;
import com.easybusiness.restclient.UserClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class LoginAction extends ActionSupport implements SessionAware {

    @Autowired
    UserClient userClient;
    private static final long serialVersionUID = 1L;

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginAction.class);
    private String userName;
    private String password;
    private UserDTO userDTO;
    private UserRoleMapDTO[] userRoleDTO;
    private UserGroupMapDTO[] userGroupMapDTO;
    private UserGroupMenuSubMenuDTO[] userGroupMenuDTO;
    private UserGroupMenuDTO[] userGroupMenuMapDTO;
    private UserBankMapDTO[] userBankMapDTO;
    private UserGroupMenuSubMenuDTO userGroupMenuItem;
    private SubMenuDTO[] subMenuDTO;
    private Map<Long, SubMenuDTO[]> menuSubMenuMap;
    private Map<Long, SubMenuUrlDTO> urlSubMenuMap;
    Map<String, Object> session;
    private UserAcademicsDTO userAcademicsDTO;

    private String imgId, name, image;
    
    private String errorMessage;

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

    public String getUserName() {
	return userName;
    }

    public String getPassword() {
	return password;
    }

    public void setUserName(String userName) {
	this.userName = userName;
    }

    public void setPassword(String password) {
	this.password = password;
    }

    public UserDTO getUserDTO() {
	return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
	this.userDTO = userDTO;
    }

    public UserRoleMapDTO[] getUserRoleDTO() {
	return userRoleDTO;
    }

    public void setUserRoleDTO(UserRoleMapDTO[] userRoleDTO) {
	this.userRoleDTO = userRoleDTO;
    }

    public UserGroupMapDTO[] getUserGroupMapDTO() {
	return userGroupMapDTO;
    }

    public void setUserGroupMapDTO(UserGroupMapDTO[] userGroupMapDTO) {
	this.userGroupMapDTO = userGroupMapDTO;
    }

    public UserGroupMenuSubMenuDTO[] getUserGroupMenuDTO() {
	return userGroupMenuDTO;
    }

    public void setUserGroupMenuDTO(UserGroupMenuSubMenuDTO[] userGroupMenuDTO) {
	this.userGroupMenuDTO = userGroupMenuDTO;
    }

    public UserBankMapDTO[] getUserBankMapDTO() {
	return userBankMapDTO;
    }

    public void setUserBankMapDTO(UserBankMapDTO[] userBankMapDTO) {
	this.userBankMapDTO = userBankMapDTO;
    }

    public UserGroupMenuSubMenuDTO getUserGroupMenuItem() {
	return userGroupMenuItem;
    }

    public void setUserGroupMenuItem(UserGroupMenuSubMenuDTO userGroupMenuItem) {
	this.userGroupMenuItem = userGroupMenuItem;
    }

    public SubMenuDTO[] getSubMenuDTO() {
	return subMenuDTO;
    }

    public void setSubMenuDTO(SubMenuDTO[] subMenuDTO) {
	this.subMenuDTO = subMenuDTO;
    }

    public Map<Long, SubMenuDTO[]> getMenuSubMenuMap() {
	return menuSubMenuMap;
    }

    public void setMenuSubMenuMap(Map<Long, SubMenuDTO[]> menuSubMenuMap) {
	this.menuSubMenuMap = menuSubMenuMap;
    }

    public Map<Long, SubMenuUrlDTO> getUrlSubMenuMap() {
	return urlSubMenuMap;
    }

    public void setUrlSubMenuMap(Map<Long, SubMenuUrlDTO> urlSubMenuMap) {
	this.urlSubMenuMap = urlSubMenuMap;
    }

    public UserGroupMenuDTO[] getUserGroupMenuMapDTO() {
	return userGroupMenuMapDTO;
    }

    public void setUserGroupMenuMapDTO(UserGroupMenuDTO[] userGroupMenuMapDTO) {
	this.userGroupMenuMapDTO = userGroupMenuMapDTO;
    }
    
    

    public UserAcademicsDTO getUserAcademicsDTO() {
        return userAcademicsDTO;
    }

    public void setUserAcademicsDTO(UserAcademicsDTO userAcademicsDTO) {
        this.userAcademicsDTO = userAcademicsDTO;
    }
    
    

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public LoginAction() {
	super();
    }

    public String execute() {
	if (this.session.containsKey("userName")) {
	    userName = (String) session.get("userName");
	}

	try {
	    this.menuSubMenuMap = new HashMap<Long, SubMenuDTO[]>();
	    this.urlSubMenuMap = new HashMap<Long, SubMenuUrlDTO>();
	    this.userDTO = userClient.getUserLoginDetails(this.userName, this.password);
	    System.out.println("date of birth is " + formatDate(this.userDTO.getDateOfBirth()));
	    this.userDTO.setDateOfBirth(formatDate(this.userDTO.getDateOfBirth()));
	    this.userGroupMapDTO = userClient.getUserGroup(this.userDTO.getId());
	    try{
	    this.userRoleDTO = userClient.getUserRole(this.userDTO.getId());
	    }
	    catch(Exception e)
	    {
		LOGGER.info("error in getting role details for user {}, {}"+this.userDTO.getUserName()+e.getMessage());
		
	    }
	    this.userGroupMenuDTO = userClient
		    .getMenuSubMenuByUserGroup(this.userGroupMapDTO[0].getUserGroup().getId());
	    this.userGroupMenuMapDTO = userClient.getMenuByUserGroup(this.userGroupMapDTO[0].getUserGroup().getId());
	    LOGGER.info("size of menu sub menu array is " + this.userGroupMenuDTO.length);
	    try{
	    this.userBankMapDTO = userClient.getBankByUserId(this.userDTO.getId());
	    }
	    catch(Exception e)
	    {
		LOGGER.info("error in getting bank details for user {}, {}"+this.userDTO.getUserName()+e.getMessage());
	    }

	    for (int i = 0; i < this.userGroupMenuMapDTO.length; i++) {
		System.out.println("menu arrays is " + this.userGroupMenuMapDTO);

		int counter = 0;
		this.subMenuDTO = new SubMenuDTO[20];
		for (int m = 0; m < this.userGroupMenuDTO.length; m++) {
		    if (this.userGroupMenuMapDTO[i].getMenuItem().getId() == this.userGroupMenuDTO[m].getMenuItem()
			    .getId()) {
			SubMenuDTO subMenuDTOItem = userClient
				.getSubMenuBySubMenuId(this.userGroupMenuDTO[m].getSubMenuItem().getId());
			System.out.println("sub menu DTO Item is " + subMenuDTOItem.toString());
			this.subMenuDTO[counter] = subMenuDTOItem;
			counter++;
		    }
		}

		menuSubMenuMap.put(this.userGroupMenuMapDTO[i].getMenuItem().getId(), this.subMenuDTO);

		for (int j = 0; j < this.subMenuDTO.length; j++) {
		    if (null != this.subMenuDTO[j]) {
			urlSubMenuMap.put(this.subMenuDTO[j].getId(),
				userClient.getUrlBySubMenuId(subMenuDTO[j].getId()));
		    }
		}
	    }

	    this.session.put("userDTOSession", this.userDTO);
	    this.session.put("userGroupMapDTOSession", this.userGroupMapDTO);
	    this.session.put("userRoleDTOSession", this.userRoleDTO);
	    this.session.put("userGroupMenuDTOSession", this.userGroupMenuMapDTO);
	    this.session.put("userBankMapDTOSession", this.userBankMapDTO);
	    this.session.put("menuSubMenuMapSession", this.menuSubMenuMap);
	    this.session.put("urlSubMenuMapSession", this.urlSubMenuMap);
	    this.session.put("userName", this.userDTO.getUserName());
	    this.session.put("firstName", this.userDTO.getFirstName());

	    // get user image

	    try {
		byte data[] = userClient.getUserImage(this.userDTO.getId().toString()).getUserImg();
		String imageBase64 = new String(Base64.encodeBase64(data));
		StringBuilder imageString = new StringBuilder();
		imageString.append("data:image/png;base64,");
		imageString.append(imageBase64);
		image = imageString.toString();

		this.session.put("image", image);
	    } catch (Exception e) {
		System.out.println("exception in getting image for user {},{} " +this.userDTO.getId()+ e.getMessage());
	    }
	    
	    // get user Academics details
	    try
	    {
	    this.userAcademicsDTO=userClient.getUserAcademics(this.userDTO.getId().toString());
	    this.session.put("userAcademicsDTO", this.userAcademicsDTO);
	    }
	    catch(Exception e)
	    {
		LOGGER.info("exception while getting user academics for {}, {}"+this.userDTO.getId()+e.getMessage());
	    }

	    if (null != this.userDTO && null != userName) {
		this.userGroupMenuItem = this.userGroupMenuDTO[0];
		return SUCCESS;
	    } else {
		return ERROR;
	    }
	} catch (Exception e) {
	    this.errorMessage="Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }

    public String logout() {
	// remove userName from the session
	if (session.containsKey("userName")) {
	    session.remove("userName");
	}
	return SUCCESS;
    }

    private Date formatDate(Date dateToFormat) {
	SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
	String dateformat = formatter.format(dateToFormat);
	System.out.println("first date format" + dateformat);
	try {
	    java.sql.Date sql = new Date(new SimpleDateFormat("dd-MM-yyyy").parse(dateformat).getTime());

	    System.out.println("formatted date is " + sql);
	    return sql;
	} catch (ParseException e) {
	    e.printStackTrace();
	    return null;
	}
    }

}
