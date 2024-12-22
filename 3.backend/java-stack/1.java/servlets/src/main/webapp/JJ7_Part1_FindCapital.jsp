<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="servlets.CountryCapital" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%
        String country = request.getParameter("country");
		CountryCapital cc = new CountryCapital();
        String capital = cc.getCapital(country);
        if (capital != null) {
            out.println("<h3>You have searched for " + country + "</h3>");
        	out.println("<h3>Result: <i>" + capital + "</i></h3><br>");
        } else {
            out.println("<h5>Sorry, the capital for " + country + " is not found.</h3>");
        }
    %>
</body>
</html>