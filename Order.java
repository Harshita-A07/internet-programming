order.java
package newpackage;

import java.util.ArrayList;
import java.util.List;
public class order {
    private int orderid;
    private String cust_name;
    private String order_date;
    

    public order(int orderid, String cust_name, String order_date) {
        this.orderid = orderid;
        this.cust_name = cust_name;
        this.order_date = order_date;
        
    }

    public int getorderid() {
        return orderid;
    }

    public void setorderid(String name) {
        this.order_date = order_date;
    }

    public String getcustname() {
        return cust_name;
    }

    public void setcustname(String email) {
        this.cust_name = cust_name;
    }

    public String getorderdate() {
        return order_date;
    }

    public void setorderdate(String phone) {
        this.order_date = order_date;
    }

      
}
