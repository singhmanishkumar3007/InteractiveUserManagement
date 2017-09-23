package com.easybusiness.restclient;

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

import com.easybusiness.bean.DepartmentDTO;
import com.easybusiness.bean.DesignationDTO;
import com.easybusiness.bean.OrganizationDTO;
import com.easybusiness.utility.AppUtility;

@Component
public class ProfessionClient {

    @Autowired
    private RestTemplate restTemplate;
    
    @Autowired
    private AppUtility appUtility;

    @Autowired
    private HttpHeaders httpHeaders;
    
    @Value("${hostserver}")
    private String hostServer;

    private static final Logger LOGGER = LoggerFactory.getLogger(ProfessionClient.class);

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public OrganizationDTO[] getAllOrganizations() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<OrganizationDTO[]> response = restTemplate.exchange(
		hostServer+"/easybusiness/organization/getAllOrganizations", HttpMethod.GET, requestEntity,
		OrganizationDTO[].class);
	LOGGER.info("response of get all Organizations is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public DesignationDTO[] getAllDesignations() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<DesignationDTO[]> response = restTemplate.exchange(
		hostServer+"/easybusiness/designation/getAllDesignations", HttpMethod.GET, requestEntity,
		DesignationDTO[].class);
	LOGGER.info("response of get all Designations is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public DepartmentDTO[] getDepartmentByOrgId(String OrganizationId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<DepartmentDTO[]> response = restTemplate
		.exchange(hostServer+"/easybusiness/department/getAllDepartmentsByOrganization/"
			+ Long.parseLong(OrganizationId), HttpMethod.GET, requestEntity, DepartmentDTO[].class);
	LOGGER.info("response of get Departments By Organization Id is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public OrganizationDTO getOrganizationById(String orgId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<OrganizationDTO> response = restTemplate.exchange(
		hostServer+"/easybusiness/organization/getOrganizationById/" + Long.parseLong(orgId),
		HttpMethod.GET, requestEntity, OrganizationDTO.class);
	LOGGER.info("response of get  Organization By Id is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public DesignationDTO getDesignationById(String desigId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<DesignationDTO> response = restTemplate.exchange(
		hostServer+"/easybusiness/designation/getDesignationById/" + Long.parseLong(desigId),
		HttpMethod.GET, requestEntity, DesignationDTO.class);
	LOGGER.info("response of get Designation By Id is  " + response.toString());
	return response.getBody();
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public DepartmentDTO getDepartmentId(String departmentId) {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<DepartmentDTO> response = restTemplate.exchange(
		hostServer+"/easybusiness/department/getDepartmentById/" + Long.parseLong(departmentId),
		HttpMethod.GET, requestEntity, DepartmentDTO.class);
	LOGGER.info("response of get Department by Id is  " + response.toString());
	return response.getBody();
    }

    private HttpHeaders headerBuilder() {
	httpHeaders.setContentType(MediaType.APPLICATION_JSON);
	return httpHeaders;
    }
}
