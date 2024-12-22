<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit</title>
<link href="Assets/reg.jpeg" rel="icon">
<link href="Styles.css" rel="stylesheet">
</head>
<%@page import="java.util.Stack" %>
<%@page import="demoproject_Jsp.Info" %>
<body>
<jsp:useBean id="db" class="demoproject_Jsp.DBCode"></jsp:useBean>	
<%
	String s=request.getParameter("name");
	if(s!=null && s.equals("edit")){
		int uinfo=Integer.parseInt(request.getParameter("id"));
		Stack<Info> st=db.view(uinfo);				
		for(Info i : st){			
%>	
<a href="View.jsp">Back</a>
<br>
<h1 style="color:white;">Update Product Data</h1>
<br>		
<form method="post">
<table>
<tr>
<td><label>Enter Product ID</label></td>
<td><input type="number" name="pid" value='<%=uinfo %>'/></td>
</tr>
<tr>
<td><label>Enter Product Name</label></td>
<td><input type="text" name="n" value='<%=i.getPname()%>'/></td>
</tr>
<tr>
<td><label>Select Product Brand</label></td>
<td>
<select name="b" disabled>
	<option <%=i.getPbrand().equals("Apple")?"selected":null %>>Apple</option>
	<option <%=i.getPbrand().equals("Google")?"selected":null %>>Google</option>
	<option <%=i.getPbrand().equals("Motorola")?"selected":null %>>Motorola</option>
	<option <%=i.getPbrand().equals("Oneplus")?"selected":null %>>Oneplus</option>
	<option <%=i.getPbrand().equals("Xiamoi")?"selected":null %>>Xiamoi</option>
	<option <%=i.getPbrand().equals("Others")?"selected":null %>>Others</option>
</select>
</td>
</tr>
<tr>
<td><label>Enter Product Price</label></td>
<td><input type="number" name="p" step="any" value="<%=i.getPprice()%>"/></td>
</tr>
<tr>
<td colspan="2" align="center">
<input type="submit" value="Update" name="btn" />
<input type="reset" value="Cancel"/>
</td>
</tr>
</table>
</form>	
<%	
		}
	}
%>	
<%
	String btn=request.getParameter("btn");
	if(btn!=null && btn.equals("Update")){
		int pid=Integer.parseInt(request.getParameter("pid"));
		String pname=request.getParameter("n");
		float pprice=Float.parseFloat(request.getParameter("p"));		
		int r=db.update(pid, pname, pprice);	
		if(r>0){
			 	response.sendRedirect("View.jsp");		
		}
	}
%>
</body>
</html>

















