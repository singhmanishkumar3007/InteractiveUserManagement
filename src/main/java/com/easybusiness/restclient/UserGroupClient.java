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

import com.easybusiness.bean.UserGroupDTO;
import com.easybusiness.bean.UserGroupMapDTO;
import com.easybusiness.utility.AppUtility;

@Component
public class UserGroupClient {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private HttpHeaders httpHeaders;
    
    @Autowired
    private AppUtility appUtility;
    
    @Value("${hostserver}")
    private String hostServer;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserGroupClient.class);

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<UserGroupDTO> getAllUserGroups() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	UserGroupDTO[] userGroupResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/usergroup/getAllUserGroup", UserGroupDTO[].class, requestEntity);
	LOGGER.info("response of get user is  " + userGroupResponse.toString());
	return Arrays.asList(userGroupResponse);
    }

    public UserGroupMapDTO mapUserToUserGroup(UserGroupMapDTO userGroupMapDTO) {
	HttpEntity<UserGroupMapDTO> requestEntity = new HttpEntity<UserGroupMapDTO>(userGroupMapDTO, headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserGroupMapDTO> response = restTemplate.exchange(
		hostServer+"/easybusiness/usergroup/mapUserGroup", HttpMethod.POST, requestEntity,
		UserGroupMapDTO.class);
	LOGGER.info("response of map user  to group is  " + response.toString());
	return response.getBody();
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public UserGroupDTO getUserGroupByGroupName(String userGroupName) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	UserGroupDTO userGroupResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/usergroup/getByUsergroupName/"+userGroupName, UserGroupDTO.class, requestEntity);
	LOGGER.info("response of get userGroupByName is  " + userGroupResponse.toString());
	return userGroupResponse;
    }


    private HttpHeaders headerBuilder() {
	httpHeaders.setContentType(MediaType.APPLICATION_JSON);
	return httpHeaders;
    }
}
