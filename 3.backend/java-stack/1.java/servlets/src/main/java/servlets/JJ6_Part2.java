package servlets;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Stack;

/**
 * Servlet implementation class JJ6_Part2
 */
public class JJ6_Part2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ6_Part2() {
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
		HttpSession session = request.getSession();
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		session.setAttribute("email", email);
		session.setAttribute("password", password);
		
		try {
			DBCode db = new DBCode();
			Stack<JJ4_Part2_Gmail_Data> compareUser = db.compare(email, password);
			if(compareUser == null) { 
				RequestDispatcher rd = request.getRequestDispatcher("Bharath Srinath - JJ6_Part2.html") ;
				rd.include(request, response);
				out.println("<h3 style = 'color: red;'>Invalid Credentials<h3>");
			} else {
				out.println("<h2>Welcome to Inbox</h2>");
				out.println();
				out.println("<a href = 'Bharath Srinath - JJ6_Part2_update_password.html'>Change Password</a>");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
