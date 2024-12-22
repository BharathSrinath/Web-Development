<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%
		String planguage = request.getParameter("technology");
		out.println("<h1 style ='display: flex; justify-content: center'>Welcome to "+planguage+" home page</h1>");
	%>
</body>
</html>