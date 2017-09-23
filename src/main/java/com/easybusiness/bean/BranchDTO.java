package com.easybusiness.bean;

import java.sql.Date;


public class BranchDTO {

    private long id;

    private BankDTO bank;

    private String branchName;

    private String address;

    private String modifiedBy;

    private Date modifiedOn;

    public BranchDTO() {
	super();
    }

    public long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

   

    public BankDTO getBank() {
        return bank;
    }

    public void setBank(BankDTO bank) {
        this.bank = bank;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getAddress() {
	return address;
    }

    public void setAddress(String address) {
	this.address = address;
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
	return "Branch [id=" + id + ", bank=" + bank + ", branchName=" + branchName + ", address=" + address
		+ ", modifiedBy=" + modifiedBy + ", modifiedOn=" + modifiedOn + "]";
    }


}
