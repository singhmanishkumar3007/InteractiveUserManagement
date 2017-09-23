<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>


<html>
<head>

<title>User Management-User-Create User</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<sj:head  />
</head>


<body>



	<p />



	<!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->






	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">User Management</a>
			</div>
			<ul class="nav navbar-nav">
				<li class="active"><a href="#">Home</a></li>
				<c:forEach items="${session.userGroupMenuDTOSession}" var="list"
					varStatus="count">
					<li class="dropdown"><a class="dropdown-toggle"
						data-toggle="dropdown" href="#"><c:out
								value="${list.menuItem.getMenuName()}" /> <span class="caret"></span></a>
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
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#"><span class="glyphicon glyphicon-user"></span>
						<s:property value="#session.userDTOSession.userName" /></a></li>
				<li><a href="#"><span class="glyphicon glyphicon-phone"></span>
						<s:property value="#session.userDTOSession.mobile" /></a></li>
			</ul>
		</div>
	</nav>







	<div class="container">

		<div class="jumbotron">
			<h1>Create New User</h1>
			<p>Please provide below information to register a new User</p>

			<s:form name="createUser" action="createuser" id="createUser"
				cssClass="form-inline" enctype="multipart/form-data">




				<div class="form-group">

					<div class="col-sm-5">
						<table class="table table-striped">

							<tr>
								<td>First Name:</td>
								<td><input class="form-control" id="firstName" type="text"
									name="firstName"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
									<td>Last Name:</td>
								<td><input class="form-control" id="lastName" type="text"
									name="lastName"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>
							<tr>
								<td>User Name:</td>
								<td><input class="form-control" id="newUserName" type="text"
									name="newUserName"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
									<td>Password:</td>
								<td><input class="form-control" id="newPassword" type="password"
									name="newPassword"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>
							<tr>
								<td>Gender:</td>
								<td><input class="form-control" id="gender" type="text"
									name="gender"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
									<td>Date Of Birth:</td>
								<td>
								<input class="form-control" id="dateOfBirth" type="text"
									name="dateOfBirth"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
								
							</tr>
							<tr>
								<td>Email:</td>
								<td><input class="form-control" id="email" type="text"
									name="email"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
									<td>Alternate Email:</td>
								<td><input class="form-control" id="alternateEmail" type="text"
									name="alternateEmail"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>
							<tr>
								<td>Mobile:</td>
								<td><input class="form-control" id="mobile" type="text"
									name="mobile"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
									<td>Organization:</td>
								<td><input class="form-control" id="organization" type="text"
									name="organization"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>
							<tr>
								<td>Department:</td>
								<td><input class="form-control" id="department" type="text"
									name="department"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
									<td>Designation:</td>
								<td><input class="form-control" id="designation" type="text"
									name="designation"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>
							
							<tr>
								<td>Employment Type:</td>
								<td><input class="form-control" id="typeOfEmployment" type="text"
									name="typeOfEmployment"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
									<td>Image:</td>
								<td><input class="form-control" id="userImg" type="file"
									name="userImg"
									onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>


						</table>
					</div>

				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						&nbsp&nbsp
						<button type="submit" class="btn btn-primary"">Create
							User</button>
					</div>
				</div>

			</s:form>

			<s:if test="showResult=='yes'">

				<div id="result">
					Result-.

					<div class="container-fluid">
						<div class="row">
							<div class="col-md-10">
								<h2>User with user Id <s:property value="createUserDTO.id"/>  and user name <s:property value="createUserDTO.userName"/> created successfully </h2>
								
							</div>
							
						</div>
					</div>
					<hr>





				</div>
			</s:if>

			<hr />
		</div>
		<hr>



	</div>








	<!--  -->




</body>
</html>