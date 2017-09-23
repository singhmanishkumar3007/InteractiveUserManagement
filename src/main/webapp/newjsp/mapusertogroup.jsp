<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>User Management-UserGroup-Map User To Group</title>
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
	function docNewSubmit() {

		var selection_group_id = document.getElementById('selection_group_id').value;
		var select2 = document.getElementById('select2').value;
		var InvForm = document.forms.mapUserToGroup;
		var selUserVal = "";
		var x = 0;
		for (x = 0; x < InvForm.select2.length; x++) {
			if (InvForm.select2[x].selected) {
				//alert(InvForm.kb[x].value);
				selUserVal = selUserVal + InvForm.select2[x].value + ",";
			}
		}
		document.forms["mapUserToGroup"].action = "mapusertogroup.action?groupNameForMapping="+ selection_group_id+ "&userNameForGroupMapping="+ selUserVal;

		document.forms["mapUserToGroup"].submit();
	}
</script>

<script type="text/javascript">
	$().ready(
			function() {
				$('#add').click(
						function() {
							return !$('#select1 option:selected').remove()
									.appendTo('#select2');
						});
				$('#remove').click(
						function() {
							return !$('#select2 option:selected').remove()
									.appendTo('#select1');
						});
			});
</script>

<script type="text/javascript">
	function docSubmit() {
		var selection_group_id = document.getElementById('selection_group_id').value;
		var userNameForGroup = document.getElementById('userNameForGroup').value;

		document.forms["mapUserToGroup"].action = "mapusertogroup.action?groupNameForMapping="
				+ selection_group_id
				+ "&userNameForGroupMapping="
				+ userNameForGroup

		document.forms["mapUserToGroup"].submit();
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
						data-toggle="dropdown" href="#"><span class="sh-${list.menuItem.getMenuIconName()}" title="${list.menuItem.getMenuName()}"></span><span class="caret"></span></a>
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
		<s:form name="mapUserToGroup" action="mapusertogroup"
			id="mapUserToGroup">
			<!-- container-->
			<div class="row">
				<!-- row-->
				<div class=" col-sm-offset-6 col-sm-6 searchbtn">
					<a href="#" data-toggle="modal" data-target="#myModal"
						class="search-btn-one"><img src="images/searchicon.png"
						alt="img"></a>
					<div class="modal fade" id="myModal" role="dialog">
						<div class="modal-dialog">
							<div class="modal-content sh-modalcontant">
								<div class="modal-body">
									<button type="button" class="close sh-closebtn"
										data-dismiss="modal">Ã</button>
									<div class="sh-modal-body">
										<div class="row">
											<div class="col-sm-3">
												<label class="sh-label">From Date</label>
											</div>
											<div class="col-sm-9">
												<input type="text" class="sh-inputstyle datepicker">
												<span class="input-group-addon"><i
													class="fa fa-calendar" aria-hidden="true"></i></span>
											</div>
										</div>
										<div class="row">
											<div class="col-sm-3">
												<label class="sh-label">TO Date</label>
											</div>
											<div class="col-sm-9">
												<input type="text" class="sh-inputstyle datepicker">
												<span class="input-group-addon"><i
													class="fa fa-calendar" aria-hidden="true"></i></span>
											</div>
										</div>
										<button class="sh-input btn">Search</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="allcontant-first">
					<div class="allheadingstyle">
						<div class="row">
							<div class="col-sm-6">
								<h3>Please provide below information to map User/s to Group</h3>
							</div>
						</div>
					</div>
					<div class="border-style">
						<div class="row">
							<div class="col-sm-6 pdtwo">
								<div class="row">
									<div class="col-sm-5">
										<label class="sh-label">Select User Group</label>
									</div>
									<div class="col-sm-7">
										<select name="selection_group_id"
											id="selection_group_id" class="sh-select">
											<option value="Select"/>
											<c:forEach items="${userGroupAllList}" var="list"
												varStatus="count">
												<option value="${list.userGroupName}"><c:out
														value="${list.userGroupName}" /></option>
											</c:forEach>




										</select>
									</div>
								</div>
							</div>
							<div class="col-sm-1 line pd">
								<img src="images/line.png">
							</div>
						</div>
					</div>
				</div>
				
				<div class="heading-two">
					<!-- heading-one-->
					<h3>Map User to Group</h3>
				</div>
				<!-- heading-one-->
				<div class="all-contant-second">
					<!-- formpart-->
					<div class="border-styletwo width4">
						<div class="col-sm-5">
							<div class="list-menu">
								<h3>Users</h3>

								<select multiple id="select1" cssClass="list-menu">
									<c:forEach items="${subMap}" var="userList" varStatus="count">
										<li>
											<p>
												<option value="${userList.value}"><c:out
														value="${userList.value} [${userList.key}]" /></option>
											</p>
										</li>

									</c:forEach>
								</select>

							</div>
						</div>
						<div class="col-sm-2">
							<div class="list-menu-button">
								<button class="bt-one" id="add">
									<img src="images/icon-5.png" alt="img">
								</button>
								<button class="bt-two" id="remove">
									<img src="images/icon-6.png" alt="img">
								</button>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="list-menu">
								<h3>Selected Items</h3>

								<select multiple id="select2" cssClass="list-menu"></select>

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
					<li><button class="sh-input btn" onclick="docNewSubmit();">Submit</button></li>
				</ul>
			</div>
			<!-- button-->

			<s:if test="showResult=='yes'">

				<div id="result">
					Result.

					<div class="container-fluid">
						<div class="row">
							<div class="col-md-10">
								User Mapping to User Group done successfully with user group Id
								as
								<c:out value="${userGroupMapResponseDTO.userGroup.getId()}" />
							</div>
						</div>
					</div>
					<hr>





				</div>
			</s:if>
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
	<script type="text/javascript" src="js/responsiveCarousel.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</body>
</html>