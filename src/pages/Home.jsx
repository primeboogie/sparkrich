import React, { useState } from 'react';
import ShineBtn from '@comp/ui/buttons/ShineBtn.jsx' 
import ArrowBtn from '@comp/ui/buttons/ArrowBtn.jsx' 
import Login from '@comp/home/Login.jsx' 
import SignUp from '@comp/home/SignUp.jsx' 
import styles from '@css/home.module.css'
// import mcss from '@css/main.module.css'

function Home({auth}) {
  const [LoginState, setLoginState] = useState(false)
  const [SignUpState, setSignUpState] = useState(false)

  const handleLogin = () => {
    setLoginState(true)
    setSignUpState(false)
  }
  const handleSignUp = () => {
    setSignUpState(true)
    setLoginState(false)
  }


  return (
    <div className={styles.home}>
      <nav>
        <div className={styles.logoleft}>
          <div className={styles.divimg}>
            <img src="/spark.png" alt="" />
          </div>
          <span>Spark-Rich </span>
        </div>
         
        <div className={styles.authbtn}>
               <ShineBtn onClickBtn={handleLogin}>Login</ShineBtn>
               <ShineBtn onClickBtn={handleSignUp} >SignUp</ShineBtn>
        </div>
      </nav>  

      <div className={styles.hmenu}>
        <div className={styles.draft1}>
          <span className={styles.hlogo}>Spark-Rich</span>
          <p> 
          ✨ We transform marketing services across all social media platforms and offer a curated 
          selection of products. To continue with us, please click the button below to log in to your account 
          and see today's featured products.m
            </p>
        
        <ArrowBtn onClick={auth}>Client area</ArrowBtn>
        </div>
        {LoginState && <Login onClose={setLoginState}/>}
        {SignUpState && <SignUp onClose={setSignUpState} />}
        <div className={styles.draft2}>
        </div>
      </div>
    </div>
  )
}

export default Home