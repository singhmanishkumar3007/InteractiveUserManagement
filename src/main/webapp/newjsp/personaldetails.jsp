<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>User Management-User-View User</title>
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
		var selection_id_value = document.getElementById('selection_id').value;
		var user_value = document.getElementById('user_value').value;

		if (selection_id_value == 'userId') {
			document.forms["viewUser"].action = "viewuser.action?user_id_search="
					+ user_value
		} else if (selection_id_value == 'userName') {
			document.forms["viewUser"].action = "viewuser.action?user_name_search="
					+ user_value
		} else if (selection_id_value == 'userGroup') {
			document.forms["viewUser"].action = "viewuser.action?user_group_search="
					+ user_value
		}

		/* document.forms["viewUser"].action = "viewuser.action?user_id_search="
				+ user_id_value + "&user_name_search=" + user_name_value; */

		document.forms["viewUser"].submit();
	}
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
				<li class="active"><a href="login.action"><span class="sh-icon7" title="Home"></span></a></li>
				<c:forEach items="${session.userGroupMenuDTOSession}" var="list"
					varStatus="count">
					<li class="dropdown"><a class="dropdown-toggle"
						data-toggle="dropdown" href="#"><span class="sh-${list.menuItem.getMenuIconName()}" title="${list.menuItem.getMenuName()}"></span> <span class="caret"></span></a>
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
		<s:form name="viewUser" action="viewuser" id="viewUser">
			<!-- container-->

			<div class="row">

				<!-- row-->
				<div class="heading-two">
					<!-- heading-one-->
					<h3>Personal Details</h3>
				</div>


				<div class="all-contant-second">
					<!-- formpart-->
					<div class="border-styletwo">
						<div class="row">
							<div class="col-sm-12">
								<div class="row">
									<div class="col-sm-6">

										<div class="form-group row">
											<div class="col-sm-4">
												<label class="sh-label">Select Input Criteria:</span></label>
											</div>
											<div class="col-sm-8">
												<select name="selection_id" id="selection_id"
													class="form-control">

													<option value="userId">User Id</option>
													<option value="userName">User Name</option>
													<option value="userGroup">User Group</option>


												</select>
											</div>
										</div>




										<div class="form-group row">
											<div class="col-sm-4">
												<label class="sh-label">Provide Input Value:</span></label>
											</div>
											<div class="col-sm-8">
												<input type="text" class="sh-inputstyle"
													placeholder="Provide Value" id="user_value"
													name="user_value">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="all-contant-button two">
					<!-- button-->
					<ul>
						<li><button class="sh-input">Reset</button></li>
						<li><button class="sh-input" onclick="docSubmit();">Search</button></li>
					</ul>
				</div>





				<s:if test="showResult=='yes'">
					<!-- heading-one-->
					<div class="all-contant-second">
						<h3>Personal Details</h3>
						<div class="border-styletwo">
							<div class="row">
								<div class="col-sm-12">
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Name<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.firstName" />
													&nbsp
													<s:property value="userDetailsDTO.lastName" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Address<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.permAddr" /> &nbsp <s:property value="userDetailsDTO.city" /> &nbsp <s:property value="userDetailsDTO.state" /> &nbsp <s:property value="userDetailsDTO.zip" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Email<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.email" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Phone<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.mobile" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">State<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.state" />
												</div>
											</div>

											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">City<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.city" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Country<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.country" />
												</div>
											</div>




										</div>
										<div class="col-sm-6">
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Zip<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.zip" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Date of Birth<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<%-- <input type="text" class="sh-inputstyle datepicker">
                                         <span class="input-group-addon"><i class="fa fa-calendar" aria-hidden="true"></i></span> --%>
													<s:property value="userDetailsDTO.dateOfBirth" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Father Name<span>*</span></label>
												</div>
												<div class="col-sm-8"><s:property value="userDetailsDTO.fatherName"/></div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Spouse Name<span>*</span></label>
												</div>
												<div class="col-sm-8"><s:property value="userDetailsDTO.spouseName"/></div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Passport<span>*</span></label>
												</div>
												<div class="col-sm-8"><s:property value="userDetailsDTO.passport"/></div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">ID Proof<span>*</span></label>
												</div>
												<div class="col-sm-8">NA</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Photo<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<img src="<s:property value="image" />" alt="images" class="img-responsive">
												</div>
											</div>




										</div>

									</div>


								</div>
							</div>
						</div>
					</div>
					<!-- formpart1 over-->
					<!-- formpart2 starts-->
					<div class="all-contant-second">
						<h3>Professional/Academic Details</h3>
						<div class="border-styletwo">
							<div class="row">
								<div class="col-sm-12">
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Department<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.department.deptName" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Designation<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.designation.desig" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Organization<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userDetailsDTO.organization.orgName" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Primary Skill<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userProfessionDTO.primarySkill" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Secondary Skills<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userProfessionDTO.prevTechnology" />
												</div>
											</div>

											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Work Experience<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userProfessionDTO.totalExp" />
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Relevant Experience<span>*</span></label>
												</div>
												<div class="col-sm-8">
													<s:property value="userProfessionDTO.relevantExp" />
												</div>
											</div>




										</div>
										<div class="col-sm-6">
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Joining Date<span>*</span></label>
												</div>
												<div class="col-sm-8">
													NA
												</div>
											</div>
											<div class="form-group row">
												<div class="col-sm-4">
													<label class="sh-label">Employment Type<span>*</span></label>
												</div>
												<div class="col-sm-8">
													NA
												</div>
											</div>





										</div>

									</div>


								</div>
							</div>
						</div>
					</div>
					<!-- formpart2 over-->
				</s:if>
			</div>
			<!-- row-->

			<!-- button-->
		</s:form>
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