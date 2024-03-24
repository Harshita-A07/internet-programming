import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/random-quote")
public class RandomQuoteServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

   
    private String[] quotes = {
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Stay hungry, stay foolish. - Steve Jobs",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "The journey of a thousand miles begins with one step. - Lao Tzu"
    };

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       
        response.setContentType("text/html");

        
        String randomQuote = getRandomQuote();

        
        PrintWriter out = response.getWriter();
        out.println("<html><head><title>Random Quote</title></head><body>");
        out.println("<h1>Random Quote</h1>");
        out.println("<p>" + randomQuote + "</p>");
        out.println("</body></html>");
    }

    private String getRandomQuote() {
        Random rand = new Random();
        int index = rand.nextInt(quotes.length);
        return quotes[index];
    }
}
