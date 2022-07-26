const usuarios = [
    {
      usuario: "damian",
      email: "damian@damian.com",
      password: "1234",
      saldo: 480,
    },
    {
      usuario:'angel',
      email: "angel@angel.com",
      password: "5678",
      saldo:300,
    },
    {
        usuario: 'oscar',
        email: "oscar@oscar.com",
        password: "1596",
        saldo:300,
      },]

const form = document.getElementById ('form')
form.addEventListener('submit',login)

function obtenerUsuario(email,password){
const index = usuarios.findIndex((usuario)=>usuario.email === email)
if (index === -1){
    alert ('El usuario o contaseña es incorrecto')
    } else{
        if ( password === usuarios [index].password);
        return usuarios[index];
    }
return {};
}


function login (event){
    event.preventDefault();
   let email,password;
 
    let form = event.target
    const formData = new FormData(form);
    for (const entry of formData.entries()) {
      const [key, value] = entry;
      if (key === 'email'){
        email = value;}
      }
     
      obtenerUsuario();
     
    }