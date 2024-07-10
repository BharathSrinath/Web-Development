package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class JJ3_Part1
 */
public class JJ3_Part1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ3_Part1() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<h1>Following data received Successfully</h1>");
		out.println("<h2>Email: "+request.getParameter("email")+"</h2>");
		out.println("<h2>User Name: "+request.getParameter("name")+"</h2>");
		out.println("<h2>Password: "+request.getParameter("password")+"</h2>");
		out.println("<h2>Gender: "+request.getParameter("gender")+"</h2>");
		String[] courses = request.getParameterValues("course");
		out.print("<h2>Courses: "+"</h2>");
		out.print("<h2>Courses: ");
	    if (courses != null) {
	        for (int i = 0; i < courses.length; i++) {
	            out.print(courses[i]);
	            if (i < courses.length - 1) {
	                out.print(", ");
	            }
	        }
	    } else {
	        out.print("None");
	    }
	    out.print("</h2>");
	}

}
