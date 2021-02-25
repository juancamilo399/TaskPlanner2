import React, { useState } from 'react';
import './components/App.css';
import { Login } from './components/Login';
import Swal from 'sweetalert2'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'
import { TodoApp } from './components/TodoApp';
import { NewTask } from './components/NewTask';
import { UserProfile } from './components/UserProfile';

function App() {
  localStorage.setItem("Username", "juan@gmail.com");
  localStorage.setItem("Password", "pass");
  //localStorage.setItem("isLoggedIn","false")

  let isLogged = localStorage.getItem("isLoggedIn");


  isLogged = (isLogged === "true" ? true : false)

  const [isLoggedIn, setisLoggedIn] = useState(isLogged)

  const handleSuccessfullyLogin = (e) => {
    Swal.fire({
      title: 'Login succesfull',
      text: 'Welcome',
      timer: 2000,
      timerProgressBar: false,
      icon: 'success',
      showConfirmButton: false
    })
    localStorage.setItem("isLoggedIn", "true");
    setisLoggedIn(true)
  }

  const handleFailedLogin = (e) => {
    Swal.fire({
      title: 'Error!',
      text: 'User or Password incorrect',
      timer: 2000,
      timerProgressBar: false,
      icon: 'error',
      showConfirmButton: false
    })
    localStorage.setItem("isLoggedIn", "false");
    setisLoggedIn(false)
  }

  const LoginView = () => (
    <Login successful={handleSuccessfullyLogin} failed={handleFailedLogin} />
  );

  const TodoAppView = () => (
    <TodoApp />
  );

  const correct = isLoggedIn ? TodoAppView : LoginView

  return (
    <div>

      <HashRouter basename="/">
        <div>
          <Switch>

            <Route exact path="/" component={correct} />
            <Route path="/new" component={NewTask} />
            <Route path="/profile" component={UserProfile} />
          </Switch>

        </div>
      </HashRouter>
    </div>

  )
}

export default App;
