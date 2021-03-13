import React, { useState } from 'react'
import "./AuthForm.css"
import Button from "./../Button/Button"
import SigninForm from '../SigninForm/SigninForm'
import SignupForm from '../SignupForm/SignupForm'
import { connect } from 'react-redux'
import { googleSignin } from '../../Redux/auth/authActions'

const AuthForm = ({googleSignin}) => {
    var [formType, setFormType] = useState("signin")
    return (
        <div className = "auth-form">
            <div className="auth-form-switcher">
                <Button onClick = {() => setFormType("signin")}
                 style={{position:"relative"}} 
                 background = "white"
                  color = "black">
                    Sign in
                    <div className="underliner"></div>
                    </Button>
                <Button 
                onClick = {() => setFormType("signup")}
                style={{position:"relative", justifySelf:"end"}}
                 background = "white"
                  color = "black" >
                      Sign up
                <div className="underliner"></div>
                </Button>

            </div>
            <div className="auth-form-fields center">
                {/* <SigninForm/>
                <SignupForm/> */}
                {formType === "signin" ? <SigninForm/> : <SignupForm/>}
            </div>
            <div className="auth-form-btns">
                <div className="separator-or">OR</div>
                <Button type = "button" onClick = {googleSignin}
                  style={{marginTop:"2em"}} background = "rgba(0, 0, 0, 0.7)" style={{width:"70%"}} color = "white">Google Signin</Button>
            </div>


        </div>
    )
}
var actions = { 
    googleSignin
}
export default connect(null, actions)(AuthForm)
