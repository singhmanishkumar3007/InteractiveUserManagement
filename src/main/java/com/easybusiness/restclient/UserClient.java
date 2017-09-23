package com.easybusiness.restclient;

import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.easybusiness.bean.SubMenuDTO;
import com.easybusiness.bean.SubMenuUrlDTO;
import com.easybusiness.bean.UserAcademicsDTO;
import com.easybusiness.bean.UserBankMapDTO;
import com.easybusiness.bean.UserDTO;
import com.easybusiness.bean.UserGroupMapDTO;
import com.easybusiness.bean.UserGroupMenuDTO;
import com.easybusiness.bean.UserGroupMenuSubMenuDTO;
import com.easybusiness.bean.UserImageDTO;
import com.easybusiness.bean.UserProfessionDTO;
import com.easybusiness.bean.UserRoleMapDTO;
import com.easybusiness.utility.AppUtility;

@Component
public class UserClient {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private HttpHeaders httpHeaders;

    @Autowired
    private AppUtility appUtility;

    @Value("${hostserver}")
    private String hostServer;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserClient.class);

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public UserDTO getUserLoginDetails(String userName, String password) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/getByUserName/" + userName, HttpMethod.GET, requestEntity,
		UserDTO.class);
	LOGGER.info("response of get user is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public UserDTO getUserDetailsByName(String userName) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/getByUserName/" + userName, HttpMethod.GET, requestEntity,
		UserDTO.class);
	LOGGER.info("response of get user is  " + response.toString());
	return response.getBody();
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<UserDTO> getAllUserDetails() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserDTO[]> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/getAllUsers/" , HttpMethod.GET, requestEntity,
		UserDTO[].class);
	LOGGER.info("response of get  all users is  " + response.toString());
	return (List<UserDTO>) Arrays.asList(response.getBody());
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public UserDTO getUserDetailsById(String userId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/getByUserId/" + Long.parseLong(userId), HttpMethod.GET, requestEntity,
		UserDTO.class);
	LOGGER.info("response of get user is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public UserGroupMapDTO[] getUserGroup(long userId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserGroupMapDTO[]> response = restTemplate.exchange(
		hostServer + "/easybusiness/usergroup/getByUserId/" + userId, HttpMethod.GET, requestEntity,
		UserGroupMapDTO[].class);
	LOGGER.info("response of get userGroup is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public UserRoleMapDTO[] getUserRole(long userId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserRoleMapDTO[]> response = restTemplate.exchange(
		hostServer + "/easybusiness/userrole/getRoleByUserId/" + userId, HttpMethod.GET, requestEntity,
		UserRoleMapDTO[].class);
	LOGGER.info("response of get role is  " + response.toString());
	return response.getBody();
    }

    public UserGroupMenuDTO[] getMenuByUserGroup(long userGroupId) {
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	UserGroupMenuDTO[] response = restTemplate.getForObject(
		hostServer + "/easybusiness/usergroupmenu/getUserGroupMenuByGroupId/" + userGroupId,
		UserGroupMenuDTO[].class);
	LOGGER.info("response of get Menu by Group Id is  " + response.toString());
	return response;
    }

    public UserGroupMenuSubMenuDTO[] getMenuSubMenuByUserGroup(long userGroupId) {
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	UserGroupMenuSubMenuDTO[] response = restTemplate.getForObject(
		hostServer + "/easybusiness/usergroupmenusubmenu/getUserGroupMenuByGroupId/" + userGroupId,
		UserGroupMenuSubMenuDTO[].class);
	LOGGER.info("response of get Menu by Group Id is  " + response.toString());
	return response;
    }

    public UserBankMapDTO[] getBankByUserId(long userId) {
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	UserBankMapDTO[] response = restTemplate
		.getForObject(hostServer + "/easybusiness/userbank/getbankByUserId/" + userId, UserBankMapDTO[].class);
	LOGGER.info("response of get Menu by Group Id is  " + response.toString());
	return response;
    }

    public SubMenuDTO[] getSubMenuByMenuId(long menuId) {
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	SubMenuDTO[] response = restTemplate
		.getForObject(hostServer + "/easybusiness/menu/getSubMenuByParentMenuId/" + menuId, SubMenuDTO[].class);
	LOGGER.info("response of get Menu by Group Id is  " + response.toString());
	return response;
    }

    public SubMenuDTO getSubMenuBySubMenuId(long menuId) {
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	SubMenuDTO response = restTemplate
		.getForObject(hostServer + "/easybusiness/menu/getSubMenuBySubMenuId/" + menuId, SubMenuDTO.class);
	LOGGER.info("response of get Sub Menu by Sub Menu Id is  " + response.toString());
	return response;
    }

    public SubMenuUrlDTO getUrlBySubMenuId(long subMenuId) {
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	SubMenuUrlDTO response = restTemplate
		.getForObject(hostServer + "/easybusiness/menu/getUrlBySubMenuId/" + subMenuId, SubMenuUrlDTO.class);
	LOGGER.info("response of get Url by SubMenu Id is  " + response.toString());
	return response;
    }

    public UserDTO addUser(UserDTO userDTO) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity<UserDTO> requestEntity = new HttpEntity<UserDTO>(userDTO, headerBuilder());
	System.out.println("user DTO to add is " + userDTO.toString());

	ResponseEntity<UserDTO> response = restTemplate.exchange(hostServer + "/easybusiness/user/addUser",
		HttpMethod.POST, requestEntity, UserDTO.class);
	LOGGER.info("response of create user is  " + response.toString());
	return response.getBody();
    }

    public UserDTO updateUser(UserDTO userDTO) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity<UserDTO> requestEntity = new HttpEntity<UserDTO>(userDTO, headerBuilder());
	System.out.println("user DTO to upate is " + userDTO.toString());

	ResponseEntity<UserDTO> response = restTemplate.exchange(hostServer + "/easybusiness/user/updateUser",
		HttpMethod.POST, requestEntity, UserDTO.class);
	LOGGER.info("response of update user is  " + response.toString());
	return response.getBody();
    }

    public UserImageDTO addUserImage(UserImageDTO userImageDTO) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity<UserImageDTO> requestEntity = new HttpEntity<UserImageDTO>(userImageDTO, headerBuilder());
	System.out.println(
		"userImage DTO to add is " + userImageDTO.toString() + "~" + userImageDTO.getUserImg().toString());

	ResponseEntity<UserImageDTO> response = restTemplate.exchange(hostServer + "/easybusiness/user/addUserImage",
		HttpMethod.POST, requestEntity, UserImageDTO.class);
	LOGGER.info("response of create user Image is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public UserImageDTO getUserImage(String userId) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	ResponseEntity<UserImageDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/getUserImage/" + userId, HttpMethod.GET, requestEntity,
		UserImageDTO.class);

	LOGGER.info("response of get user Image is  " + response.toString());
	return response.getBody();
    }

    public UserProfessionDTO addUserProfession(UserProfessionDTO userProfessionDTO) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity<UserProfessionDTO> requestEntity = new HttpEntity<UserProfessionDTO>(userProfessionDTO,
		headerBuilder());
	System.out.println("userProfession DTO to add is " + userProfessionDTO.toString());

	ResponseEntity<UserProfessionDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/addUserProfession", HttpMethod.POST, requestEntity,
		UserProfessionDTO.class);
	LOGGER.info("response of create user Profession is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public UserProfessionDTO getUserProfession(String userId) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	ResponseEntity<UserProfessionDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/getUserProfession/" + userId, HttpMethod.GET, requestEntity,
		UserProfessionDTO.class);

	LOGGER.info("response of get user Profession is  " + response.toString());
	return response.getBody();
    }

    public UserProfessionDTO updateUserProfession(UserProfessionDTO userProfessionDTO) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity<UserProfessionDTO> requestEntity = new HttpEntity<UserProfessionDTO>(userProfessionDTO,
		headerBuilder());
	System.out.println("userProfession DTO to update is " + userProfessionDTO.toString());

	ResponseEntity<UserProfessionDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/updateUserProfession", HttpMethod.POST, requestEntity,
		UserProfessionDTO.class);
	LOGGER.info("response of update user Profession is  " + response.toString());
	return response.getBody();
    }

    public UserAcademicsDTO addUserAcademics(UserAcademicsDTO userAcademicsDTO) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity<UserAcademicsDTO> requestEntity = new HttpEntity<UserAcademicsDTO>(userAcademicsDTO,
		headerBuilder());
	System.out.println("userAcademics DTO to add is " + userAcademicsDTO.toString());

	ResponseEntity<UserAcademicsDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/addUserAcademics", HttpMethod.POST, requestEntity,
		UserAcademicsDTO.class);
	LOGGER.info("response of create user Academics is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public UserAcademicsDTO getUserAcademics(String userId) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	ResponseEntity<UserAcademicsDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/getUserAcademics/" + userId, HttpMethod.GET, requestEntity,
		UserAcademicsDTO.class);

	LOGGER.info("response of get user Academics is  " + response.toString());
	return response.getBody();
    }

    public UserAcademicsDTO updateUserAcademics(UserAcademicsDTO userAcademicsDTO) {

	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	HttpEntity<UserAcademicsDTO> requestEntity = new HttpEntity<UserAcademicsDTO>(userAcademicsDTO,
		headerBuilder());
	System.out.println("userProfession DTO to update is " + userAcademicsDTO.toString());

	ResponseEntity<UserAcademicsDTO> response = restTemplate.exchange(
		hostServer + "/easybusiness/user/updateUserAcademics", HttpMethod.POST, requestEntity,
		UserAcademicsDTO.class);
	LOGGER.info("response of update user Academics is  " + response.toString());
	return response.getBody();
    }

    private HttpHeaders headerBuilder() {
	httpHeaders.setContentType(MediaType.APPLICATION_JSON);
	return httpHeaders;
    }
}
