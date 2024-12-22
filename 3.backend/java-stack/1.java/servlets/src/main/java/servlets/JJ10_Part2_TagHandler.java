package servlets;

import java.io.IOException;
import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

public class JJ10_Part2_TagHandler extends SimpleTagSupport {

    Double radius, basicpay, pf, bonus, deductions, price, quantity;

    public void setRadius(Double radius) {
        this.radius = radius;
    }

    public void setBasicpay(Double basicpay) {
        this.basicpay = basicpay;
    }

    public void setPf(Double pf) {
        this.pf = pf;
    }

    public void setBonus(Double bonus) {
        this.bonus = bonus;
    }

    public void setDeductions(Double deductions) {
        this.deductions = deductions;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    @Override
    public void doTag() throws JspException, IOException {
        if (radius != null) {
            double area = Math.PI * radius * radius;
            getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style='color: red'>Area of Circle: " + area + "</h3>");
        } else if (basicpay != null && pf != null && bonus != null && deductions != null) {
            double netpay = basicpay + bonus - pf - deductions;
            getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style='color: red'>Net Pay: " + netpay + "</h3>");
        } else if (price != null && quantity != null) {
            double amount = price * quantity;
            getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style='color: red'>Amount to be Paid: " + amount + "</h3>");
        } else {
            getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style='color: red'>Invalid input.</h3>");
        }
    }
}
