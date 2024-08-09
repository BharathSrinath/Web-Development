<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.Stack" %>
<%@ page import ="servlets.DBCode"%>
<%@ page import = "servlets.JJ8_Part2_Employee_Data"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <h2>Search an employee</h2>
    <form action="JJ8_Part2_FetchEmployeeDetails.jsp">
        <label for="empid">Employee Id: </label>
        <input type="text" name="empid" id="empid">
        <input type="submit" name="submit" id="submit" value="submit">
    </form>
    
    <%
    String idStr = request.getParameter("empid");
    if (idStr != null) {
        if (idStr.isEmpty()) {
            out.println("<h4 style='color: red;'>Employee Id cannot be empty</h4>");
        } else {
            int id = 0;
            boolean validId = true;
            try {
                id = Integer.parseInt(idStr);
            } catch (NumberFormatException e) {
                validId = false;
                out.println("<h4 style='color: red;'>Invalid Format. Kindly Enter a valid number</h4>");
            }

            if (validId) {
                DBCode db = new DBCode();
                Stack<JJ8_Part2_Employee_Data> employee = null;
                try {
                    employee = db.selectEmployeeDetails(id);
                    if (employee == null || employee.isEmpty()) {
                        out.println("<h4 style='color: red;'>No employee with such id!</h4>");
                    } else {
                        session.setAttribute("employee", employee);
                        RequestDispatcher rd = request.getRequestDispatcher("JJ8_Part2_EmployeeDetails.jsp");
            			rd.forward(request, response);
                    }
                } catch (SQLException e) {
                    out.println("<h4 style='color: red;'>Couldn't fetch data!</h4>");
                }
            }
        }
    }
    %>
</body>
</html>
