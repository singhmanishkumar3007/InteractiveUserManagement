package com.easybusiness.bean;

import java.sql.Date;

public class RoleDTO {

    private Long id;

    private String role;

    private Long isEnable;

    private Date fromDate;

    private Date toDate;

    private String modifiedBy;

    private Date modifiedOn;

    public RoleDTO() {
	super();
    }

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public String getRole() {
	return role;
    }

    public void setRole(String role) {
	this.role = role;
    }

    public Long getIsEnable() {
	return isEnable;
    }

    public void setIsEnable(Long isEnable) {
	this.isEnable = isEnable;
    }

    public Date getFromDate() {
	return fromDate;
    }

    public void setFromDate(Date fromDate) {
	this.fromDate = fromDate;
    }

    public Date getToDate() {
	return toDate;
    }

    public void setToDate(Date toDate) {
	this.toDate = toDate;
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
	return "Role [id=" + id + ", role=" + role + ", isEnable=" + isEnable + ", fromDate=" + fromDate + ", toDate="
		+ toDate + ", modifiedBy=" + modifiedBy + ", modifiedOn=" + modifiedOn + "]";
    }

}
