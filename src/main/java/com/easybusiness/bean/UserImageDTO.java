package com.easybusiness.bean;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ByteArraySerializer;

public class UserImageDTO implements Serializable {

    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private Long id;

    @JsonProperty
    @JsonSerialize(using = ByteArraySerializer.class)
    
    private byte[] userImg;

    private UserDTO user;

    public UserImageDTO() {
	super();
    }

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public byte[] getUserImg() {
	return userImg;
    }

    public void setUserImg(byte[] userImg) {
	this.userImg = userImg;
    }

    public UserDTO getUser() {
	return user;
    }

    public void setUser(UserDTO user) {
	this.user = user;
    }

    @Override
    public String toString() {
	return "UserImage [id=" + id + ", userImg=" + userImg + ", user=" + user + "]";
    }

}
