package com.easybusiness.bean;

import java.io.Serializable;

public class UserAcademicsDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private UserDTO user;

    private String highestDegree;

    private String passOutYear;

    private String college;

    private String university;

    private String marks;

    private String certificateName;

    private String certifiedBy;

    private String certificationYear;

    public UserAcademicsDTO() {
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

    public String getHighestDegree() {
	return highestDegree;
    }

    public void setHighestDegree(String highestDegree) {
	this.highestDegree = highestDegree;
    }

    public String getPassOutYear() {
	return passOutYear;
    }

    public void setPassOutYear(String passOutYear) {
	this.passOutYear = passOutYear;
    }

    public String getCollege() {
	return college;
    }

    public void setCollege(String college) {
	this.college = college;
    }

    public String getUniversity() {
	return university;
    }

    public void setUniversity(String university) {
	this.university = university;
    }

    public String getMarks() {
	return marks;
    }

    public void setMarks(String marks) {
	this.marks = marks;
    }

    public String getCertificateName() {
        return certificateName;
    }

    public void setCertificateName(String certificateName) {
        this.certificateName = certificateName;
    }

    public String getCertifiedBy() {
        return certifiedBy;
    }

    public void setCertifiedBy(String certifiedBy) {
        this.certifiedBy = certifiedBy;
    }

    public String getCertificationYear() {
        return certificationYear;
    }

    public void setCertificationYear(String certificationYear) {
        this.certificationYear = certificationYear;
    }

    @Override
    public String toString() {
	return "UserAcademicsDTO [id=" + id + ", user=" + user + ", highestDegree=" + highestDegree + ", passOutYear="
		+ passOutYear + ", college=" + college + ", university=" + university + ", marks=" + marks
		+ ", certificateName=" + certificateName + ", certifiedBy=" + certifiedBy + ", certificationYear="
		+ certificationYear + "]";
    }


}
