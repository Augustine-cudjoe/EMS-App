var newEmployee=document.getElementById("addNew");
var close_button =document.getElementById("close_button");
var date = document.getElementById("date");
var email =document.getElementById("email");
var tel =document.getElementById("tel");
var text =document.getElementById("text");
var employee=document.getElementById("addemploy");
newEmployee.addEventListener("click",employ);

date.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        employ();
    }
});
email.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        employ();
    }
});
tel.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        employ();
    }
});
text.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        employ();
    }
});

function employ(e){
     const tel_value=tel.value;
     const text_value=text.value;
     const date_value=date.value;
     const email_value=email.value;
     // create a div to hold the form
     const item=document.createElement("div");
     item.classList.add("item");
     // create another div to hold the input fields
     const form =document.createElement("div");
     form.classList.add("form");
     //form is a child of item
     item.appendChild(form);
     //create element for the inputfields
     const date_input =document.createElement("input");
       date_input.classList.add("date");
       date_input.type="date";
       date_input.value=date_value;

       const email_input =document.createElement("input");
           email_input.classList.add(email);
           email_input.type="email";
           email_input.value=email_value;

           const tel_input =document.createElement("input");
           tel_input.classList.add(email);
           tel_input.type="tel";
           tel_input.value=tel_value;

           const text_input =document.createElement("input");
           text_input.classList.add(email);
           text_input.type="text";
           text_input.value=text_value;

         form.appendChild(date_input);  
         form.appendChild(tel_input) ; 
         form.appendChild(email_input);  
         form.appendChild(text_input) ; 

         //create a div to hold the add new employee and close button

         const employee_close=document.createElement("div");
          employee_close.classList.add("button");

          //create an inputfield for add new employee
          const employee_button =document.createElement("button");
          employee_button.classList.add("employee_button","btn","btn-success" ,"btn-lg");
          employee_button.type="button";
          edit_button.innerText="Add new employee";
      
          const close_button=document.createElement("button");
          close_button.classList.add("close","btn","btn-danger","btn-lg");
          close_button.type="button";
          close_button.innerText="Close";
          
          employee_close.appendChild(employee_button);
          employee_close.appendChild(close_button);

          item.appendChild(employee_close);
          addemploy.appendChild(item);

}