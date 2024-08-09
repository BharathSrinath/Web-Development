package servlets;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class JJ4_Part2_Gmail_DeleteUser
 */
public class JJ4_Part2_Gmail_DeleteUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ4_Part2_Gmail_DeleteUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
	    PrintWriter out = response.getWriter();
	    
	    String action = request.getParameter("action");
	    if ("deactivate".equals(action)) {
	        String email = request.getParameter("email");
	        
	        try {
	            DBCode db = new DBCode();
	            int deleteResult = db.deleteUser(email);
	            if (deleteResult > 0) {
	                RequestDispatcher rd = request.getRequestDispatcher("Bharath Srinath - JJ4_Part2_Gmail_Signup.html");
	                rd.forward(request, response);
	            } else {
	                out.println("<h3 style='color: red;'>Unable to delete user! Try later.</h3>");
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
	}

}
