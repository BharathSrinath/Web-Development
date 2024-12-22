<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.Stack" %>
<%@ page import="servlets.JJ8_Part2_Employee_Data" %>
<!DOCTYPE html>
<html>
<head>
    <title>Insert title here</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black; 
        }
        th, td {
            padding: 8px;
            text-align: left; 
        }
    </style>
</head>
<body>
	<%
	Stack<JJ8_Part2_Employee_Data> employee = (Stack<JJ8_Part2_Employee_Data>) session.getAttribute("employee");
	%>
    <h2>Employee Details</h2>
    <%
        if (employee != null) {
    		for (JJ8_Part2_Employee_Data empData : employee){
   	%>
 		<table>
	        <tr>
	            <th>Employee Id</th>
	            <td><%= empData.getId() %></td>
	        </tr>
	        <tr>
	            <th>Employee Name</th>
	            <td><%= empData.getName() %></td>
	        </tr>
	        <tr>
	            <th>Department</th>
	            <td><%= empData.getDepartment() %></td>
	        </tr>
	        <tr>
	            <th>Designation</th>
	            <td><%= empData.getDesignation() %></td>
	        </tr>
	        <tr>
	            <th>Salary</th>
	            <td><%= empData.getSalary() %></td>
	        </tr>
    	</table>
        
    <%
			}
        } else {
    %>
        	<p style="color: red;">No employee details available.</p>
    <%
       	}
    %>
</body>
</html>