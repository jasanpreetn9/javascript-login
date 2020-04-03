function check(form) {
    if(form.userid.value == "test" && form.pswrd.value == "test")
    {
      document.getElementById("page").style.display = "block";
      document.getElementById("login").style.display = "none";
    }
    else
    {
      alert("wrong Username/Password")
    }
  }
  