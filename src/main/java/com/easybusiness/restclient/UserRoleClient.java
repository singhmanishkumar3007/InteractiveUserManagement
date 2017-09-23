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

import com.easybusiness.bean.RoleDTO;
import com.easybusiness.bean.UserRoleMapDTO;
import com.easybusiness.utility.AppUtility;

@Component
public class UserRoleClient {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private HttpHeaders httpHeaders;
    
    @Autowired
    private AppUtility appUtility;

    @Value("${hostserver}")
    private String hostServer;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserRoleClient.class);

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<RoleDTO> getRoleDetails() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	RoleDTO[] response = restTemplate.getForObject(hostServer+"/easybusiness/role/getAllRoles",
		RoleDTO[].class, requestEntity);
	LOGGER.info("response of get Roles is  " + response.toString());
	return Arrays.asList(response);
    }

    public UserRoleMapDTO addUserRole(UserRoleMapDTO userRoleMapDTO) {
	HttpEntity<UserRoleMapDTO> requestEntity = new HttpEntity<UserRoleMapDTO>(userRoleMapDTO, headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserRoleMapDTO> response = restTemplate.exchange(
		hostServer+"/easybusiness/userrole/mapUserRole", HttpMethod.POST, requestEntity,
		UserRoleMapDTO.class);
	LOGGER.info("response of create user role mapping  is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public RoleDTO getRoleById(String roleId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	RoleDTO response = restTemplate.getForObject(
		hostServer+"/easybusiness/role/getRoleById/" + Long.parseLong(roleId), RoleDTO.class,
		requestEntity);
	LOGGER.info("response of get Role By Id is  " + response.toString());
	return response;
    }

    private HttpHeaders headerBuilder() {
	httpHeaders.setContentType(MediaType.APPLICATION_JSON);
	return httpHeaders;
    }
}
