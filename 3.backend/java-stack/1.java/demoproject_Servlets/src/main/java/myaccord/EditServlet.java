package myaccord;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Stack;

/**
 * Servlet implementation class EditServlet
 */
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw=response.getWriter();
		try {
			String ch=request.getParameter("ch");
			
			if(ch!=null && ch.equals("view")) {
				int id=Integer.parseInt(request.getParameter("did"));
				
				DBCode db=new DBCode();
				Stack<Data> st=db.view(id);
				for(Data i : st) {
					pw.print("<form action='MyEdit' method='get'>");
					pw.print("<table>");
					pw.print("<tr><td><label>Employee ID</label></td>");
					pw.print("<td><input type='number' name='sid' value='"+id+"'/></td></tr>");
					pw.print("<tr><td><label>Enter Name</label></td>");
					pw.print("<td><input type='text' name='n' value='"+i.getName()+"' disabled/></td></tr>");
					pw.print("<tr><td><label>Enter Salary</label></td>");
					pw.print("<td><input type='number' name='s' step='any' value='"+i.getSalary()+"'/></td></tr>");
					pw.print("<tr><td><input type='submit' value='Update'/></td>");
					pw.print("<td><input type='reset'/></td></tr>");
					pw.print("</table>");
					pw.print("</form>");
				}	
			}
		}catch(Exception e) {	e.printStackTrace();		}
	}

}










