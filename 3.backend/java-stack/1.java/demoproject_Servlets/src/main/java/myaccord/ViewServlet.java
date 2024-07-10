package myaccord;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Stack;

/**
 * Servlet implementation class ViewServlet
 */
public class ViewServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ViewServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw=response.getWriter();
		pw.print("<a href='Register.html'>Add Employee</a>");
		try {
			DBCode db=new DBCode();
			Stack<Data> st=db.view();
			
			pw.print("<h3>Registered Employee Data</h3>");
			pw.print("<table border='5' rules='all' cellspacing='20' cellpadding='10'>");
			pw.print("<tr><th>Employee Id</th><th>Employee Name</th>");
			pw.print("<th>Employee Salary</th><th colspan='2'>Operations</th></tr>");	
			
			for(Data i : st) {
				pw.print("<tr>");
				pw.print("<td>"+i.getId()+"</td>");
				pw.print("<td>"+i.getName()+"</td>");
				pw.print("<td>"+i.getSalary()+"</td>");
				pw.print("<td><a href='EditServlet?ch=view&did="+i.getId()+"'>View</a></td>");
				pw.print("<td><a href='RemoveServlet?ch=del&did="+i.getId()+"'>Remove</a></td>");
				pw.print("</tr>");
			}
			pw.print("</table>");
		}catch(Exception e) {
			pw.print("Error "+e);
		}
	}
}








