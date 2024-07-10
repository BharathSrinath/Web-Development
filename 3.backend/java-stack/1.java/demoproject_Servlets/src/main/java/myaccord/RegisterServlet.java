package myaccord;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class RegisterServlet
 */
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter pw=response.getWriter();
		
		RequestDispatcher rd=request.getRequestDispatcher("Register.html");
		rd.include(request, response);
		
		try {
			String name=request.getParameter("n");
			float salary=Float.parseFloat(request.getParameter("s"));
			
			DBCode db=new DBCode();
			
			int res=db.add(name, salary);
			if(res>0) {
				pw.print("Registered");
			}
			else{
				pw.print("Failed");
			}
			
		}
		catch(Exception e) {	pw.print("Error "+e);		}
	}

}





















