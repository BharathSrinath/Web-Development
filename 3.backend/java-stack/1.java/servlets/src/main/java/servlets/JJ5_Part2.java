package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class JJ5_Part2
 */
public class JJ5_Part2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ5_Part2() {
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
		
		String name = request.getParameter("name");
		String mobile = request.getParameter("mobile");
		String email = request.getParameter("email");
		String[] languages = request.getParameterValues("languages");
		String qualification = request.getParameter("qualification");
		
		out.println("<h2>Details</h2>");
		out.println("Name: "+name+"<br>");
		out.println("Mobile No: "+mobile+"<br>");
		out.println("Email Id: "+email+"<br>");
		out.println("Languages Known: "+languages.length+"<br>");
		for(String language: languages) {
			out.println(language+"<br>");
		}
		out.println("Qualification: "+qualification);
		
		out.println("<h3>Request Details</h3>");
		out.println("Request Type: "+request.getMethod()+"<br>");
		out.println("Protocol Type: "+request.getProtocol()+"<br>");
		out.println("Request Port: "+request.getLocalPort()+"<br>");
		
	}

}
