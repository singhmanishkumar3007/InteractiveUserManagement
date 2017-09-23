<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>index</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
      <link href="css/sb-admin.css" rel="stylesheet" type="text/css">
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <link rel="stylesheet" type="text/css" href="css/sb-admin.css">
      <link rel="stylesheet" type="text/css" href="css/responsive.css">
      <link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
   </head>
   <body>
       <!--mobilemenu-->
      <nav class="navbar navbar-inverse navbar-fixed-top sh-top-headernav responsivemenu" role="navigation">
         <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html"><img src="images/logo.png" align="img"></a>
         </div>
         </div>
         <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
         <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav side-nav" id="sidebar">
               <li>
                  <a href="#">purchase</a>
               </li>
               <li>
                  <a href="#">sale</a>
               </li>
               <li>
                  <a href="#">inventory</a>
               </li>
               <li>
                  <a href="#">store</a>
               </li>
               <li>
                  <a href="#">production</a>
               </li>
               <li>
                  <a href="#">project</a>
               </li>
               <li>
                  <a href="#">quality</a>
               </li>
               <li>
                  <a href="#">logistics</a>
               </li>
               <li>
                  <a href="#">Hrms</a>
               </li>
               <li>
                  <a  href="javascript:;" data-toggle="collapse" data-target="#demo">security</a>
                  <ul id="demo" class="collapse">
                     <li><a href="visitorregistor.php"><span> Visitor Register</span></a></li>
                     <li class="last"><a href="jute_entry_register.php"><span>Jute Entry Register</span></a></li>
                     <li><a href="finishingsaleregister.php"><span> Finish / Sale Dispatch Register</span></a></li>
                     <li class="last"><a href="store_entry_register.php"><span>Store Entry Register</span></a></li>
                  </ul>
               </li>
               <li>
                  <a href="#">master</a>
               </li>
               <li>
                  <a href="#">report</a>
               </li>
            </ul>
         </div>
         <!-- /.navbar-collapse -->
         <div class="col-sm-12 text-center">
            <ul class="nav navbar-right top-nav sh-top-navber">
               <li class="login-img-contant">
                  <div class="logoin-img"><img src="<s:property value="image" />" class="img-responsive"></div>
                  <div class="login-img-text">
                     <p><s:property value="userDTO.firstName" /></p>
                  </div>
               </li>
               <li><a href="group_user_new.php"><span class="sh-icon"><img src="images/settings-1.png"></span>Settings</a></li>
               <li><a href="logout.php"><span class="sh-icon"><img src="images/logout-1.png"> </span>Logout</a></li>
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
                     <li class="active"><a href="login.action"><span class="sh-icon7" title="Home"></span><span class="caret"></span></a></li>
				<c:forEach items="${userGroupMenuMapDTO}" var="list" varStatus="count">
					<li class="dropdown"><a class="dropdown-toggle"
						data-toggle="dropdown" href="#"><span class="sh-${list.menuItem.getMenuIconName()}" title="${list.menuItem.getMenuName()}"></span>
						<%-- <c:out
								value="${list.menuItem.getMenuName()}" /> --%> <span class="caret"></span></a>
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
            <div class="col-sm-5">
               <ul class="nav navbar-right top-nav sh-top-navber">
                  <li class="login-img-contant">
                     <div class="logoin-img"><img src="<s:property value="image" />" class="img-responsive"></diV>
                     <div class="login-img-text">
                        <p><s:property value="userDTO.firstName" /></p>
                     </div>
                  </li>
                  <li><a href="group_user_new.php"><span class="sh-icon"><img src="images/settings-1.png"></span>Settings</a></li>
                  <li><a href="logout.action"><span class="sh-icon"><img src="images/logout-1.png"> </span>Logout</a></li>
               </ul>
            </div>
         </div>
      </header>
      <!--desktopmenu-->
      <main class="body-contant">
         <div class="container">
         <!-- container-->
         <div class="row">
            <!-- row-->
            <div class="heading-two">
               <!-- heading-one-->
               <h3>User Profile Details</h3>
            </div>
            <!-- heading-one-->
            <div class="all-contant-second">
               <!-- formpart-->
               <div class="border-styletwo border-styletwowidthone">
                  <div class="col-sm-3 user-pf-container">
                    
                     <div class="user-profile col-xs-6"><img src="<s:property value="image" />" alt="images" class="img-responsive"></div>
                      <div class="row">
                     <div class="user-profile-details col-xs-6 col-sm-12">
                        <span class="user-name">
                           <p><s:property value="userDTO.firstName" />
								&nbsp
								<s:property value="userDTO.lastName" /></p>
                        </span>
                        <span class="user-add">
                           <i class="fa fa-map-marker" aria-hidden="true"></i>
                           <p><s:property value="userDTO.permAddr" /></p>
                        </span>
                        <span class="user-mail">
                           <i class="fa fa-envelope-o" aria-hidden="true"></i>
                           <p><s:property value="userDTO.email" /></p>
                        </span>
                        <span class="user-ph">
                           <i class="fa fa-phone" aria-hidden="true"></i>
                           <p><s:property value="userDTO.mobile" /></p>
                        </span>
                       <!--  <span class="user-bt">
                        <button class="sh-input">Edit Profile</button>
                        </span> -->
                     </div>
                  </div>
                  </div>
                  <div class="col-sm-1 user-line">
                     <img src="images/line-two.png" alt="images">
                  </div>
                  <div class="col-sm-8 user-silder">
                     <div class="row">
                        <nav class="slidernav">
                           <div id="navbtnsone" class="clearfix"> 
                              <a href="#" class="previous"><span class="glyphicon glyphicon-chevron-left"></span></a> <a href="#" class="next"><span class="glyphicon glyphicon-chevron-right"></span></a> 
                           </div>
                        </nav>
                        <div class="crsl-items" data-navigation="navbtnsone">
                           <div class="crsl-wrap row">
                              <div class="crsl-item col-md-4 col-sm-6">
                                 <div class="thumbnail">
                                    <figure>
                                       <div class="profile-details-info-icon">
                                          <img src="images/icon-1.png" alt="img">
                                       </div>
                                       <div class="profile-details-contant-right">
                                          <div class="profile-details-info">
                                             <h3>Personal Details</h3>
                                             <ul>
                                                <li>
                                                  <p>Date Of Birth:<s:property value="userDTO.dateOfBirth" />  </p>
                                                </li>
                                                <li>
                                                   <p>Gender:<s:property value="userDTO.gender" />  </p>
                                                </li>
                                                <li>
                                                   <p>Father:<s:property value="userDTO.fatherName" />  </p>
                                                </li>
                                             </ul>
                                             <span class="editbt"><a href="editpersonaldetails.action" target="_self" title="Personal Details"><img src="images/icon-4.png" alt="img"></a></span>
                                          </div>
                                       </div>
                                    </figure>
                                 </div>
                              </div>
                              <div class="crsl-item col-md-4 col-sm-6">
                                 <div class="thumbnail">
                                    <figure>
                                       <div class="profile-details-info-icon">
                                          <img src="images/icon-2.png" alt="img">
                                       </div>
                                       <div class="profile-details-contant-right">
                                          <div class="profile-details-info">
                                             <h3>Professional Details</h3>
                                             <ul>
                                                <li>
                                                   <p>Organization:<s:property value="userDTO.organization.orgName" />
                                                   </p>
                                                </li>
                                                <li>
                                                   <p>Department:<s:property value="userDTO.department.deptName" /> </p>
                                                </li>
                                                <li>
                                                   <p>Designation:<s:property value="userDTO.designation.desig" /></p>
                                                </li>
                                             </ul>
                                             <span class="editbt"><a href="editprofessionaldetails.action" target="_self" title="Professional Details"><img src="images/icon-4.png" alt="img"></a></span>
                                          </div>
                                       </div>
                                    </figure>
                                 </div>
                              </div>
                              <div class="crsl-item col-md-4 col-sm-6">
                                 <div class="thumbnail">
                                    <figure>
                                       <div class="profile-details-info-icon">
                                          <img src="images/icon-3.png" alt="img">
                                       </div>
                                       <div class="profile-details-contant-right">
                                          <div class="profile-details-info">
                                             <h3>Academic Details</h3>
                                             <ul>
                                                <li>
                                                   <p>Highest Degree:<s:property value=" userAcademicsDTO.highestDegree"/>
                                                   </p>
                                                </li>
                                                <li>
                                                   <p>University/Board:<s:property value="userAcademicsDTO.university"/> </p>
                                                </li>
                                                <li>
                                                   <p>Pass Out Year:<s:property value="userAcademicsDTO.passOutYear"/></p>
                                                </li>
                                             </ul>
                                             <span class="editbt"><a href="editacademicdetails.action" target="_self" title="Academic Details"><img src="images/icon-4.png" alt="img"></a></span>
                                          </div>
                                       </div>
                                    </figure>
                                 </div>
                              </div>
                              <div class="crsl-item col-md-4 col-sm-6">
                                 <div class="thumbnail">
                                    <figure>
                                       <div class="profile-details-info-icon">
                                          <img src="images/icon-7.png" alt="img">
                                       </div>
                                       <div class="profile-details-contant-right">
                                          <div class="profile-details-info">
                                             <h3>Bank Details</h3>
                                             <ul>
                                             <c:forEach items="${UserBankMapDTO}" var="bankList"
								varStatus="count">
                                                <li>
                                                   <p>Account No: <c:out value="${bankList.accountNum}" /> 
                                                   </p>
                                                </li>
                                                <li>
                                                   <p>Bank:<c:out value="${bankList.bank.getBankName()}" /></p>
                                                </li>
                                                <li>
                                                   <p>Branch:<c:out value="${bankList.branch.getBranchName()}" /></p>
                                                </li>
                                              </c:forEach>
                                             </ul>
                                             <span class="editbt"><a href="editbankdetails.action" target="_self" title="Bank Details"><img src="images/icon-4.png" alt="img"></a></span>
                                          </div>
                                       </div>
                                    </figure>
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
         </div>
         <!-- container-->
      </main>
      <footer>
         <div class="container">
            <!-- container-->
            <div class="footer-p user-foter-p">
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