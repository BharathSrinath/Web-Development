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
import java.sql.SQLException;

/**
 * Servlet implementation class JJ6_Part2_Update_Password
 */
public class JJ6_Part2_Update_Password extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ6_Part2_Update_Password() {
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
		
		HttpSession session = request.getSession();
		String email = (String) session.getAttribute("email");
		String password = (String) session.getAttribute("password");
		
		String currentPassword = request.getParameter("currentpassword");
		String newPassword = request.getParameter("newpassword");
		String cnewPassword = request.getParameter("cnewpassword");
		
		RequestDispatcher rd = null;
		
		if(newPassword == "" || cnewPassword == "" || currentPassword == "") {
			rd = request.getRequestDispatcher("Bharath Srinath - JJ6_Part2_update_password.html") ;
			rd.include(request, response);
			out.println("<h3 style = 'color: red;'>Passwords cannot be empty!</h3>");
		} else if(!password.equals(currentPassword)) {
			rd = request.getRequestDispatcher("Bharath Srinath - JJ6_Part2_update_password.html") ;
			rd.include(request, response);
			out.println("<h3 style = 'color: red;'>Wrong Current Password!</h3>");
		} else if(!newPassword.equals(cnewPassword)) {
			rd = request.getRequestDispatcher("Bharath Srinath - JJ6_Part2_update_password.html") ;
			rd.include(request, response);
			out.println("<h3 style = 'color: red;'>Passwords do not match!</h3>");
		} else {
			try {
				DBCode db = new DBCode();
				int r = db.updatePassword(email, newPassword);
				if(r > 0) {
					rd = request.getRequestDispatcher("Bharath Srinath - JJ6_Part2.html") ;
					rd.forward(request, response);
				} else {
					out.println("<h3 style = 'color: red;>Password updation unsuccessful!<h3>");
				}
			} catch (Exception e) {
				e.printStackTrace();
				
			}
		}

	}

}
