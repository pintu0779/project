<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.db.DBConnect" %>
<%@page import="java.sql.Connection"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SignUp here</title>
<%@include file="component/allcss.jsp"%>
<style>
    /* Define a CSS class for the background image */
    .background-image {
        background-image: url('image/iteam.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 500px;
    }
<style type="text/css">

.paint-card { 
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
</style>
</head>
<body class="background-image">

<%Connection conn=DBConnect.getConn();
out.print(conn);
%>

<%@include file="component/navbar.jsp"%>

<div class="container p-5">
<div class="row">
<div class="col-md-4 offset-md-4">
<div class="card paint-card">
<div class="card-body">
<p class="fs-4 text-center">UserRegister</p>


<c:if test="${not empty sucMsg}">
<p class="text-center text-success fs-3">${sucMsg}</p>
<c:remove var="sucMsg" scope="session"/>
</c:if>

<c:if test="${not empty errorMsg}">
<p class="text-center text-danger fs-3">${errorMsg}</p>
<c:remove var="errorMsg" scope="session"/>
</c:if>

<form action="#" method="post"> 
<div class="mb-3">
<label class="form-label">Full Name</label> <input required 
     name="fullname" type="text" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Email address</label> <input required 
     name="email" type="email" class="form-control">
</div>

<div class="mb-3">
<label class="form-label">Password</label> <input required 
     name="password" type="password" class="form-control">
</div>

<button type="submit" class="btn bg-success text=white col-md-12">Register</button>
</form>
</div>
</div>
</div>
</div>
</div>
</body>
</html>