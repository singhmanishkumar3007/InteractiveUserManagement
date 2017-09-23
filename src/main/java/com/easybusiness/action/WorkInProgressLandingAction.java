package com.easybusiness.action;

import org.springframework.stereotype.Component;

import com.opensymphony.xwork2.ActionSupport;

@Component
public class WorkInProgressLandingAction extends ActionSupport {

    private static final long serialVersionUID = 1L;

    public WorkInProgressLandingAction() {
	super();
    }

    public String execute() {
	return SUCCESS;
    }

}
