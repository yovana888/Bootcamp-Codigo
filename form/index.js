const form = document.getElementById("myForm");
const inputs = document.querySelectorAll("input");
const textLogin = document.getElementById("textlogin");
const sectionLogin = document.getElementById("sectionlogin");
const btnLogout = document.getElementById("logout");

const dataInit = {
  email: "",
  password: "",
};

let data = dataInit;

const init = () => {
  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const value = e.target.value;
      const name = e.target.name;

      if (value !== null) {
        data = { ...data, [name]: value };
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sessionStorage.setItem("data", JSON.stringify(data));
  });

  verificarLogin();

};

function show(){
    sectionLogin.style.display="block";
    form.style.display="none";
}

function hide(){
    sectionLogin.style.display="none";
    form.style.display="block";
}

const verificarLogin = () => {
    const dataLogin = JSON.parse(sessionStorage.getItem("data"));
    
    if(dataLogin){
      textLogin.innerText = `Welcome ${dataLogin.email}` ;
      show();
    }else{
      textLogin.innerText="";
      hide();
    }
  
    btnLogout.addEventListener("click", ()=>{
      sessionStorage.clear();
      hide();
    })
}

document.addEventListener("DOMContentLoaded", init());
