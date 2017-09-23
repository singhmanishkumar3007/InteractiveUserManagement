package com.easybusiness.bean;

import java.io.Serializable;
import java.sql.Date;

public class UserRoleMapDTO implements Serializable {

    private static final long serialVersionUID = -5300599187745769139L;

    private Long id;

    private UserDTO user;

    private RoleDTO role;

    private Long isEnable;

    private Date fromDate;

    private Date toDate;

    private String modifiedBy;

    private Date modifiedOn;

    public UserRoleMapDTO() {
	super();
    }

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public RoleDTO getRole() {
	return role;
    }

    public void setRole(RoleDTO role) {
	this.role = role;
    }

    public UserDTO getUser() {
	return user;
    }

    public void setUser(UserDTO user) {
	this.user = user;
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
	return "UserGroupMap [id=" + id + ", Role=" + role + ", user=" + user + ", isEnable=" + isEnable + ", fromDate="
		+ fromDate + ", toDate=" + toDate + ", modifiedBy=" + modifiedBy + ", modifiedOn=" + modifiedOn + "]";
    }

}
