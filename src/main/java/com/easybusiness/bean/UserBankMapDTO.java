package com.easybusiness.bean;

import java.io.Serializable;
import java.sql.Date;

public class UserBankMapDTO implements Serializable {

    /**
     * 
     */
    private static final long serialVersionUID = -5300599187745769139L;

    private Long id;

    private UserDTO user;

    private BankDTO bank;

    private BranchDTO branch;

    private String accountNum;

    private String ifscCode;

    private String modifiedBy;

    private Date modifiedOn;

    public UserBankMapDTO() {
	super();
    }

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public UserDTO getUser() {
	return user;
    }

    public void setUser(UserDTO user) {
	this.user = user;
    }

    public BankDTO getBank() {
	return bank;
    }

    public void setBank(BankDTO bank) {
	this.bank = bank;
    }

    public BranchDTO getBranch() {
	return branch;
    }

    public void setBranch(BranchDTO branch) {
	this.branch = branch;
    }

    public String getAccountNum() {
	return accountNum;
    }

    public void setAccountNum(String accountNum) {
	this.accountNum = accountNum;
    }

    public String getIfscCode() {
	return ifscCode;
    }

    public void setIfscCode(String ifscCode) {
	this.ifscCode = ifscCode;
    }

    public String getModifiedBy() {
	return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
	this.modifiedBy = modifiedBy;
    }

    public Date getModifiedOn() {
	return modifiedOn;
    }

    public void setModifiedOn(Date modifiedOn) {
	this.modifiedOn = modifiedOn;
    }

    @Override
    public String toString() {
	return "UserBankMap [id=" + id + ", user=" + user + ", bank=" + bank + ", branch=" + branch + ", accountNum="
		+ accountNum + ", ifscCode=" + ifscCode + ", modifiedBy=" + modifiedBy + ", modifiedOn=" + modifiedOn
		+ "]";
    }

}
