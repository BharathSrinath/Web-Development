<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="accordtasktags" uri="/WEB-INF/accord_tasks_taglib.tld" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h2>Current Date</h2>
    <p>
        Current date in specified format:
        <accordtasktags:date dateFormat="MMMM-dd-yyyy"/>
    </p>
    
    <h2>Student Details</h2>
    <form method="get">
        <label for="studentId">Enter Student ID:</label>
        <input type="text" name="studentId" id="studentId">
        <input type="submit" value="Submit">

    </form>
    
 	<accordtasktags:connection var="conn"/>
    
    <%
        String studentIdstr = request.getParameter("studentId");
        if (studentIdstr != null && !studentIdstr.isEmpty()) {
            int studentId = Integer.parseInt(studentIdstr);
    %>
            <accordtasktags:student studentId="<%= studentId %>" connection="conn"/>
    <%
        } 
    %>
</body>
</html>