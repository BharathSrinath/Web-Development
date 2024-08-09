package servlets;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

public class JJ8_Part1i_DateTagHandler extends SimpleTagSupport{
	String dateFormat;

    public void setDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
    }

    @Override
    public void doTag() throws JspException, IOException {
        SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
        String formattedDate = sdf.format(new Date());
        getJspContext().getOut().print(formattedDate);
    }
}

//Date and Time Format Patterns
//Year
//
//y - Year (e.g., 2024)
//yy - Two-digit year (e.g., 24)
//yyyy - Four-digit year (e.g., 2024)
//Month
//
//M - Month (e.g., 7 for July)
//MM - Two-digit month (e.g., 07)
//MMM - Abbreviated month name (e.g., Jul)
//MMMM - Full month name (e.g., July)
//Day
//
//d - Day of the month (e.g., 9)
//dd - Two-digit day of the month (e.g., 09)
//E - Day of the week (e.g., Tue)
//EEE - Abbreviated day of the week (e.g., Tue)
//EEEE - Full name of the day of the week (e.g., Tuesday)
//Hour
//
//h - Hour (1-12) (e.g., 7)
//hh - Two-digit hour (1-12) (e.g., 07)
//H - Hour (0-23) (e.g., 19)
//HH - Two-digit hour (0-23) (e.g., 19)
//Minute
//
//m - Minute (e.g., 5)
//mm - Two-digit minute (e.g., 05)
//Second
//
//s - Second (e.g., 9)
//ss - Two-digit second (e.g., 09)
//AM/PM Marker
//
//a - AM/PM marker (e.g., AM or PM)
//Time Zone
//
//z - Time zone (e.g., PST)
//zzzz - Full time zone name (e.g., Pacific Standard Time)
//Z - Time zone offset from GMT (e.g., -0800)
//XXX - ISO 8601 time zone (e.g., -08:00)
//Examples
//yyyy-MM-dd - 2024-07-28
//MM/dd/yyyy - 07/28/2024
//dd-MMM-yyyy - 28-Jul-2024
//EEEE, MMMM dd, yyyy - Sunday, July 28, 2024
//hh:mm:ss a - 07:30:15 PM
//yyyy.MM.dd G 'at' hh:mm:ss z - 2024.07.28 AD at 07:30:15 PM PDT
//dd MMMM yyyy HH:mm:ss - 28 July 2024 19:30:15
