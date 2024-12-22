<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Simple Calculator</h1>
    <form action="JJ7_Part2_Calculator.jsp">
        <label for="num1">Number 1:</label>
        <input type="text" id="num1" name="num1">
        <br><br>
        <label for="num2">Number 2:</label>
        <input type="text" id="num2" name="num2">
        <br><br>
        <label for="action">Action:</label>
        <select id="action" name="action">
            <option value="">Select an action</option>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
        </select>
        <br><br>
        <input type="submit" value="Calculate">
    </form>
    
    <h3>Calculation Result</h3>
    <%
        String n1 = request.getParameter("num1");
        String n2= request.getParameter("num2");
        String action = request.getParameter("action");
        
        double num1 = 0, num2 = 0;
        boolean validInput = true;
        String errorMessage = "";

        if (n1 != null && !n1.trim().isEmpty() && n2 != null && !n2.trim().isEmpty()) {
            try {
                num1 = Double.parseDouble(n1);
                num2 = Double.parseDouble(n2);
            } catch (NumberFormatException e) {
                validInput = false;
                errorMessage = "Invalid! Please enter valid numbers.";
            }
        } else {
            validInput = false;
            errorMessage = "Both numbers must be provided.";
        }

        if (action == null || action.trim().isEmpty()) {
            validInput = false;
            errorMessage += " Action must be selected.";
        }

        if (validInput) {
            double result = 0;
            boolean divisionByZero = false;

            switch (action) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        divisionByZero = true;
                    }
                    break;
                default:
                    errorMessage = "Invalid action selected.";
            }

            if (divisionByZero) {
                out.println("<p style='color: red;'>Cannot divide by zero.</p>");
            } else {
                if (errorMessage.isEmpty()) {
                    out.println("<p>You selected " + action + ".</p>");
                    out.println("Result is " + result);
                } else {
                    out.println("<p style='color: red;'>" + errorMessage + "</p>");
                }
            }
        } else {
            out.println("<p style='color: red;'>" + errorMessage + "</p>");
        }
    %>
</body>
</html>