package com.easybusiness.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.Date;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.sql.rowset.serial.SerialException;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.easybusiness.bean.DepartmentDTO;
import com.easybusiness.bean.DesignationDTO;
import com.easybusiness.bean.LocationMasterDTO;
import com.easybusiness.bean.OrganizationDTO;
import com.easybusiness.bean.RoleDTO;
import com.easybusiness.bean.UserDTO;
import com.easybusiness.bean.UserImageDTO;
import com.easybusiness.bean.UserRoleMapDTO;
import com.easybusiness.restclient.ProfessionClient;
import com.easybusiness.restclient.UserClient;
import com.easybusiness.restclient.UserRoleClient;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class CreateUserLandingAction extends ActionSupport implements SessionAware, ServletRequestAware {

    private static final long serialVersionUID = 1L;

    @Autowired
    UserClient userClient;

    @Autowired
    UserRoleClient userRoleClient;

    @Autowired
    ProfessionClient professionClient;

    Map<String, Object> session;
    private String newUserName;

    private String firstName;

    private Date fromDate;

    private String lastName;

    private String newPassword;

    private String gender;

    private String dateOfBirth;

    private String email;

    private String alternateEmail;

    private Long mobile;

    private Date endDate;

    private String organization;

    private String department;

    private String designation;

    private String typeOfEmployment;

    private File userImg;

    private String showResult;

    private UserDTO createUserDTO;

    private UserImageDTO createUserImageDTO;

    private String gender1;
    private String gender2;

    private File fileUpload;
    private String fileUploadContentType;
    private String fileUploadFileName;

    private String filepath;

    private HttpServletRequest servletRequest;

    private byte[] bFile;

    private List<RoleDTO> roleList;
    private String selectedRole;

    private List<OrganizationDTO> organizationList;
    private List<DesignationDTO> designationList;

    private String selectedOrganization;
    private String selectedDesignation;
    private String selectedDepartment;

    private List<DepartmentDTO> departmentList;

    private String errorMessage;

    public String getErrorMessage() {
	return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
	this.errorMessage = errorMessage;
    }

    public byte[] getbFile() {
	return bFile;
    }

    public void setbFile(byte[] bFile) {
	this.bFile = bFile;
    }

    public String getSelectedRole() {
	return selectedRole;
    }

    public void setSelectedRole(String selectedRole) {
	this.selectedRole = selectedRole;
    }

    public UserImageDTO getCreateUserImageDTO() {
	return createUserImageDTO;
    }

    public void setCreateUserImageDTO(UserImageDTO createUserImageDTO) {
	this.createUserImageDTO = createUserImageDTO;
    }

    public CreateUserLandingAction() {
	super();
    }

    public String getFilepath() {
	return filepath;
    }

    public void setFilepath(String filepath) {
	this.filepath = filepath;
    }

    public String getFileUploadContentType() {
	return fileUploadContentType;
    }

    public void setFileUploadContentType(String fileUploadContentType) {
	this.fileUploadContentType = fileUploadContentType;
    }

    public String getFileUploadFileName() {
	return fileUploadFileName;
    }

    public void setFileUploadFileName(String fileUploadFileName) {
	this.fileUploadFileName = fileUploadFileName;
    }

    public File getFileUpload() {
	return fileUpload;
    }

    public void setFileUpload(File fileUpload) {
	this.fileUpload = fileUpload;
    }

    public String getGender1() {
	return gender1;
    }

    public void setGender1(String gender1) {
	this.gender1 = gender1;
    }

    public String getGender2() {
	return gender2;
    }

    public void setGender2(String gender2) {
	this.gender2 = gender2;
    }

    public String getFirstName() {
	return firstName;
    }

    public void setFirstName(String firstName) {
	this.firstName = firstName;
    }

    public Date getFromDate() {
	return fromDate;
    }

    public void setFromDate(Date fromDate) {
	this.fromDate = fromDate;
    }

    public String getLastName() {
	return lastName;
    }

    public void setLastName(String lastName) {
	this.lastName = lastName;
    }

    public String getNewUserName() {
	return newUserName;
    }

    public void setNewUserName(String newUserName) {
	this.newUserName = newUserName;
    }

    public String getNewPassword() {
	return newPassword;
    }

    public void setNewPassword(String newPassword) {
	this.newPassword = newPassword;
    }

    public String getGender() {
	return gender;
    }

    public void setGender(String gender) {
	this.gender = gender;
    }

    public String getDateOfBirth() {
	return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
    }

    public String getEmail() {
	return email;
    }

    public void setEmail(String email) {
	this.email = email;
    }

    public String getAlternateEmail() {
	return alternateEmail;
    }

    public void setAlternateEmail(String alternateEmail) {
	this.alternateEmail = alternateEmail;
    }

    public Long getMobile() {
	return mobile;
    }

    public void setMobile(Long mobile) {
	this.mobile = mobile;
    }

    public Date getEndDate() {
	return endDate;
    }

    public void setEndDate(Date endDate) {
	this.endDate = endDate;
    }

    public String getOrganization() {
	return organization;
    }

    public void setOrganization(String organization) {
	this.organization = organization;
    }

    public String getDepartment() {
	return department;
    }

    public void setDepartment(String department) {
	this.department = department;
    }

    public String getDesignation() {
	return designation;
    }

    public void setDesignation(String designation) {
	this.designation = designation;
    }

    public String getTypeOfEmployment() {
	return typeOfEmployment;
    }

    public void setTypeOfEmployment(String typeOfEmployment) {
	this.typeOfEmployment = typeOfEmployment;
    }

    public File getUserImg() {
	return userImg;
    }

    public void setUserImg(File userImg) {
	this.userImg = userImg;
    }

    public String getShowResult() {
	return showResult;
    }

    public void setShowResult(String showResult) {
	this.showResult = showResult;
    }

    public UserDTO getCreateUserDTO() {
	return createUserDTO;
    }

    public void setCreateUserDTO(UserDTO createUserDTO) {
	this.createUserDTO = createUserDTO;
    }

    public List<RoleDTO> getRoleList() {
	return roleList;
    }

    public void setRoleList(List<RoleDTO> roleList) {
	this.roleList = roleList;
    }

    public List<OrganizationDTO> getOrganizationList() {
	return organizationList;
    }

    public void setOrganizationList(List<OrganizationDTO> organizationList) {
	this.organizationList = organizationList;
    }

    public List<DesignationDTO> getDesignationList() {
	return designationList;
    }

    public void setDesignationList(List<DesignationDTO> designationList) {
	this.designationList = designationList;
    }

    public String getSelectedOrganization() {
	return selectedOrganization;
    }

    public void setSelectedOrganization(String selectedOrganization) {
	this.selectedOrganization = selectedOrganization;
    }

    public String getSelectedDesignation() {
	return selectedDesignation;
    }

    public void setSelectedDesignation(String selectedDesignation) {
	this.selectedDesignation = selectedDesignation;
    }

    public String getSelectedDepartment() {
	return selectedDepartment;
    }

    public void setSelectedDepartment(String selectedDepartment) {
	this.selectedDepartment = selectedDepartment;
    }

    public List<DepartmentDTO> getDepartmentList() {
	return departmentList;
    }

    public void setDepartmentList(List<DepartmentDTO> departmentList) {
	this.departmentList = departmentList;
    }

    public String execute() throws SerialException, SQLException, IOException {

	try {
	    if (null != this.newUserName) {
		this.createUserDTO = new UserDTO();
		createUserDTO.setAlternateEmail(this.alternateEmail);
		try {
		    createUserDTO.setDateOfBirth(
			    new java.sql.Date((new SimpleDateFormat("dd-MMM-yyyy").parse(this.dateOfBirth)).getTime()));
		} catch (ParseException e) {
		    e.printStackTrace();
		}
		createUserDTO.setDepartment(professionClient.getDepartmentId(selectedDepartment));
		createUserDTO.setDesignation(professionClient.getDesignationById(selectedDesignation));
		createUserDTO.setOrganization(professionClient.getOrganizationById(selectedOrganization));
		createUserDTO.setEmail(this.email);
		createUserDTO.setFirstName(this.firstName);
		createUserDTO.setLastName(this.lastName);
		createUserDTO.setGender(this.gender);
		createUserDTO.setIsEnabled(1L);
		createUserDTO.setMobile(this.mobile);
		createUserDTO.setPassword(this.newPassword);
		createUserDTO.setTypeOfEmployment(this.typeOfEmployment);
		createUserDTO.setUserName(this.newUserName);
		LocationMasterDTO location=new LocationMasterDTO();
		/*location.setId(1);
		location.setCreatedBy(createdBy);
		location.setCreatedOn(createdOn);
		location.setLocationArea(locationArea);
		location.setLocationCity(locationCity);
		location.setLocationCountry(locationCountry);
		location.setLocationPin(locationPin);
		location.setLocationState(locationState);
		location.setModifiedBy(modifiedBy);
		location.setModifiedOn(modifiedOn);*/
		createUserDTO.setLocation(location);
		createUserDTO.setUnitId(1L);
		ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
		try {
		    String json = ow.writeValueAsString(createUserDTO);
		    try {
			ow.writeValue(new File("c:\\newPayLoadForUserPOST.json"), createUserDTO);
		    } catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		    }
		} catch (JsonProcessingException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		}
		userClient.addUser(createUserDTO);
		createUserDTO = userClient.getUserLoginDetails(this.newUserName, null);
		this.createUserImageDTO = new UserImageDTO();
		createUserImageDTO.setUser(createUserDTO);
		try {
		    URL path = new URL(filepath);
		    File fileToCreate = new File(path.toURI());
		    System.out.println("file uploaded is " + fileToCreate);
		    this.bFile = getBytesFromFile(fileToCreate);
		    createUserImageDTO.setUserImg(this.bFile);
		    userClient.addUserImage(createUserImageDTO);
		} catch (URISyntaxException e) {

		    e.printStackTrace();
		}

		catch (Exception e) {
		    e.printStackTrace();
		}

		roleList = userRoleClient.getRoleDetails();
		UserRoleMapDTO userRoleMapDTO = new UserRoleMapDTO();
		userRoleMapDTO.setUser(userClient.getUserDetailsByName(this.newUserName));
		userRoleMapDTO.setIsEnable(1L);
		try{
		userRoleMapDTO.setRole(userRoleClient.getRoleById(this.selectedRole));
		userRoleClient.addUserRole(userRoleMapDTO);
		}
		catch(Exception e)
		{
		    e.printStackTrace();
		}
		organizationList = Arrays.asList(professionClient.getAllOrganizations());
		designationList = Arrays.asList(professionClient.getAllDesignations());
		this.showResult = "yes";

	    } else {
		roleList = userRoleClient.getRoleDetails();
		organizationList = Arrays.asList(professionClient.getAllOrganizations());
		designationList = Arrays.asList(professionClient.getAllDesignations());
		this.showResult = "no";
	    }
	    return SUCCESS;
	} catch (Exception e) {
	    this.errorMessage = "Technical Error in Application!! Please Contact system admin for more details";
	    return ERROR;
	}
    }

    @Override
    public void setSession(Map<String, Object> session) {
	this.session = session;

    }

    @Override
    public void setServletRequest(HttpServletRequest request) {
	this.servletRequest = request;

    }

    @SuppressWarnings("resource")
    public static byte[] getBytesFromFile(File file) throws IOException {
	InputStream is = new FileInputStream(file);

	long length = file.length();

	if (length > Integer.MAX_VALUE) {
	    // File is too large
	}

	// Create the byte array to hold the data
	byte[] bytes = new byte[(int) length];

	// Read in the bytes
	int offset = 0;
	int numRead = 0;
	while (offset < bytes.length && (numRead = is.read(bytes, offset, bytes.length - offset)) >= 0) {
	    offset += numRead;
	}

	// Ensure all the bytes have been read in
	if (offset < bytes.length) {
	    throw new IOException("Could not completely read file " + file.getName());
	}

	// Close the input stream and return bytes
	is.close();
	return bytes;

    }
}
