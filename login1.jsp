<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.sql.Connection"%>
<%@page import="com.db.DBConnect" %><%@page import="java.sql.Connection"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>User Login Page</title>
<%@include file="component/allcss.jsp"%>

<style>
    /* Define a CSS class for the background image */
    .background-image {
        background-image: url('image/iteam.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 500px;
    }
    
    .paint-card { 
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
</style>
<style type="style.css">
.paint-card { 
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
</style>

</head>
<body class="background-image">
<%@include file="component/navbar.jsp"%>

<%Connection conn=DBConnect.getConn();
out.print(conn);
%>

<div class="container p-5">
<div class="row">
<div class="col-md-4 offset-md-4">
<div class="card paint-card">
<div class="card-body">
<p class="fs-4 text-center">User Login</p>

<form action="" method="post">
<div class="mb-3">
<label class="form-label">Email address</label> <input required 
     name="email" type="email" class="form-control">
</div>
<div class="mb-3">
<label class="form-label">Password</label> <input required 
     name="password" type="password" class="form-control">
</div>

<button type="submit" class="btn bg-success text=white col-md-12">Login</button>
</form>
<br> Don't have an Account?<a href="signup1.jsp" class="text-decoration-none">
Create_One</a>
</div>
</div>
</div>
</div>
</div>
</body>
</html>