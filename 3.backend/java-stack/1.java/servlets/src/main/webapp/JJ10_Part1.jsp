<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="accordtasktags" uri="/WEB-INF/accord_tasks_taglib.tld" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>Custom Tag Example</title>
</head>
<body>
    <h2>Welcome Message</h2>
    <form action="JJ10_Part1.jsp" method="post">
        <label for="username">Username: </label>
        <input type="text" name="username" id="username" required>
        <input type="submit" value="Submit">
    </form>

    <h2>Sum of Two Integers</h2>
    <form action="JJ10_Part1.jsp" method="post">
        <label for="num1">Number 1: </label>
        <input type="number" name="num1" id="num1" required>
        <label for="num2">Number 2: </label>
        <input type="number" name="num2" id="num2" required>
        <input type="submit" value="Calculate Sum">
    </form>

    <h2>Marks Calculation</h2>
    <form action="JJ10_Part1.jsp" method="post">
        <label for="subject1">Sub 1: </label>
        <input type="number" name="subject1" id="subject1" required>
        <label for="subject2">Sub 2: </label>
        <input type="number" name="subject2" id="subject2" required>
        <label for="subject3">Sub 3: </label>
        <input type="number" name="subject3" id="subject3" required>
        <label for="subject4">Sub 4: </label>
        <input type="number" name="subject4" id="subject4" required>
        <label for="subject5">Sub 5: </label>
        <input type="number" name="subject5" id="subject5" required>
        <input type="submit" value="Calculate Marks">
    </form>

    <%
        String username = request.getParameter("username");
        String num1Str = request.getParameter("num1");
        String num2Str = request.getParameter("num2");
        String subject1Str = request.getParameter("subject1");
        String subject2Str = request.getParameter("subject2");
        String subject3Str = request.getParameter("subject3");
        String subject4Str = request.getParameter("subject4");
        String subject5Str = request.getParameter("subject5");

        if (username != null && !username.isEmpty()) {
    %>
            <accordtasktags:welcome username="<%= username %>"/>
    <%
        } else if (num1Str != null && num2Str != null) {
            int num1 = Integer.parseInt(num1Str);
            int num2 = Integer.parseInt(num2Str);
    %>
            <accordtasktags:sum num1="<%= num1 %>" num2="<%= num2 %>"/>
    <%
        } else if (subject1Str != null && subject2Str != null && subject3Str != null && subject4Str != null && subject5Str != null) {
            int subject1 = Integer.parseInt(subject1Str);
            int subject2 = Integer.parseInt(subject2Str);
            int subject3 = Integer.parseInt(subject3Str);
            int subject4 = Integer.parseInt(subject4Str);
            int subject5 = Integer.parseInt(subject5Str);
    %>
            <accordtasktags:marks subject1="<%= subject1 %>" subject2="<%= subject2 %>" subject3="<%= subject3 %>" subject4="<%= subject4 %>" subject5="<%= subject5 %>"/>
    <%
        }
    %>
</body>
</html>
