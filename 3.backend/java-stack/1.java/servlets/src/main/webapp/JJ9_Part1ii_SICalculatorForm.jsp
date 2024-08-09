<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Interest Calculator</title>
</head>
<body>
    <h2>Interest Calculator</h2>
    <form action="JJ9_Part1ii_SICalculator.jsp" method="post">
        <label for="amount">Amount: </label>
        <input type="text" name="amount" id="amount">
        <br><br>
        <label for="period">Period: </label>
        <input type="text" name="period" id="period">
        <br><br>
        <label for="rateofinterest">Rate of Interest: </label>
        <input type="text" name="rateofinterest" id="rateofinterest">
        <br><br>
        <input type="submit" value="Calculate Interest">
    </form>
</body>
</html>
