<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register</title>
<link href="Assets/reg.jpeg" rel="icon">
<link href="Styles.css" rel="stylesheet">
</head>
<body>
<a href="View.jsp">Show Products</a>
<br>
<h1 style="color:white;">Product Register Form</h1>
<br>
<form method="post">
<table>
<tr>
<td><label>Enter Product Name</label></td>
<td><input type="text" name="n" value='<%=request.getParameter("n")==null?"":request.getParameter("n") %>'/></td>
</tr>
<tr>
<td><label>Select Product Brand</label></td>
<td>
<select name="b">
	<option>Apple</option>
	<option>Google</option>
	<option>Motorola</option>
	<option>Oneplus</option>
	<option>Xiamoi</option>
	<option>Others</option>
</select>
</td>
</tr>
<tr>
<td><label>Enter Product Price</label></td>
<td><input type="number" name="p" step="any"/></td>
</tr>
<tr>
<td colspan="2" align="center">
<input type="submit" value="Register" name="btn" />
<input type="reset" value="Cancel"/>
</td>
</tr>
</table>
</form>
<%
	String btn=request.getParameter("btn");
	if(btn!=null && btn.equals("Register")){
		String pname=request.getParameter("n");
		String pbrand=request.getParameter("b");
		float pprice=Float.parseFloat(request.getParameter("p"));
%>		
	<jsp:useBean id="db" class="demoproject_Jsp.DBCode"></jsp:useBean>		
<%		
		int r=db.insert(pname, pbrand, pprice);
		out.print((r>0)?"Registered Product Sucessfully":"Failed");
	}
%>
</body>
</html>













