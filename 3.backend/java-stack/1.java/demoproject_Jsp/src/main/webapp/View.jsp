<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>View</title>
<link href="Assets/logo.png" rel="icon">
<link href="Styles.css" rel="stylesheet">
</head>
<%@page import="java.util.Stack" %>
<%@page import="demoproject_Jsp.Info" %>
<body>
<jsp:useBean id="db" class="demoproject_Jsp.DBCode"></jsp:useBean>	
<%
	Stack<Info> st=db.view();
%>
<a href="Register.jsp">Back</a>
<br>
<h1 style="color:white;">Registered Product Data</h1>
<br>
<table cellspacing="20" cellpadding="10" border="5" rules="all">
<tr><th>ID</th><th>Name</th><th>Brand</th><th>Price</th><th>Sales</th>
<th colspan="2">Operations</th></tr>
<%
	for(Info i : st){
%>
<tr>
	<td><%=i.getPid() %></td>
	<td><%=i.getPname() %></td>
	<td><%=i.getPbrand()%></td>
	<td><%=i.getPprice() %></td>
	<td><%=i.getPsales() %>
	<td><a href="Edit.jsp?name=edit&id=<%=i.getPid()%>">Edit</a></td>
	<td><a href="View.jsp?name=del&id=<%=i.getPid()%>">Delete</a></td>
</tr>
<%
	}
%>
</table>

<%
	String s=request.getParameter("name");
	if(s!=null && s.equals("del")){
		int uinfo=Integer.parseInt(request.getParameter("id"));
		int r=db.remove(uinfo);
		if(r>0){
			response.sendRedirect("View.jsp");			
		}
	}
%>
</body>
</html>










