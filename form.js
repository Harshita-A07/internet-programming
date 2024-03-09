<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
      label {
        display: inline-block;
        width: 150px;
        padding-top: 25px;
      }
      .form {
        height: 600px;
        width: 600px;
        margin-left: 60px;
        margin-top: 10px;
        padding: 100px;
      }
      .submit {
        padding-left: 90px;
      }
    </style>
  </head>
  <body style="background-color: lightgrey">
    <div class="form">
      <form onsubmit="return validate()" id="Form">
        <label for="iname">First name:</label>
        <input type="text" id="iname" class="ipt">
        <label for="FNAME" id="namerr" style="visibility: hidden; color: red; width: auto; border-radius: 2px;"></label>
        <br>

        <label for="lname">Last name:</label>
        <input type="text" id="lname" class="ipt">
        <label for="LNAME" id="lnamerr" style="visibility: hidden; color: red; width: auto; border-radius: 2px;"></label>
        <br>

        <label for="email">Email-id:</label>
        <input type="text" id="email" class="ipt">
        <label for="EMAIL" id="mailerr" style="visibility: hidden; color: red; width: auto; border-radius: 4px;"></label>
        <br>

        <label for="iphn">Phone no:</label>
        <input type="text" id="iphn" class="ipt">
        <label for="PHONE" id="phnerr" style="visibility: hidden; color: red; width: auto; border-radius: 4px;"></label>
        <br>

        <label for="pass">Passoword:</label>
        <input type="text" id="pass" class="ipt">
        <label for="PASS" id="pasaerr" style="visibility: hidden; color: red; width: auto; border-radius: 4px;"></label>
        <br>

        <label for="cpass">Confirm Passoword:</label>
        <input type="text" id="cpass" class="ipt">
        <label for="CPASS" id="Cpasaerr" style="visibility: hidden; color: red; width: auto; border-radius: 4px;"></label>
        <br>
        <br>

        <div id="submit"></div>
        <input input type="submit" class="ipt" id="sub">
      </form>
    </div>

    <script>
      function validate() {
        var fname = document.getElementById("iname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("iphn").value;
        var pass = document.getElementById("pass").value;
        var conpass = document.getElementById("cpass").value;
        var valid = false;
        var Name = /^[a-zA-Z]+ [a-zA-Z]+$/;
        let whitespace = new Set([" ", "\t", "\n"]);
        var phoneno = /^\d{10}$/;
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (Name.test(fname))) {
          document.getElementById("namerr").style.visibility = "visible";
          document.getElementById("namerr").innerHTML = "Must enter a proper name.";
          valid = false;
        }

        if (lname.match(whitespace)) {
          document.getElementById("lnamerr").style.visibility = "visible";
          document.getElementById("lnamerr").innerHTML = "Last name must not contain any spaces.";
          valid = false;
        }

        if (email.match(mailformat)) {
          return valid;
        } else {
          document.getElementById("mailerr").style.visibility = "visible";
          document.getElementById("mailerr").innerHTML = "Must enter a proper Email.";
          valid = false;
        }

        if (phone.match(phoneno)) {
          return valid;
        } else {
          document.getElementById("phnerr").style.visibility = "visible";
          document.getElementById("phnerr").innerHTML = "Enter valid phone number.";
          valid = false;
        }
        if(pass!=cpass){
          document.getElementById("Cpasaerr").style.visibility = "visible";
          document.getElementById("Cpasaerr").innerHTML = "password does not match.";
          valid = false;
        }

        return valid;
      }
    </script>
  </body>
</html>
