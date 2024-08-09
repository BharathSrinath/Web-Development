package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class JJ5_Part1
 */
public class JJ5_Part1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ5_Part1() {
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
		
		String planguage = request.getParameter("technology");
		try {
			DBCode db = new DBCode();
			String description = db.selectDescription(planguage);
			out.println("<h1>YOU SELECTED: "+planguage+"</h1>");
			out.println();
			out.println(planguage+" is a "+ description);
		} catch (Exception e) {
			System.out.println("Error: "+e);
			out.println("Sorry coudn't fetch details");
		}
	}

}
