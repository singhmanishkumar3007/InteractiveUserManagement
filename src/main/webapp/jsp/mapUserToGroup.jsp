<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<html>
<head>
<title>User Management-UserGroup-Map User To Group</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<script type="text/javascript">
function docSubmit() {
	var selection_group_id = document.getElementById('selection_group_id').value;
	var userNameForGroup = document.getElementById('userNameForGroup').value;

		document.forms["mapUserToGroup"].action = "mapusertogroup.action?groupNameForMapping="
			+ selection_group_id+"&userNameForGroupMapping="+userNameForGroup

	document.forms["mapUserToGroup"].submit();
}

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
			<h1>Map User To Group</h1>
			<p>Please provide below information to map User to Group</p>

			<s:form name="mapUserToGroup" action="mapusertogroup" id="mapUserToGroup"
				cssClass="form-inline">




				<div class="form-group">

						<div class="col-sm-5">
						<table class="table table-striped">

							<tr>
								<td>Select User Group:</td>
								<td><select name="selection_group_id" id="selection_group_id" class="form-control">
					<c:forEach items="${userGroupAllList}" var="list" varStatus="count">
					<option value="${list.userGroupName}"><c:out value="${list.userGroupName}"/></option>
					</c:forEach>
					
					
						<!-- <option value="userId">User Id</option>
						<option value="userName">User Name</option>
						<option value="userGroup">User Group</option> -->


					</select></td>
									<td>Provide UserName:</td>
								<td><input class="form-control"
						id="userNameForGroup" type="text" name="userNameForGroup" 
						onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>
							</table>
							</div>
						
				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						&nbsp&nbsp
						 <button type="button" class="btn btn-primary" onclick="docSubmit();">Map User To Group</button> 
					</div>
				</div>

</s:form>

         <s:if test="showResult=='yes'">
         
        <div id="result">Result.
        
        <div class="container-fluid">
					<div class="row">
						<div class="col-md-10">
						User Mapping to User Group done successfully with user group Id as <c:out
								value="${userGroupMapResponseDTO.userGroup.getId()}" /> and user id as <c:out
								value="${userGroupMapResponseDTO.user.getId()}" />
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