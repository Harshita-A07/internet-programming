import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String str =request.getParameter("fname");
            out.println("Employe name:"+str);
            out.println("<br>");
            String empid =request.getParameter("empid");
            out.println("Employe id :"+empid);
                        out.println("<br>");

            String pay =request.getParameter("pay");
            out.println("Basic Pay:"+pay);
                        out.println("<br>");

            String hra =request.getParameter("hra");
            out.println("Employe name;"+hra);
             double da = Double.(pay)/2;
            out.println("DA:"+da);
           out.close();
        }
    }



    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

       @Override
    public String getServletInfo() {
        return "Short description";
    }
}
