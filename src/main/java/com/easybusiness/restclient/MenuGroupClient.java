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

import com.easybusiness.bean.MenuDTO;
import com.easybusiness.bean.SubMenuDTO;
import com.easybusiness.bean.UserGroupMenuDTO;
import com.easybusiness.bean.UserGroupMenuSubMenuDTO;
import com.easybusiness.utility.AppUtility;

@Component
public class MenuGroupClient {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private HttpHeaders httpHeaders;
    
    @Autowired
    private AppUtility appUtility;
    
    @Value("${hostserver}")
    private String hostServer;
    

    private static final Logger LOGGER = LoggerFactory.getLogger(MenuGroupClient.class);

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<MenuDTO> getAllMenus() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	MenuDTO[] menuResponse = restTemplate.getForObject(hostServer+"/easybusiness/menu/getAllMenu",
		MenuDTO[].class, requestEntity);
	LOGGER.info("response of getting all menus is  " + menuResponse.toString());
	return Arrays.asList(menuResponse);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<SubMenuDTO> getAllSubMenus() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	SubMenuDTO[] subMenuResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/menu/getAllSubMenu", SubMenuDTO[].class, requestEntity);
	LOGGER.info("response of getting all menus is  " + subMenuResponse.toString());
	return Arrays.asList(subMenuResponse);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public SubMenuDTO getSubMenuById(Long subMenuId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	SubMenuDTO subMenuResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/menu/getSubMenuBySubMenuId/" + subMenuId, SubMenuDTO.class,
		requestEntity);
	LOGGER.info("response of getting all menus is  " + subMenuResponse.toString());
	return subMenuResponse;
    }

    public UserGroupMenuSubMenuDTO mapGroupMenuSubMenu(UserGroupMenuSubMenuDTO userGroupMenuSubMenuDTO) {
	HttpEntity<UserGroupMenuSubMenuDTO> requestEntity = new HttpEntity<UserGroupMenuSubMenuDTO>(
		userGroupMenuSubMenuDTO, headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserGroupMenuSubMenuDTO> userGroupMenuMapingResponse = restTemplate.exchange(
		hostServer+"/easybusiness/usergroupmenusubmenu/mapUserGroupMenuSubMenu", HttpMethod.POST,
		requestEntity, UserGroupMenuSubMenuDTO.class);
	LOGGER.info("response of mapping group to menu-submenu is  " + userGroupMenuMapingResponse.toString());
	return userGroupMenuMapingResponse.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public MenuDTO getMenuById(Long menuId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	MenuDTO menuResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/menu/getMenuById/" + menuId, MenuDTO.class, requestEntity);
	LOGGER.info("response of getting menu by id is  " + menuResponse.toString());
	return menuResponse;
    }
    
    public UserGroupMenuDTO mapGroupMenu(UserGroupMenuDTO userGroupMenuDTO) {
	HttpEntity<UserGroupMenuDTO> requestEntity = new HttpEntity<UserGroupMenuDTO>(
		userGroupMenuDTO, headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserGroupMenuDTO> userGroupMenuMapingResponse = restTemplate.exchange(
		hostServer+"/easybusiness/usergroupmenu/mapUserGroupMenu", HttpMethod.POST,
		requestEntity, UserGroupMenuDTO.class);
	LOGGER.info("response of mapping group to menu-submenu is  " + userGroupMenuMapingResponse.toString());
	return userGroupMenuMapingResponse.getBody();
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<UserGroupMenuSubMenuDTO> getUserGroupMenuSubByGroupName(String groupName) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	UserGroupMenuSubMenuDTO[] groupMenuResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/usergroupmenusubmenu/getUserGroupMenuByGroupMenu/" + groupName, UserGroupMenuSubMenuDTO[].class, requestEntity);
	LOGGER.info("response of mapping group to menu-submenu is  " + groupMenuResponse.toString());
	return Arrays.asList(groupMenuResponse);
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void deleteUserGroupMenuSubMenu(UserGroupMenuSubMenuDTO userGroupMenuSubMenuDTO)
    {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	restTemplate.delete(hostServer+"/easybusiness/usergroupmenusubmenu/deleteUserGroupMenu/"+userGroupMenuSubMenuDTO.getId(), requestEntity);
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<UserGroupMenuDTO> getUserGroupMenuByGroupName(String groupName) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	UserGroupMenuDTO[] groupMenuResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/usergroupmenu/getUserGroupMenuByGroupName/" + groupName, UserGroupMenuDTO[].class, requestEntity);
	LOGGER.info("response of getting group to menu is  " + groupMenuResponse.toString());
	return Arrays.asList(groupMenuResponse);
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public void deleteUserGroupMenu(UserGroupMenuDTO userGroupMenuDTO)
    {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	restTemplate.delete(hostServer+"/easybusiness/usergroupmenu/deleteUserGroupMenuItem/"+userGroupMenuDTO.getId(), requestEntity);
    }

    private HttpHeaders headerBuilder() {
	httpHeaders.setContentType(MediaType.APPLICATION_JSON);
	return httpHeaders;
    }
}
