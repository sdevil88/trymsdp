const user = {
  name: "",
  password: "",

  returnuser: () => {
    return this.name + this.password;
  },

  check: () => {  


    


    if(!(user.name == " " && user.password == " " && user.name == null && user.password==null)){
      
      if(user.name ==="sagar" && user.password === "ghimire")
    {

        alert("logged in")
        
        window.location = "https://github.com/Arun1only1/batch2-3pm-js"
    }
    else{
        alert("login failed");
    }

    }

    else 
    {
      alert("enter username or password correctly")
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



