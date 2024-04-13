// "use client"
// import React, { useState } from 'react';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Clear error message for the corresponding field
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validation
//     let errors = {};
//     if (!formData.firstName) {
//       errors.firstName = 'First name is required';
//     }
//     if (!formData.lastName) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!formData.email) {
//       errors.email = 'Email is required';
//     }
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
//       errors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character';
//     }
//     if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
//     setErrors(errors);
//     // If there are no errors, you can proceed with form submission
//     if (Object.keys(errors).length === 0) {
//       // Here you can make your API call or any other action
//       console.log('Form submitted successfully:', formData);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//           {errors.firstName && <p className="error">{errors.firstName}</p>}
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//           {errors.lastName && <p className="error">{errors.lastName}</p>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} />
//           {errors.password && <p className="error">{errors.password}</p>}
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
//           {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default RegistrationForm;


"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./page.module.css";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import WarningMessage from "react";

export default function Form() {
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isChecked, setIsChecked] = useState(false);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation
       


        // Validation
        const errors = {};
        if (!firstName) {
          errors.firstName = 'First name is required';
        }
        if (!lastName) {
          errors.lastName = 'Last name is required';
        }
        if (!email) {
          errors.email = 'Email is required';
        }
        if (!password) {
          errors.password = 'Password is required';
        } 
        else if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
          errors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character';
        }
        if (password !== confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
        setErrors(errors);
        // If there are no errors, you can proceed with form submission
        if (Object.keys(errors).length === 0) {
          // Here you can make your API call or any other action
          console.log('Form submitted successfully:', { firstName, lastName, email, password, confirmPassword });
        }
      };
    
  return (
    <div className={styles.container}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className={styles.formgroup}>
                    <label  htmlFor="">
                        <IoPersonSharp />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="FirstName"
                        type="text"
                        name="firstname"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className={styles.formgroup}>
                    <label  htmlFor="">
                        <IoPersonSharp />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="LasttName"
                        type="text"
                        name="lastname"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        
                    />
                     {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>

                <div className={styles.formgroup}>
                    <label  htmlFor="">
                        <MdEmail />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                       
                    />
                     {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className={styles.formgroup}>
                    <label  htmlFor="">
                        <RiLockPasswordFill />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                       
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                </div>
                <div className={styles.formgroup}>
                    <label  htmlFor="">
                        <RiLockPasswordFill />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                      
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <div className={styles.terms}>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        value={isChecked}
                        onChange={(e) => {
                            setIsChecked(e.target.checked);
                        }}

                        
                    />
                    <label for="terms">
                        <Link href="#">I agree to Terms of Service</Link>.
                    </label>
                   
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className={styles.img}>
                <Image
                    src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
                    alt="sign"
                    width={400}
                    height={450}
                />
                <div className={styles.log}>
                    <Link href="/signin">
                        Already have an account?
                        Log in here!
                    </Link>
                </div>
                
            </div>
            {/* <div className={styles.log2}>
                    <Link href="/signin">
                        Already have an account?
                        Log in here!
                
                    </Link>
                </div> */}
        </div>

  )
}
