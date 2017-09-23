package com.easybusiness.utility;

import javax.servlet.http.Cookie;

import org.springframework.stereotype.Component;

@Component
public class AppUtility {
    
    public SSLClientHttpRequestFactory getRequestFactory()
    {
	NullHostnameVerifier verifier=new NullHostnameVerifier();
	SSLClientHttpRequestFactory requestFactory=new SSLClientHttpRequestFactory(verifier,Cookie.class.getName());
	return requestFactory;
	
    }

}
