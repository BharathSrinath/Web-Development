package servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

public class JJ8_Part1ii_StudentTagHandler extends SimpleTagSupport{
	int studentId;
	String connection;

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
    
    public void setConnection(String connection) {
        this.connection = connection;
    }

    @Override
    public void doTag() throws JspException, IOException {
       
    	Connection conn = (Connection) getJspContext().getAttribute(connection);

        try {
            String q = "SELECT name, course, mobile, mailid FROM student WHERE sid = ?";
            PreparedStatement pstmt = conn.prepareStatement(q);
            pstmt.setInt(1, studentId);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                String name = rs.getString("name");
                String course = rs.getString("course");
                String mobile = rs.getString("mobile");
                String mailid = rs.getString("mailid");

                getJspContext().getOut().print("<p>Student ID: " + studentId + "</p>");
                getJspContext().getOut().print("<p>Name: " + name + "</p>");
                getJspContext().getOut().print("<p>Course: " + course + "</p>");
                getJspContext().getOut().print("<p>Mobile: " + mobile + "</p>");
                getJspContext().getOut().print("<p>Email: " + mailid + "</p>");
            } else {
                getJspContext().getOut().print("<p>Student with ID " + studentId + " not found.</p>");
            }
            rs.close();
        } catch (Exception e) {
            throw new JspException("Error", e);
        }
    }
}
