package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class JJ4_Part1
 */
public class JJ4_Part1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ4_Part1() {
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
		
		try {
			String firstName = request.getParameter("firstname");
			String lastName = request.getParameter("lastname");
			String userName = request.getParameter("username");
			String password = request.getParameter("password");
			String address = request.getParameter("address");
			String contact = request.getParameter("contact");
			
			JJ4_Part1_database database = new JJ4_Part1_database();
			
			int result = database.add(firstName, lastName, userName, password, address, contact);
			
			if(result>0) {
				out .print("<h2>Employee Successfully Registered!</h2>");
			}
			else{
				out .print("Employee Registration Failed");
			}
		} catch(Exception e) {	
			out.print("Error "+e);		
		}
		
	}

}
