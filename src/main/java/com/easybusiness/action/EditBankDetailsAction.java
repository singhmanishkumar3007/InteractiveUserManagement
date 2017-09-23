package com.easybusiness.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.BranchDTO;
import com.easybusiness.bean.UserBankMapDTO;
import com.easybusiness.restclient.UserBankClient;
import com.easybusiness.restclient.UserClient;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class EditBankDetailsAction extends ActionSupport implements SessionAware {

    private static final long serialVersionUID = 1L;

    @Autowired
    UserClient userClient;

    @Autowired
    UserBankClient userBankClient;

    Map<String, Object> session;

    private String showResult;

    private List<BranchDTO> branchBankList;

    private Map<Long, BranchDTO> bankMap;

    private String editAccountNum;

    private String edit_Selection_branch_id;

    private String edit_Selection_bank_id;

    private String editIfsc;

    private String user_id;
    private String user_name;

    private UserBankMapDTO userBankMapDTO;

    private String errorMessage;

    public EditBankDetailsAction() {
	super();
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

    public Map<String, Object> getSession() {
	return session;
    }

    public List<BranchDTO> getBranchBankList() {
	return branchBankList;
    }

    public void setBranchBankList(List<BranchDTO> branchBankList) {
	this.branchBankList = branchBankList;
    }

    public Map<Long, BranchDTO> getBankMap() {
	return bankMap;
    }

    public void setBankMap(Map<Long, BranchDTO> bankMap) {
	this.bankMap = bankMap;
    }

    public String getEditAccountNum() {
	return editAccountNum;
    }

    public void setEditAccountNum(String editAccountNum) {
	this.editAccountNum = editAccountNum;
    }

    public String getEdit_Selection_branch_id() {
	return edit_Selection_branch_id;
    }

    public void setEdit_Selection_branch_id(String edit_Selection_branch_id) {
	this.edit_Selection_branch_id = edit_Selection_branch_id;
    }

    public String getEdit_Selection_bank_id() {
	return edit_Selection_bank_id;
    }

    public void setEdit_Selection_bank_id(String edit_Selection_bank_id) {
	this.edit_Selection_bank_id = edit_Selection_bank_id;
    }

    public String getEditIfsc() {
	return editIfsc;
    }

    public void setEditIfsc(String editIfsc) {
	this.editIfsc = editIfsc;
    }

    public UserBankMapDTO getUserBankMapDTO() {
	return userBankMapDTO;
    }

    public void setUserBankMapDTO(UserBankMapDTO userBankMapDTO) {
	this.userBankMapDTO = userBankMapDTO;
    }

    public String execute() {
	try {
	    if (null != this.edit_Selection_branch_id) {

		branchBankList = new ArrayList<BranchDTO>();
		branchBankList = userBankClient.getAllBankAndBranches();
		bankMap = new HashMap<Long, BranchDTO>();
		branchBankList.forEach(branchBankItem -> {
		    bankMap.put(branchBankItem.getBank().getId(), branchBankItem);
		});
		this.userBankMapDTO = new UserBankMapDTO();
		userBankMapDTO.setAccountNum(this.editAccountNum);
		userBankMapDTO.setBank(userBankClient.getBankById(this.edit_Selection_bank_id));
		userBankMapDTO.setBranch(userBankClient.getBranchById(this.edit_Selection_branch_id));
		userBankMapDTO.setIfscCode(this.editIfsc);
		userBankMapDTO.setUser(userClient.getUserLoginDetails(this.session.get("userName").toString(), null));
		userBankClient.mapUserbank(userBankMapDTO);
		this.showResult = "yes";
	    } else {
		try {
		    branchBankList = new ArrayList<BranchDTO>();
		    branchBankList = userBankClient.getAllBankAndBranches();
		    bankMap = new HashMap<Long, BranchDTO>();
		    branchBankList.forEach(branchBankItem -> {
			bankMap.put(branchBankItem.getBank().getId(), branchBankItem);
		    });
		    UserBankMapDTO[] userBankMapArray = userClient.getBankByUserId(
			    userClient.getUserLoginDetails(this.session.get("userName").toString(), null).getId());
		    this.userBankMapDTO = userBankMapArray[0];
		    System.out.println("user bank  details is " + this.userBankMapDTO.toString());
		} catch (Exception e) {
		    System.out.println("exception in getting bank details of user "
			    + this.session.get("userName").toString() + " " + e.getMessage());
		    this.userBankMapDTO = new UserBankMapDTO();
		}

		this.showResult = "no";
	    }
	    return SUCCESS;
	} catch (Exception e) {
	    this.errorMessage = "Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }

    public String getErrorMessage() {
	return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
	this.errorMessage = errorMessage;
    }

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }

}
