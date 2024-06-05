import React, { useState } from 'react';
import styles from '@css/forms/login.module.css';
import Close from '@comp/ui/extras/Close.jsx'

function Login({ onClose }) {
  const [loginInputs, setLoginInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {

    setLoginInputs(prev => {
      return {
       ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(loginInputs);
  };

  return (
    <div className={`${styles.login} `}>
        <Close onClick={onClose}/>
      <div className={styles.h1}>
        <img src="/spark.png" alt="" srcSet="" />
        Login</div>
      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <input
          placeholder="Username"
          id="Username"
          name="username"
          type="text"
          value={loginInputs.username}
          onChange={(e) => handleChange(e)}
          className={styles.input}
        />
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          value={loginInputs.password}
          onChange={(e) => handleChange(e)}
          className={styles.input}
        />
        <button className={` ${styles.btn} ${styles.ontime} `} type="submit">
            <strong>Login</strong>
            <div id={styles.containerStars}>
                <div id={styles.stars}></div>
            </div>

            <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </button>
      </form>
    </div>
  );
}

export default Login;
