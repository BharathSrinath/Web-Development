package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Servlet implementation class JJ6_Part1
 */
public class JJ6_Part1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JJ6_Part1() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out  = response.getWriter();
		
		HttpSession session = request.getSession();
		session.setMaxInactiveInterval(1800);
		
		SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM dd HH:mm:ss:SS z yyyy");
		Date cdate = new Date(session.getCreationTime());
        String creationDate = sdf.format(cdate);
        Date adate = new Date(session.getLastAccessedTime());
        String lastAccessedTime = sdf.format(adate);
		
		out.println("Session Id: "+session.getId()+"<br>");
		out.println("Session time out duration: "+session.getMaxInactiveInterval()+"<br>");
		out.println("Sesson started at: "+creationDate+"<br>");
		out.println("Last acess time: "+lastAccessedTime+"<br>");
		out.println();

		Integer count = (Integer) session.getAttribute("accessCount");
        if (count == null) {
            count = 0;
        }
        count++;
        session.setAttribute("accessCount", count); 
        
		out.println("<h3>Access Count</h3>");
		out.println("No of times the servlet is accessed: "+count+"<br>");
		out.println("<a href = 'Bharath Srinath - JJ6_Part1.html'>Move back</a>");
	}

}
