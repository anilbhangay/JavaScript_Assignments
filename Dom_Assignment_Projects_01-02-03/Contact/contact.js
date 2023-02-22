

      // Added addEventListener to second form.
      let myform = document.querySelectorAll("form");
      myform[1].addEventListener("submit", (event)=> {
        event.preventDefault();

      //getting entered data
      let name = document.querySelector(".userName");
      let email = document.querySelector(".userEmail");
      let message = document.querySelector(".userMessage");
     
      //setting enterd data
      let setName = document.querySelector(".enterName");
      let setEmail = document.querySelector(".enterMail");
      let setMessage = document.querySelector(".enterMessage");

      setName.value = name.value;
      setEmail.value = email.value;
      setMessage.value = message.value;
  });


  