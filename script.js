registeredUser = [
  {
    username: "jontolentino",
    password: "123"
  },
  {
    username: "admin",
    password: "123"
  },
]

function login(){
  let email = document.getElementById("userEmail").value
  let password = document.getElementById("userPassword").value

  for (let x of registeredUser){
    if (x.username === email && x.password === password){
      console.log(`You are login ${x.username} + ${x.password}`)
    }
  }
}

function register(){
  let email = document.getElementById("userEmailRegister").value
  let password = document.getElementById("userPasswordRegister").value

  for (let x of registeredUser){
    if (email === x.username){
      console.log("Account taken")
      return
    }
  }
  
  let newUser = {
    username: email,
    password: password,
  }

  registeredUser.push(newUser)
  console.log("registered succesfully")
}