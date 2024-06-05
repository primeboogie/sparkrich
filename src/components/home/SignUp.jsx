import React, { useState, useEffect } from 'react';
import styles from '@css/forms/login.module.css';
import Close from '@comp/ui/extras/Close.jsx'
import InputAuth from '@comp/ui/inputs/InputAuth.jsx'


function SignUp({ onClose}) {
  const [signUpInputs, setSignUpInputs] = useState({
    username: '',
    phone: '',
    email: '',
    country: '',
    country_call: '+000',
    password: '',
  });
  const[countrys, setCountrys] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://spark.crownwave.org/api/");
        const data = await response.json();
        if (data.length > 0) {
          setCountrys(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const newName = e.target.name;
    let newValue = e.target.value;
  
    if (newName === 'country' && newValue !== '') {
      const selectedCountry = countrys.find(country => country.cid == newValue);
  
      if (selectedCountry) {
        setSignUpInputs(prev => ({
          ...prev,
          [newName]: newValue, 
          country_call: selectedCountry.ccall,
        }));
      } else {
        console.error(`Country with ID ${newValue} not found.`);
      }
    } else if (newName === 'phone' && newValue !== '') {
      if(newValue[0] == 0){
        newValue = ''
      }
      setSignUpInputs(prev => ({
        ...prev,
        [newName]: newValue
      }));
    } else {
      setSignUpInputs(prev => ({
        ...prev,
        [newName]: newValue
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpInputs)
  };

  const Listed = () => {
    countrys.sort((a, b) => a.cname.localeCompare(b.cname));
    return countrys.map((country) => {
      return (
        <option key={country.cid} id={country.cid} value={country.cid}>
          {country.cname} - {country.ccurrency}
        </option>
      );
    });
  }

  return (
    <div className={`${styles.login} `}>
        <Close onClick={onClose}/>

      <div className={styles.h1}>
        <img src="/spark.png" alt="" srcSet="" />
        SignUp</div>
      <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.wrapinputs}>
            <input
            placeholder="Username"
            id="username"
            name="username"
            type="text"
            value={signUpInputs.username}
            required
            onChange={(e) => handleChange(e)}
            className={styles.input}
            />

            <select name="country" id="country" required value={signUpInputs.country} onChange={(e) => handleChange(e)}>
              <option value="">--Select Your Country--</option>
              {<Listed/>}

            </select>
        </div>

        <div className={styles.wrapinputs}>
            <input
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            value={signUpInputs.email}
            required
            onChange={(e) => handleChange(e)}
            className={styles.input}
            />
          <div className={styles.prefix}>
            <span>{signUpInputs.country_call}</span>
          <input
            placeholder="Phone"
            inputMode='tel'
            id="phone"
            name="phone"
            type="text"
            value={signUpInputs.phone}
            onChange={(e) => handleChange(e)}
            required
            className={styles.input}
            />
          </div>
        </div>

        <div className={styles.wrapinputs}>
            <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={signUpInputs.password}
            required
            onChange={(e) => handleChange(e)}
            className={styles.input}
            />
            <input
            placeholder="Confirm-Password"
            type="text"
            defaultValue={signUpInputs.password}
            readOnly
            className={styles.input}
            />
        </div>

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
