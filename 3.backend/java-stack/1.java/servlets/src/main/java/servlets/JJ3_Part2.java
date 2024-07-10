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
 * Servlet implementation class JJ3_Part2
 */
public class JJ3_Part2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ3_Part2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		if(request.getParameter("user").equals("bharathsrinath") && 
				request.getParameter("password").equals("9677395396")) {
			RequestDispatcher rd = request.getRequestDispatcher("JJ3_Part2_valid");
			rd.forward(request,response);
		} else {
			RequestDispatcher rd = request.getRequestDispatcher("JJ3_Part2_invalid");
			rd.forward(request,response);
		}
		
	}

}
