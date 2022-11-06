function getvalues() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var cno = document.getElementById("cno");
    var pass = document.getElementById("pass");
    var cpass = document.getElementById("cpass");
    fname = fname.value;
    lname = lname.value;
    email = email.value;
    cno = cno.value;
    pass = pass.value;
    cpass = cpass.value;

}

function phonenumber(inputtxt)
{
  var phoneno = /^\d{11}$/;
  if(inputtxt.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }

function submit() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var cno = document.getElementById("cno");
    var pass = document.getElementById("pass");
    var cpass = document.getElementById("cpass");

    var fval = fname.value;
    var lval = lname.value;
    var eval = email.value;
    var cnoVal = cno.value;
    var pVal = pass.value;
    var cpVal = cpass.value;

    console.log(fval);

    var f = document.getElementById("f");
    var l = document.getElementById("l");
    var e = document.getElementById("e");
    var c = document.getElementById("c");
    var p = document.getElementById("p");
    var cp = document.getElementById("cp");

    f = f.textContent;
    l = l.textContent;
    e = e.textContent;
    c = c.textContent;
    p = p.textContent;
    cp = cp.textContent;

    if (fval == "") {
        alert(f + " is required field")
    } else if (lval == "") {
        alert(l + " is required field")
    } else if (eval == "") {
        alert(e + " is required field")
    } else if (cnoVal == "") {
        alert(c + " is required field")
    } else if (pVal == "") {
        alert(p + " is required field")
    } else if (cpVal == "") {
        alert(cp + " is required field")
    } else if (fval, lval, eval, cnoVal, pVal, cpVal !== "") {
        
      
        var uemail=eval.toLowerCase().match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (uemail) {
        document.write(" <center><h1>  <b> FORM WITH JS VALIDATION DATA </b> </h1></center></br>")
        document.write(" <center><b>" +f + "</b> " + fval + " </center></br>");
        document.write(" <center><b>" +l + "</b> " + lval + " </center></br>");
        document.write(" <center><b>" +e + "</b> " + eval + " </center></br>");
        document.write(" <center><b>" +c + "</b> " + cnoVal + " </center></br>");
        document.write(" <center><b>" +p + "</b> " + pVal + " </center></br>");
        document.write(" <center><b>" +cp + "</b> " + cpVal + " </center></br>");
        }
        else{
            alert("Invalid email")
        }
    }



}
