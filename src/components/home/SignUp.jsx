import React, { useState } from 'react';
import styles from '@css/forms/login.module.css';
import Close from '@comp/ui/extras/Close.jsx'
import InputAuth from '@comp/ui/inputs/InputAuth.jsx'


function SignUp({ onClose}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={`${styles.login} `}>
        <Close onClick={onClose}/>

      <div className={styles.h1}>
        <img src="/spark.png" alt="" srcSet="" />
        SignUp</div>
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.wrapinputs}>
            <input
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </div>
        <div className={styles.wrapinputs}>
            <input
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </div>
        <div className={styles.wrapinputs}>
            <input
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </div>


        {/* <input value="Creat-Account" className={styles.btn} type="submit" /> */}
        <button className={` ${styles.btn} ${styles.ontime} `} type="submit">
            <strong>Creat-Account</strong>
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

export default SignUp;
