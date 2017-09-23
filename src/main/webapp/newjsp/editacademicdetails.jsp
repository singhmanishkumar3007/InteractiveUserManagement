<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Edit Academic Details</title>
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


      
   </head>
   <body>
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
		<!-- container-->
<s:form name="editacademicdetails" action="editacademicdetails"
			id="editacademicdetails">
		<div class="all-heading-style-two">
			<!-- heading-one-->
			<h3>Academic Details</h3>
		</div>
		<!-- heading-one-->
		<div class="all-bodypart-style-two">
			<!-- formpart-->
			<div class="bodypart-dwidthone">
				<div class="row">
					<div class="col-sm-12">
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group row">
									<div class="col-sm-4">
										<label>University / Board<span>*</span></label>
									</div>
									<div class="col-sm-8">
										<input type="text" id="editUniversity" name="editUniversity" value="<c:out value="${userAcademicsDTO.university}"/> ">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-4">
										<label>Highest Degree<span>*</span></label>
									</div>
									<div class="col-sm-8">
										<input type="text" id="editHighestDegree" name="editHighestDegree" value="<c:out value="${userAcademicsDTO.highestDegree}"/> ">
									</div>
								</div>
								
								<div class="form-group row">
									<div class="col-sm-4">
										<label>Marks(Percentage/CGPA)<span>*</span></label>
									</div>
									<div class="col-sm-4">
										<input type="text" id="editMarks" name="editMarks" value="<c:out value="${userAcademicsDTO.marks}"/> ">
									</div>
									<div class="col-sm-1 col-sm-offset-right-3 pd">
										<label class="sh-label">%</label>
									</div>
								</div>









							</div>
							<div class="col-sm-6">

								<div class="form-group row">
									<div class="col-sm-5">
										<label>College<span>*</span></label>
									</div>
									<div class="col-sm-7">
										<input type="text" id="editCollege" name="editCollege" value="<c:out value="${userAcademicsDTO.college}"/> ">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-5">
										<label>Year Of Pass-Out<span>*</span></label>
									</div>
									<div class="col-sm-7">
										<input type="text" id="editPassOutYear" name="editPassOutYear" value="<c:out value="${userAcademicsDTO.passOutYear}"/> "> 
									</div>
								</div>
								






							</div>

						</div>


					</div>
				</div>
			</div>
		</div>
		<!-- formpart-->

		<div class="all-btn-style">
			<!-- button-->
			<button class="sh-input">Reset</button>
			<button type="submit" class="sh-input">Submit</button>

		</div>
		<!-- button-->
		<s:if test="showResult=='yes'">

					<div id="result">
						Result.

						<div class="container-fluid">
							<div class="row">
								<div class="col-md-10">User's Academics Details updated successfully</div>
							</div>
						</div>
						<hr>





					</div>
				</s:if>
		</s:form>
	</div>
	<!-- container--> </main>
	<footer>
		<!-- container-->
		<div class="container text-center">
			<p>Copyright 2017, vowerp.com. All Rights Reserved.</p>
		</div>
		<!-- container-->
	</footer>
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/sh-js.js"></script>
	<script type="text/javascript" src="js/responsiveCarousel.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

</body>
</html>