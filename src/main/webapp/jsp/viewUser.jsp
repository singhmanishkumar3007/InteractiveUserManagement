<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<html>
<head>
<title>User Management-User-View User</title>
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
	var selection_id_value = document.getElementById('selection_id').value;
	var user_value = document.getElementById('user_value').value;

	if(selection_id_value=='userId')
		{
		document.forms["viewUser"].action = "viewuser.action?user_id_search="
			+ user_value
		}
	else if(selection_id_value=='userName')
		{
		document.forms["viewUser"].action = "viewuser.action?user_name_search="
			+ user_value
		}
	else if(selection_id_value=='userGroup')
		{
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
			<h1>View User Details</h1>
			<p>Please provide below information to search for a user</p>

			<s:form name="viewUser" action="viewuser" id="viewUser"
				cssClass="form-inline">




				<div class="form-group">

						<div class="col-sm-5">
						<table class="table table-striped">

							<tr>
								<td>Select Search Criteria:</td>
								<td><select name="selection_id" id="selection_id" class="form-control">
					
						<option value="userId">User Id</option>
						<option value="userName">User Name</option>
						<option value="userGroup">User Group</option>


					</select></td>
									<td>Provide Value:</td>
								<td><input class="form-control"
						id="user_value" type="text" name="user_value" 
						onkeydown="if (event.keyCode == 13) { docSubmit(); return false; }"></td>
							</tr>
							</table>
							</div>
						
				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						&nbsp&nbsp
						 <button type="button" class="btn btn-primary" onclick="docSubmit();">Search</button> 
					</div>
				</div>

</s:form>

         <s:if test="showResult=='yes'">
         
        <div id="result">Search Result.
        
        <div class="container-fluid">
					<div class="row">
						<div class="col-xs-4">
							<h2>Personal Details</h2>
							<p>
								<s:property value="userDetailsDTO.firstName" />
								&nbsp
								<s:property value="userDetailsDTO.lastName" />
							</p>
							<p>
								<s:property value="userDetailsDTO.email" />
							</p>
							<p>
								<s:property value="userDetailsDTO.mobile" />
							</p>
						</div>
						<div class="col-xs-4">
							<h2>Professional Details</h2>
							<p></p>
							<p></p>
						</div>
						<div class="col-xs-4">
							<h2>Bank Details</h2>
							<c:forEach items="${UserBankMapDetailsDTO}" var="bankList"
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
        </s:if>

			<hr />
		</div>
		<hr>



	</div>








	<!--  -->




</body>
</html>