package servlets;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

public class JJ4_Part2_Gmail_Signup extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public JJ4_Part2_Gmail_Signup() {
        super();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    	response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        String firstname = request.getParameter("firstname");
        String lastname = request.getParameter("lastname");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        RequestDispatcher rd = null;

        try {
            DBCode db  = new DBCode();
        	int r = db.addUser(firstname, lastname, email, password);;
        	
        	if(r>0){
        		rd = request.getRequestDispatcher("Bharath Srinath - JJ4_Part2_Gmail_Signin.html");
                rd.forward(request, response);
        	} else if(r == -1) {
        		rd = request.getRequestDispatcher("Bharath Srinath - JJ4_Part2_Gmail_Signup.html");
            	rd.include(request, response);
        		out.println("<h3 style = 'color: red; text-align: center'>Email id already taken<h3>");
        	} else if(r == -2) {
        		rd = request.getRequestDispatcher("Bharath Srinath - JJ4_Part2_Gmail_Signup.html");
            	rd.include(request, response);
            	out.println("<h3 style = 'color: red; text-align: center'>Fields cannot be empty<h3>");
        	}
        } catch (Exception e) {
            e.printStackTrace(out); 
        }
    }
}
