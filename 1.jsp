<%@page contentType="text/html" pageEncoding="UTF-8" import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>JSP Page</title>
</head>
<body>
    <table border="1">
        <thead>
            <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
            <% 
                try {
                    Connection c = DriverManager.getConnection("jdbc:derby://localhost:1527/ip_8");
                    Statement st = c.createStatement();
                    ResultSet rs = st.executeQuery("SELECT * FROM student");

                    while (rs.next()) {
                        int id = rs.getInt("student_id");
                        String name = rs.getString("first_name");
                        String lname = rs.getString("last_name");
                        int age = rs.getInt("Age");
                        String dept = rs.getString("Department");

                        out.println("<tr>");
                        out.println("<td>" + id + "</td>");
                        out.println("<td>" + name + "</td>");
                        out.println("<td>" + lname + "</td>");
                        out.println("<td>" + age + "</td>");
                        out.println("<td>" + dept + "</td>");
                        out.println("</tr>");
                    }

                    // Close the result set for student table
                    rs.close();
                } catch (SQLException e) {
                    // Handle database errors
                    out.println("Error: " + e.getMessage());
                } 
            %>
        </tbody>
    </table>
    <br>
    <% 
        try {
            Connection c = DriverManager.getConnection("jdbc:derby://localhost:1527/ip_8");
            Statement st = c.createStatement();
            ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM student");
            rs.next();
            int totalStudents = rs.getInt(1);
            rs = st.executeQuery("SELECT AVG(Age) FROM student");
            rs.next();
            double avgAge = rs.getDouble(1);
            rs = st.executeQuery("SELECT Department, COUNT(*) AS Count FROM student GROUP BY Department ORDER BY Count DESC FETCH FIRST 1 ROWS ONLY");
            rs.next();
            String popularDept = rs.getString("Department");
            int popularDeptCount = rs.getInt("Count");
        %>
        <table border="1">
            <tr>
                <th>Total number of students</th>
                <td><%= totalStudents %></td>
            </tr>
            <tr>
                <th>Average age of all students</th>
                <td><%= avgAge %></td>
            </tr>
            <tr>
                <th>Department with the highest number of students</th>
                <td><%= popularDept %> (Count: <%= popularDeptCount %>)</td>
            </tr>
        </table>
    <% } catch (SQLException e) { %>
        <p>Error: <%= e.getMessage() %></p>
    <% } %>
</body>
</html>
