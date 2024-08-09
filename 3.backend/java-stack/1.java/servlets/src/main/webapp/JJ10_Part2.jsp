<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="accordtasktags" uri="/WEB-INF/accord_tasks_taglib.tld" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>Custom Tag Example Part 2</title>
</head>
<body>
    <h2>Area of Circle</h2>
    <form action="JJ10_Part2.jsp" method="post">
        <label for="radius">Radius: </label>
        <input type="number" name="radius" id="radius" step="0.01" required>
        <input type="submit" value="Calculate Area">
    </form>

    <h2>Net Pay Calculation</h2>
    <form action="JJ10_Part2.jsp" method="post">
        <label for="basicpay">Basic Pay: </label>
        <input type="number" name="basicpay" id="basicpay" step="0.01" required>
        <label for="pf">PF: </label>
        <input type="number" name="pf" id="pf" step="0.01" required>
        <label for="bonus">Bonus: </label>
        <input type="number" name="bonus" id="bonus" step="0.01" required>
        <label for="deductions">Deductions: </label>
        <input type="number" name="deductions" id="deductions" step="0.01" required>
        <input type="submit" value="Calculate Net Pay">
    </form>

    <h2>Amount to be Paid</h2>
    <form action="JJ10_Part2.jsp" method="post">
        <label for="price">Price: </label>
        <input type="number" name="price" id="price" step="0.01" required>
        <label for="quantity">Quantity: </label>
        <input type="number" name="quantity" id="quantity" step="0.01" required>
        <input type="submit" value="Calculate Amount">
    </form>

    <%
        String radiusStr = request.getParameter("radius");
        String basicpayStr = request.getParameter("basicpay");
        String pfStr = request.getParameter("pf");
        String bonusStr = request.getParameter("bonus");
        String deductionsStr = request.getParameter("deductions");
        String priceStr = request.getParameter("price");
        String quantityStr = request.getParameter("quantity");

        if (radiusStr != null && !radiusStr.isEmpty()) {
            double radius = Double.parseDouble(radiusStr);
    %>
            <accordtasktags:area radius="<%= radius %>"/>
    <%
        } else if (basicpayStr != null && pfStr != null && bonusStr != null && deductionsStr != null) {
            double basicpay = Double.parseDouble(basicpayStr);
            double pf = Double.parseDouble(pfStr);
            double bonus = Double.parseDouble(bonusStr);
            double deductions = Double.parseDouble(deductionsStr);
    %>
            <accordtasktags:netpay basicpay="<%= basicpay %>" pf="<%= pf %>" bonus="<%= bonus %>" deductions="<%= deductions %>"/>
    <%
        } else if (priceStr != null && quantityStr != null) {
            double price = Double.parseDouble(priceStr);
            double quantity = Double.parseDouble(quantityStr);
    %>
            <accordtasktags:amount price="<%= price %>" quantity="<%= quantity %>"/>
    <%
        }
    %>
</body>
</html>
