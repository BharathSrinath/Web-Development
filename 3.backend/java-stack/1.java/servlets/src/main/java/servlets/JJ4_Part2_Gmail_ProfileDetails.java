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
import java.util.Stack;

/**
 * Servlet implementation class JJ4_Part2_Gmail_ProfileDetails
 */
public class JJ4_Part2_Gmail_ProfileDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ4_Part2_Gmail_ProfileDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		
		try {
			DBCode db = new DBCode();
			Stack<JJ4_Part2_Gmail_Data> compareUser = db.compare(email, password);
			if(compareUser == null) { 
				RequestDispatcher rd = request.getRequestDispatcher("Bharath Srinath - JJ4_Part2_Gmail_Signin.html") ;
				rd.include(request, response);
				out.println("<h3 style = 'color: red; text-align: center'>Invalid Credentials<h3>");
			} else {
				for(JJ4_Part2_Gmail_Data data : compareUser) {
					out.println("<h3>First Name: <i>"+data.getFirstname()+"</i></h3>");
					out.println("<h3>Last Name: <i>"+data.getLastname()+"</i></h3>");
					out.println("<h3>Email: <i>"+data.getEmail()+"</i></h3>");
					out.println();
					out.println("<a href = 'Bharath Srinath - JJ4_Part2_Gmail_Signin.html'><i>Logout</i></a>");
					out.println("<form action='JJ4_Part2_Gmail_DeleteUser' method='post'>");
	                out.println("<input type='hidden' name='email' value=" + data.getEmail() + "><br>");
	                out.println("<button type='submit' name='action' value='deactivate'>Deactivate</button>");
	                out.println("</form>");
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
