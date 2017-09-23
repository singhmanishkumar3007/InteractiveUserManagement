<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="com.easybusiness.constant.InteractiveUserConstant"%>

<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Create New User</title>
<link
	href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i"
	rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link href="css/sb-admin.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/sb-admin.css">
<link rel="stylesheet" type="text/css" href="css/responsive.css">
<link rel="stylesheet" type="text/css"
	href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	function docSubmit() {
		if (document.forms["createUser"].checkValidity()) {
			alert('validated');
			var selection_id_value = document.getElementById('fileUpload').value;
			alert(selection_id_value);
			var encoded_uri = encodeURI("file:///" + selection_id_value);
			document.forms["createUser"].action = "createuser.action?filepath="
					+ encoded_uri;
			document.forms["createUser"].submit();
		} else {
			return 0;
		}
	}
</script>


<script>
	$(document)
			.ready(
					function() {

						$('#selectedOrganization')
								.change(
										function(event) {
											var selection_organization = $(
													"select#selectedOrganization")
													.val();

											$
													.ajax({
														url : $(
																"[id$='hiddenInput']")
																.val()
																+ "/easybusiness/department/getAllDepartmentsByOrganization/"
																+ selection_organization,
														method : "GET",
														headers : {
															"Accept" : "application/json; odata=verbose",
															"Access-Control-Allow-Origin" : "*"
														},
														success : function(data) {
															var options = $("#selectedDepartment");
															options.empty();
															for (i = 0; i < data.length; i++) {
																options
																		.append($(
																				"<option />")
																				.val(
																						data[i].id)
																				.text(
																						data[i].deptName));
															}

														},

														error : function(data) {
															var options = $("#selectedDepartment");
															options.empty();
															for (i = 0; i < data.length; i++) {
																options
																		.append($(
																				"<option />")
																				.val(
																						data[i].id)
																				.text(
																						data[i].deptName));
															}

														}

													});
										});
					});
</script>
</head>
<body>
	<!--mobilemenu-->
	<nav
		class="navbar navbar-inverse navbar-fixed-top sh-top-headernav responsivemenu"
		role="navigation">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target=".navbar-ex1-collapse">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="index.html"><img
				src="images/logo.png" align="img"></a>
		</div>
		</div>
		<!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
		<div class="collapse navbar-collapse navbar-ex1-collapse">
			<ul class="nav navbar-nav side-nav" id="sidebar">
				<li><a href="#">purchase</a></li>
				<li><a href="#">sale</a></li>
				<li><a href="#">inventory</a></li>
				<li><a href="#">store</a></li>
				<li><a href="#">production</a></li>
				<li><a href="#">project</a></li>
				<li><a href="#">quality</a></li>
				<li><a href="#">logistics</a></li>
				<li><a href="#">Hrms</a></li>
				<li><a href="javascript:;" data-toggle="collapse"
					data-target="#demo">security</a>
					<ul id="demo" class="collapse">
						<li><a href="visitorregistor.php"><span> Visitor
									Register</span></a></li>
						<li class="last"><a href="jute_entry_register.php"><span>Jute
									Entry Register</span></a></li>
						<li><a href="finishingsaleregister.php"><span>
									Finish / Sale Dispatch Register</span></a></li>
						<li class="last"><a href="store_entry_register.php"><span>Store
									Entry Register</span></a></li>
					</ul></li>
				<li><a href="#">master</a></li>
				<li><a href="#">report</a></li>
			</ul>
		</div>
		<!-- /.navbar-collapse -->
		<div class="col-sm-12 text-center">
			<ul class="nav navbar-right top-nav sh-top-navber">
				<li class="login-img-contant">
					<div class="logoin-img">
						<img src="${session.image}" class="img-responsive">
					</div>
					<div class="login-img-text">
						<p>${session.firstName}</p>
					</div>
				</li>
				<li><a href="group_user_new.php"><span class="sh-icon"><img
							src="images/settings-1.png"></span>Settings</a></li>
				<li><a href="logout.php"><span class="sh-icon"><img
							src="images/logout-1.png"> </span>Logout</a></li>
			</ul>
		</div>
	</nav>
	<!--mobilemenu-->
	<!--destopmenu-->
	<header class="color destopmenu">
		<!--container-->
		<div class="container-fuild">
			<div class="col-sm-1 logo">
				<a href="#"><img src="images/logo.png" alt="img"></a>
			</div>
			<ul class="nav navbar-nav">
				<li class="active"><a href="login.action"><span
						class="sh-icon7" title="Home"></span></a></li>
				<c:forEach items="${session.userGroupMenuDTOSession}" var="list"
					varStatus="count">
					<li class="dropdown"><a class="dropdown-toggle"
						data-toggle="dropdown" href="#"><span
							class="sh-${list.menuItem.getMenuIconName()}"
							title="${list.menuItem.getMenuName()}"></span> <span
							class="caret"></span></a>
						<ul class="dropdown-menu">
							<c:forEach var="submenu" items="${session.menuSubMenuMapSession}">
								<c:if test="${list.menuItem.getId()==submenu.key}">
									<c:forEach items="${submenu.value}" var="subMenuList"
										varStatus="count">
										<li><c:forEach var="submenuurl"
												items="${session.urlSubMenuMapSession}">
												<c:if test="${subMenuList.id==submenuurl.key}">

													<a href="${submenuurl.value.url}"> <c:out
															value="${subMenuList.subMenu}" /></a>

												</c:if>
											</c:forEach></li>
									</c:forEach>

								</c:if>
							</c:forEach>
						</ul></li>
				</c:forEach>

			</ul>
			<div class="col-sm-5">
				<ul class="nav navbar-right top-nav sh-top-navber">
					<li class="login-img-contant">
						<div class="logoin-img">
							<img src="${session.image}" class="img-responsive">
						</diV>
						<div class="login-img-text">
							<p>${session.firstName}</p>
						</div>
					</li>
					<li><a href="group_user_new.php"><span class="sh-icon"><img
								src="images/settings-1.png"></span>Settings</a></li>
					<li><a href="logout.action"><span class="sh-icon"><img
								src="images/logout-1.png"> </span>Logout</a></li>
				</ul>
			</div>
		</div>
	</header>
	<!--desktopmenu-->
	<main class="body-contant">
	<div class="container">
		<!-- container-->
		<s:form name="createUser" action="createuser" id="createUser"
			enctype="multipart/form-data" method="post">
			<div class="row">
				<!-- row-->
				<div class="heading-two">
					<!-- heading-one-->
					<h3>Create New User</h3>
				</div>
				<!-- heading-one-->
				<div class="all-contant-second">
					<!-- formpart-->
					<div class="border-styletwo">
						<div class="row">
							<div class="col-sm-12 h4style">
								<h4>Please provide below information to register as a New
									User</h4>
							</div>

							<div class="col-sm-12">
								<div class="row">
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">First Name<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="text" class="sh-inputstyle"
												placeholder="Enter first name" id="firstName"
												name="firstName" required aria-required="true">
										</div>
									</div>
									<div class="col-sm-6 form-group row pull-right">
										<div class="col-sm-4">
											<label class="sh-label">Last name<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="text" class="sh-inputstyle"
												placeholder="Enter last name" id="lastName" name="lastName"
												required aria-required="true">
										</div>
									</div>
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">User Name<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="text" class="sh-inputstyle"
												placeholder="Enter user name" id="newUserName"
												name="newUserName" required aria-required="true">
										</div>
									</div>
									<div class="col-sm-6 form-group row pull-right">
										<div class="col-sm-4">
											<label class="sh-label">Password<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="password" class="sh-inputstyle"
												placeholder="Enter password" id="newPassword"
												name="newPassword" required aria-required="true" pattern="[0-9a-fA-F]{4,8}">
										</div>
									</div>
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">Gender<span>*</span></label>
										</div>
										<div class="col-sm-8 pd">
											<div class="radio">
												<input type="radio" name="gender" id="gender1" value="male" />
												<label for="gender1" class="radio-label">Male</label>
											</div>
											<div class="radio">
												<input type="radio" name="gender" id="gender2"
													value="female" /> <label for="gender2" class="radio-label">Female</label>
											</div>
										</div>
									</div>
									<div class="col-sm-6 form-group row pull-right">
										<div class="col-sm-4">
											<label class="sh-label">Date of Birth<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="text" class="sh-inputstyle"
												placeholder="(e.g.25-JUN-1989)" id="dateOfBirth"
												name="dateOfBirth" required aria-required="true">
										</div>
									</div>
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">Email<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="email" class="sh-inputstyle"
												placeholder="Enter email address" id="email" name="email"
												required aria-required="true">
										</div>
									</div>
									<div class="col-sm-6 form-group row pull-right">
										<div class="col-sm-4">
											<label class="sh-label">Alternate Email<span>&nbsp</span></label>
										</div>
										<div class="col-sm-8">
											<input type="email" class="sh-inputstyle"
												placeholder="Enter alter email" id="alternateEmail"
												name="alternateEmail">
										</div>
									</div>
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">Mobile<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="text" class="sh-inputstyle" id="mobile"
												name="mobile" required aria-required="true" pattern="[0-9]{10,10}" maxlength="10">
										</div>
									</div>
									<div class="col-sm-6 form-group row pull-right">
										<div class="col-sm-4">
											<label class="sh-label">Organization<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<input type="hidden" id="hiddenInput"
												value="<%=InteractiveUserConstant.SERVER_HOST_LINK%>" /> <select
												class="sh-select" id="selectedOrganization"
												name="selectedOrganization">
												<option value="select">Select</option>
												<c:forEach items="${organizationList}" var="orgList"
													varStatus="count">
													<option value="${orgList.id}"><c:out
															value="${orgList.orgName}" /></option>
												</c:forEach>
											</select>
										</div>
									</div>
									<div class="col-sm-6 form-group row pull-right">
										<div class="col-sm-4">
											<label class="sh-label">Department<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<select class="sh-select" id="selectedDepartment"
												name="selectedDepartment">
												<option>Select Department</option>
												<option>Select Department</option>
											</select>
										</div>
									</div>
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">Designation<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<select class="sh-select" id="selectedDesignation"
												name="selectedDesignation">
												<option value="select">Select</option>
												<c:forEach items="${designationList}" var="desigList"
													varStatus="count">
													<option value="${desigList.id}"><c:out
															value="${desigList.desig}" /></option>
												</c:forEach>
											</select>
										</div>
									</div>
									<div class="col-sm-6 form-group row pull-right">
										<div class="col-sm-4">
											<label class="sh-label">Employment Type<span>*</span></label>
										</div>
										<div class="col-sm-8">
											<select class="sh-select" id="typeOfEmployment"
												name="typeOfEmployment">
												<option>Permanent</option>
												<option>Contract</option>
											</select>
										</div>
									</div>
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">Role<span></span></label>
										</div>
										<div class="col-sm-8">
											<select class="sh-select" id="selectedRole"
												name="selectedRole">
												<option value="select">Select</option>
												<c:forEach items="${roleList}" var="roleList"
													varStatus="count">
													<option value="${roleList.id}"><c:out
															value="${roleList.role}" /></option>
												</c:forEach>
											</select>
										</div>
									</div>
									<div class="col-sm-6 form-group row">
										<div class="col-sm-4">
											<label class="sh-label">Image<span></span></label>
										</div>
										<div class="col-sm-8">
											<input type="file" class="filestyle" data-buttonBefore="true"
												id="fileUpload" name="fileUpload">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- formpart-->
			</div>
			<!-- row-->
			<div class="all-contant-button two">
				<!-- button-->
				<ul>
					<li><button class="sh-input">Reset</button></li>
					<li><button onclick="docSubmit();" class="sh-input">Submit</button></li>
				</ul>
			</div>
		</s:form>
		<!-- button-->
		<s:if test="showResult=='yes'">

			<div id="result">
				Result-.

				<div class="container-fluid">
					<div class="row">
						<div class="col-md-10">
							<h2>
								User with user Id
								<s:property value="createUserDTO.id" />
								and user name
								<s:property value="createUserDTO.userName" />
								created successfully
							</h2>

						</div>

					</div>
				</div>
				<hr>





			</div>
		</s:if>

		<hr />
	</div>
	<!-- container--> </main>
	<footer>
		<div class="container">
			<!-- container-->
			<div class="footer-p">
				<p>Copyright 2017, vowerp.com. All Rights Reserved.</p>
			</div>
		</div>
		<!-- container-->
	</footer>

	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/sh-js.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

</body>
</html>