package com.easybusiness.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.BranchDTO;
import com.easybusiness.bean.UserBankMapDTO;
import com.easybusiness.restclient.UserBankClient;
import com.easybusiness.restclient.UserClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class MapUserBankLandingAction extends ActionSupport implements SessionAware {

    private static final long serialVersionUID = 1L;
    
    private static final Logger LOGGER=LoggerFactory.getLogger(MapUserBankLandingAction.class);

    @Autowired
    UserClient userClient;

    @Autowired
    UserBankClient userBankClient;

    Map<String, Object> session;

    private String showResult;

    private List<BranchDTO> branchBankList;

    private Map<Long, BranchDTO> bankMap;
    
    private String accountNum;
    
    private String user_id_search;
    
    private String user_name_search;
    
    private String selection_branch_id;
    
    private String selection_bank_id;
    
    private String ifsc;

    private String errorMessage;

    public MapUserBankLandingAction() {
	super();
    }

    
    public String getAccountNum() {
        return accountNum;
    }


    public void setAccountNum(String accountNum) {
        this.accountNum = accountNum;
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


    public String getSelection_branch_id() {
        return selection_branch_id;
    }


    public void setSelection_branch_id(String selection_branch_id) {
        this.selection_branch_id = selection_branch_id;
    }


    public String getSelection_bank_id() {
        return selection_bank_id;
    }


    public void setSelection_bank_id(String selection_bank_id) {
        this.selection_bank_id = selection_bank_id;
    }


    public String getIfsc() {
        return ifsc;
    }


    public void setIfsc(String ifsc) {
        this.ifsc = ifsc;
    }


    public String getShowResult() {
	return showResult;
    }

    public void setShowResult(String showResult) {
	this.showResult = showResult;
    }


    public Map<Long, BranchDTO> getBankMap() {
	return bankMap;
    }

    public void setBankMap(Map<Long, BranchDTO> bankMap) {
	this.bankMap = bankMap;
    }

    public List<BranchDTO> getBranchBankList() {
	return branchBankList;
    }

    public void setBranchBankList(List<BranchDTO> branchBankList) {
	this.branchBankList = branchBankList;
    }


    public String getErrorMessage() {
        return errorMessage;
    }


    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }


    public String execute() {
	try{
	if (null != this.accountNum) {
	    LOGGER.info("in set user to bank block");
	    branchBankList = new ArrayList<BranchDTO>();
	    branchBankList = userBankClient.getAllBankAndBranches();
	    bankMap = new HashMap<Long, BranchDTO>();
	    branchBankList.forEach(branchBankItem -> {
		bankMap.put(branchBankItem.getBank().getId(), branchBankItem);
	    });
	    this.showResult = "yes";
	    UserBankMapDTO userBankMapDTO=new UserBankMapDTO();
	    userBankMapDTO.setAccountNum(this.accountNum);
	    userBankMapDTO.setBank(userBankClient.getBankById(this.selection_bank_id));
	    userBankMapDTO.setBranch(userBankClient.getBranchById(this.selection_branch_id));
	    userBankMapDTO.setIfscCode(this.ifsc);
	    userBankMapDTO.setAccountType("Salary");
	    if(null!=this.user_id_search)
	    {
	    userBankMapDTO.setUser(userClient.getUserDetailsById(this.user_id_search));
	    }
	    else if(null!=this.user_name_search)
	    {
		userBankMapDTO.setUser(userClient.getUserDetailsByName(this.user_name_search));
	    }
	    userBankClient.mapUserbank(userBankMapDTO);
	    LOGGER.info("mapping of user bank done");
	    
	} else {
	    branchBankList = new ArrayList<BranchDTO>();
	    branchBankList = userBankClient.getAllBankAndBranches();
	    bankMap = new HashMap<Long, BranchDTO>();
	    branchBankList.forEach(branchBankItem -> {
		bankMap.put(branchBankItem.getBank().getId(), branchBankItem);
	    });
	    this.showResult = "no";
	}
	return SUCCESS;
	
    }catch(Exception e)
	{
	this.errorMessage="Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }

}
