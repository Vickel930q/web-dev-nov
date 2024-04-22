"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./page.module.css";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import WarningMessage from "react";
import { IoEye, IoEyeOff } from 'react-icons/io5';

export default function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkboxClicked: '',
    });

    const [checkboxClicked, setCheckboxClicked] = useState(false);

    const [showPassword, setShowPassword] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
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
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if (!checkboxClicked) {
            errors.checkboxClicked = 'Please agree to the terms and conditions';

        }



        // Set the errors object to the errors state
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
                <h2>Login</h2>
               
                <div className={styles.formgroup}>
                    <label htmlFor="">
                        <MdEmail />
                    </label>
                    <input
                        className={styles.checkform}
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={styles.formgroup}>
                    <label htmlFor="">
                        <RiLockPasswordFill />
                    </label>
                    <div className={styles.ck}>

                        <input
                            className={styles.checkform}
                            placeholder="Password"
                            type={showPassword ? "password" : "text"}

                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />

                        <p type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <IoEyeOff /> : <IoEye />}
                        </p>
                    </div>


                    {errors.password && <p className={styles.error}>{errors.password}</p>}

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
                        create new account
                    </Link>
                </div>

            </div>
                <div className={styles.log2}>
                        <Link href="/signin">
                            Already have an account?
                            Log in here!
                    
                        </Link>
                    </div>
        </div>

    )
}
