<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<html>
<head>
<title>User Management-Home</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<script type="text/javascript">
	/* function docSubmit() {
	var test_id = document.getElementById('test_id1').value;
	var can_name = document.getElementById('can_name1').value;

	if (document.pressed == 'Find') {

		document.studentResult.action = "findStudent.action?test_id="
				+ test_id + "&can_name=" + can_name;

	} else if (document.pressed == 'Next') {
		document.studentResult.action = "showAnswer";
	}

	document.forms["studentResult"].action = "findStudent.action?test_id="
			+ test_id + "&can_name=" + can_name;

	document.forms["studentResult"].submit(); 
	} */
</script>


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
				<c:forEach items="${userGroupMenuMapDTO}" var="list" varStatus="count">
					<li class="dropdown"><a class="dropdown-toggle"
						data-toggle="dropdown" href="#"><c:out
								value="${list.menuItem.getMenuName()}" /> <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<c:forEach var="submenu" items="${menuSubMenuMap}">
								<c:if test="${list.menuItem.getId()==submenu.key}">
									<c:forEach items="${submenu.value}" var="subMenuList"
										varStatus="count">
										<li>
										<c:forEach var="submenuurl" items="${urlSubMenuMap}">
										<c:if test="${subMenuList.id==submenuurl.key}">
										
										<a href="${submenuurl.value.url}">
										
										<c:out value="${subMenuList.subMenu}" /></a>
										
										</c:if>
										</c:forEach>
										</li>
									</c:forEach>

								</c:if>
							</c:forEach>
						</ul></li>
				</c:forEach>

			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#"><span class="glyphicon glyphicon-user"></span>
						<s:property value="userName" /></a></li>
				<li><a href="#"><span class="glyphicon glyphicon-phone"></span>
						<s:property value="userDTO.mobile" /></a></li>
			</ul>
		</div>
	</nav>







	<div class="container">

		<div class="container-fluid">

			<div class="media"></div>

			<h2>
				Welcome
				<s:property value="userName" />
			</h2>
		</div>

		<div class="media">
			<div class="media-left">
				<img src="<s:url value="/images/male_avatar.jpg"/>"
					class="media-object" style="width: 60px" />

			</div>
			<div class="media-body">
				<h4 class="media-heading">My profile</h4>



				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-4">
							<h2>Personal Details</h2>
							<p>
								<s:property value="userDTO.firstName" />
								&nbsp
								<s:property value="userDTO.lastName" />
							</p>
							<p>
								<s:property value="userDTO.email" />
							</p>
							<p>
								<s:property value="userDTO.mobile" />
							</p>
						</div>
						<div class="col-xs-4">
							<h2>Professional Details</h2>
							<p></p>
							<p></p>
						</div>
						<div class="col-xs-4">
							<h2>Bank Details</h2>
							<c:forEach items="${UserBankMapDTO}" var="bankList"
								varStatus="count">
								<p>
									<c:out value="${bankList.accountNum}" />
								</p>
								<p>
									<c:out value="${bankList.bank.getBankName()}" />
								</p>
								<p>
									<c:out value="${bankList.branch.getBranchName()}" />
								</p>
							</c:forEach>
						</div>
					</div>
				</div>
				<hr>





			</div>
		</div>
		<hr>



	</div>








	<!--  -->




</body>
</html>