document.getElementById('formulario').addEventListener('submit',(event) =>{
  event.preventDefault()




  //validar campo nombre
  let entradaNombre= document.getElementById('name')
  let errorNombre = document.getElementById('nameError')

  if(entradaNombre.value.trim() === ''){                              //trim: borra los espacion en blanco cuando se ingresa algo
    errorNombre.textContent = 'por favor introduzca un nombre';
    errorNombre.classList.add('error-message')
  }else{
    errorNombre.textContent= ''
    errorNombre.classList.remove('eerror-message')
  }

  //valida correo electronico
  let emailEntrada = document.getElementById('email')
  let emailError = document.getElementById('emailError')
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailPattern.test(emailEntrada.value)){
    emailError.textContent = 'por favor introduzca un mail valido';
    emailError.classList.add('error-message')
  }else{
    emailError.textContent = '';
    emailError.classList.remove('error-message')
  }

  //validar contraseña 
  let contrasenaEntrada = document.getElementById('password')
  let contrasenaError = document.getElementById('passwordError')
  if(contrasenaEntrada.value.length < 8){
    contrasenaError.textContent = 'La contraseña debe tener la menos 8 caracteres';
    contrasenaError.classList.add('error-message')
  }else{
    contrasenaError.textContent = '';
    contrasenaError.classList.remove('error-message')
  }
  //si todos los campos son validas, enviar
  if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){


    //backend que recibe la info
    alert('el formulario se ha enviado con exito')
    document.getElementById('formulario').reset();
  }
})