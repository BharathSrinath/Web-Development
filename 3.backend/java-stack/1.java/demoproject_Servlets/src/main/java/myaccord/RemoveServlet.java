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
 * Servlet implementation class RemoveServlet
 */
public class RemoveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RemoveServlet() {
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
			
			if(ch!=null && ch.equals("del")) {
				int id=Integer.parseInt(request.getParameter("did"));
				
				DBCode db=new DBCode();
				
				int res=db.remove(id);
				if(res>0) {
					RequestDispatcher rd=request.getRequestDispatcher("ViewServlet");
					rd.forward(request, response);
				}
				else{
					pw.print("Failed");
				}
			}
		}catch(Exception e) {	pw.print("Error "+e);		}
	}
}

