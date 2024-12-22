<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Interest Calculation Result</title>
</head>
<body>
    <h2>Interest Calculation Result</h2>

    <%
    	RequestDispatcher rd = null;
        try {
            String amountStr = request.getParameter("amount");
            String periodStr = request.getParameter("period");
            String rateofinterestStr = request.getParameter("rateofinterest");

            if (amountStr != null && !amountStr.isEmpty() &&
                periodStr != null && !periodStr.isEmpty() &&
                rateofinterestStr != null && !rateofinterestStr.isEmpty()) {

                double amount = Double.parseDouble(amountStr);
                double period = Double.parseDouble(periodStr);
                double rateofinterest = Double.parseDouble(rateofinterestStr);

                double interest = (amount * period * rateofinterest) / 100;
                double maturityAmount = amount + interest;
                rd = request.getRequestDispatcher("JJ9_Part1ii_SICalculatorForm.jsp");
            	rd.include(request,response);
    %>
                <p>Principal Amount: <%= amount %></p>
                <p>Period of Deposit: <%= period %> years</p>
                <p>Rate of Interest: <%= rateofinterest %> % per annum</p>
                <p>Interest: <%= interest %></p>
                <p>Total Maturity Amount: <%= maturityAmount %></p>
    <%
            } else {
            	rd = request.getRequestDispatcher("JJ9_Part1ii_SICalculatorForm.jsp");
            	rd.include(request,response);
    %>
                <p style="color: red;">Inputs cannot be empty!</p>
    <%
            }
        } catch (NumberFormatException e) {
        	rd = request.getRequestDispatcher("JJ9_Part1ii_SICalculatorForm.jsp");
        	rd.include(request,response);
    %>
            <p style="color: red;">Invalid input. Please enter valid numbers.</p>
    <%
        } catch (Exception e) {
        	rd = request.getRequestDispatcher("JJ9_Part1ii_SICalculatorForm.jsp");
        	rd.include(request,response);
    %>
            <p style="color: red;">An error occurred: <%= e.getMessage() %></p>
    <%
        }
    %>
    
</body>
</html>
