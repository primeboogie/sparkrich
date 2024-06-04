import React, { useState } from 'react';
import styles from '@css/forms/login.module.css';
import Close from '@comp/ui/extras/Close.jsx'

function Login({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', username);
    console.log('Password:', password);
  };

  return (
    <div className={`${styles.login} `}>
        <Close onClick={onClose}/>
      <div className={styles.h1}>
        <img src="/spark.png" alt="" srcSet="" />
        Login</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
        //   pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          placeholder="Username"
          id="Username"
          name="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        {/* <input value="Login" className={styles.btn} type="submit" /> */}
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
