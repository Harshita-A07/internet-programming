order.jsp
<%@page import="java.util.*"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="newpackage.order" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Order Information</title>
    <style>
        body{
            margin-left: 500px;
        }
    </style>
</head>
<body>
    <h1>order Information</h1>
    <table border="1">
        <thead>
            <tr>
                <th>order id</th>
                <th>Customer name</th>
                <th>Order date</th>
               
            </tr>
        </thead>
        <tbody>
     <% 
            ArrayList<order> al = new ArrayList<order>();
             al.add(new order(001, "taehyung", "29/12/2022"));
             al.add(new order(002, "jin", "11/12/2021"));
               al.add(new order(003, "kook", "9/2/2022"));
             al.add(new order(004, "hoseok", "1/10/2020"));
               al.add(new order(005, "suga", "20/2/2021"));
             al.add(new order(006, "rm", "11/12/2021"));
             
             pageContext.setAttribute("ord", al);

    %>   
     
            <c:forEach var="ord" items="${pageScope.ord}" varStatus="status">
                <tr>
                    <td>${ord.getorderid()}</td>
                    <td>${ord.getcustname()}</td>
                    <td>${ord.getorderdate()}</td>
                    
                </tr>
            </c:forEach>
        </tbody>
    </table>
    
    
    <h1>Sorted Order Information</h1>
    <table border="1">
        <thead>
            <tr>
                <th>order id</th>
                <th>Customer name</th>
                <th>Order date</th>
               
            </tr>
        </thead>
        <tbody>
            <% 
          
             Collections.sort(al,new Comparator<order>(){
                 public int compare(order o1,order o2){
              
                     return o1.getorderdate().compareTo(o2.getorderdate());
                             }
                             });
                                      
             
             pageContext.setAttribute("ord1", al);
    %>      

            
            
            <c:forEach var="ord1" items="${pageScope.ord1}" varStatus="status">
                <tr>
                    <td>${ord1.getorderid()}</td>
                    <td>${ord1.getcustname()}</td>
                    <td>${ord1.getorderdate()}</td>
                    
                </tr>
            </c:forEach>
        </tbody>
    </table>

</body>
</html>
