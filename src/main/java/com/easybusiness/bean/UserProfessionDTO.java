package com.easybusiness.bean;

import java.io.Serializable;
import java.sql.Date;

public class UserProfessionDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private UserDTO user;

    private String totalExp;

    private String relevantExp;

    private String primarySkill;

    private String primarySkillDuration;

    private String prevOrganization;

    private Date prevFromDate;

    private Date prevToDate;

    private String prevOnsiteDuration;

    private String prevTechnology;

    private String prevAchievement;

    private String prevDesignation;

    public UserProfessionDTO() {
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

    public String getTotalExp() {
	return totalExp;
    }

    public void setTotalExp(String totalExp) {
	this.totalExp = totalExp;
    }

    public String getRelevantExp() {
	return relevantExp;
    }

    public void setRelevantExp(String relevantExp) {
	this.relevantExp = relevantExp;
    }

    public String getPrimarySkill() {
	return primarySkill;
    }

    public void setPrimarySkill(String primarySkill) {
	this.primarySkill = primarySkill;
    }

    public String getPrimarySkillDuration() {
	return primarySkillDuration;
    }

    public void setPrimarySkillDuration(String primarySkillDuration) {
	this.primarySkillDuration = primarySkillDuration;
    }

    public String getPrevOrganization() {
	return prevOrganization;
    }

    public void setPrevOrganization(String prevOrganization) {
	this.prevOrganization = prevOrganization;
    }

    public Date getPrevFromDate() {
	return prevFromDate;
    }

    public void setPrevFromDate(Date prevFromDate) {
	this.prevFromDate = prevFromDate;
    }

    public Date getPrevToDate() {
	return prevToDate;
    }

    public void setPrevToDate(Date prevToDate) {
	this.prevToDate = prevToDate;
    }

    public String getPrevOnsiteDuration() {
	return prevOnsiteDuration;
    }

    public void setPrevOnsiteDuration(String prevOnsiteDuration) {
	this.prevOnsiteDuration = prevOnsiteDuration;
    }

    public String getPrevTechnology() {
	return prevTechnology;
    }

    public void setPrevTechnology(String prevTechnology) {
	this.prevTechnology = prevTechnology;
    }

    public String getPrevAchievement() {
	return prevAchievement;
    }

    public void setPrevAchievement(String prevAchievement) {
	this.prevAchievement = prevAchievement;
    }

    public String getPrevDesignation() {
	return prevDesignation;
    }

    public void setPrevDesignation(String prevDesignation) {
	this.prevDesignation = prevDesignation;
    }

    @Override
    public String toString() {
	return "UserProfession [id=" + id + ", user=" + user + ", totalExp=" + totalExp + ", relevantExp=" + relevantExp
		+ ", primarySkill=" + primarySkill + ", primarySkillDuration=" + primarySkillDuration
		+ ", prevOrganization=" + prevOrganization + ", prevFromDate=" + prevFromDate + ", prevToDate="
		+ prevToDate + ", prevOnsiteDuration=" + prevOnsiteDuration + ", prevTechnology=" + prevTechnology
		+ ", prevAchievement=" + prevAchievement + ", prevDesignation=" + prevDesignation + "]";
    }

}
