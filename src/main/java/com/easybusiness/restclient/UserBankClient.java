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

import com.easybusiness.bean.BankDTO;
import com.easybusiness.bean.BranchDTO;
import com.easybusiness.bean.UserBankMapDTO;
import com.easybusiness.utility.AppUtility;

@Component
public class UserBankClient {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private HttpHeaders httpHeaders;
    
    @Autowired
    private AppUtility appUtility;

    @Value("${hostserver}")
    private String hostServer;
    
    private static final Logger LOGGER = LoggerFactory.getLogger(UserBankClient.class);

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public List<BranchDTO> getAllBankAndBranches() {
	HttpEntity requestEntity = new HttpEntity(headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	BranchDTO[] branchListResponse = restTemplate.getForObject(
		hostServer+"/easybusiness/userbank/getAllBanksAndBranches", BranchDTO[].class, requestEntity);
	LOGGER.info("response of get All Bank and branches is  " + branchListResponse.toString());
	return Arrays.asList(branchListResponse);
    }
    
    public ResponseEntity<UserBankMapDTO> mapUserbank(UserBankMapDTO userBankMapDTO) {
	HttpEntity<UserBankMapDTO> requestEntity = new HttpEntity<UserBankMapDTO>(userBankMapDTO,headerBuilder());
	restTemplate.setRequestFactory(appUtility.getRequestFactory());
	ResponseEntity<UserBankMapDTO> userBankMappingResponse=restTemplate.exchange(hostServer+"/easybusiness/userbank/mapUserBank", HttpMethod.POST, requestEntity, UserBankMapDTO.class);
	LOGGER.info("response of mapping bank to user  " + userBankMappingResponse.toString());
	return userBankMappingResponse;
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public BankDTO getBankById(String bankId) {
   	HttpEntity requestEntity = new HttpEntity(headerBuilder());
   	restTemplate.setRequestFactory(appUtility.getRequestFactory());
   	BankDTO bankDetails = restTemplate.getForObject(
   		hostServer+"/easybusiness/userbank/getbankById/"+Long.parseLong(bankId), BankDTO.class, requestEntity);
   	LOGGER.info("response of getting bank by Id  " + bankDetails.toString());
   	return bankDetails;
       }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public BranchDTO getBranchById(String branchId) {
   	HttpEntity requestEntity = new HttpEntity(headerBuilder());
   	restTemplate.setRequestFactory(appUtility.getRequestFactory());
   	BranchDTO branchDetails = restTemplate.getForObject(
   		hostServer+"/easybusiness/userbank/getbranchById/"+Long.parseLong(branchId), BranchDTO.class, requestEntity);
   	LOGGER.info("response of getting branch by Id  " + branchDetails.toString());
   	return branchDetails;
       }
    
    


    private HttpHeaders headerBuilder() {
	httpHeaders.setContentType(MediaType.APPLICATION_JSON);
	return httpHeaders;
    }
}
