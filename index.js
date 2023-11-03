const user = {
  name: "",
  password: "",

  returnuser: () => {
    return this.name + this.password;
  },

  check: () => {
    if(user.name ==="sagar" && user.password === "ghimire")
    {

        alert("login successfull")
        
        // document.body.innerHTML += '<a href = "https://facebook.com"> visit your facebook profile </a>'
        window.location = "https://github.com/Arun1only1/batch2-3pm-js"
    }
    else{
        alert("login failed");
    }

   
   
  }     
};

login = () => {
  const nm = document.getElementById("username").value;
  const pw = document.getElementById("password").value;

  user.name = nm;
  user.password = pw;

  user.check();
};



