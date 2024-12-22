package servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

public class ConnectionTagHandler extends SimpleTagSupport{
	String var;

    public void setVar(String var) {
        this.var = var;
    }

    @Override
    public void doTag() throws JspException, IOException {
        String url = "jdbc:mysql://localhost:3306/javademodb";
        String user = "root";
        String password = "1234";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, user, password);
            getJspContext().setAttribute(var, conn);
        } catch (Exception e) {
            throw new JspException("Error establishing connection", e);
        }
    }
}
