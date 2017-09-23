package com.easybusiness;

import javax.servlet.DispatcherType;

import org.apache.struts2.dispatcher.filter.StrutsPrepareAndExecuteFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.BufferingClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	return application.sources(Application.class);
    }

    public static void main(String[] args) {
	SpringApplication.run(Application.class, args);
    }

    @Bean
    public FilterRegistrationBean filterRegistrationBean() {
	FilterRegistrationBean registrationBean = new FilterRegistrationBean();
	StrutsPrepareAndExecuteFilter struts = new StrutsPrepareAndExecuteFilter();
	registrationBean.setFilter(struts);
	// registrationBean.setOrder(1);
	registrationBean.addUrlPatterns("*.action");
	registrationBean.setDispatcherTypes(DispatcherType.REQUEST, DispatcherType.FORWARD);
	return registrationBean;
    }

    @Bean(name = "restTemplate")

    public RestTemplate restTemplate(RestTemplateBuilder restTemplateBuilder) {

	RestTemplate template = restTemplateBuilder
		.requestFactory(new BufferingClientHttpRequestFactory(new SimpleClientHttpRequestFactory()))
		.messageConverters(new MappingJackson2HttpMessageConverter()).build();
	return template;

    }

    @Bean
    public HttpHeaders httpHeader() {

	HttpHeaders httpHeaders = new HttpHeaders();
	return httpHeaders;

    }

}
