import React, { useEffect, useState } from "react";
import {
  SignInStyledComponent,
  SignInLeftSideBox,
  SignInRightSideBox,
  SignInMainComp,
  SignInHeader,
  SignInTextBox
} from "./signIn.styled";
import { Input, Button } from "../../theme/components";
import { Validate } from "../../helpers";
import LoginPageLeftSideImg from "../../assets/images/bike.svg";
import { SIGN_IN_USER } from "../../services";
import DesktopLogoImg from "../../assets/images/vaomwhite.png";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { signInUserSuccess } from "../../redux/actions/user.actions";
import { toast } from 'react-toastify';

const formData = { email: "", password: "" }; //initial values of an form  

function SignIn({ signInUserSuccess }) {
  const navigate = useNavigate()
  const [form, setForm] = useState(formData);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const handleValidation = () => {
    let errorStructure = {
      errorEmail: "",
      errorPassword: "",
      isValidated: false,
    };

    if (!isFormSubmit) return errorStructure;

    if (!form?.email) {
      errorStructure = { ...errorStructure, errorEmail: "Please enter email" };
    } else if (!Validate.email(form?.email)) {
      errorStructure = {
        ...errorStructure,
        errorEmail: "Please enter valid email",
      };
    }
    if (!form?.password) {
      errorStructure = {
        ...errorStructure,
        errorPassword: "Please enter password",
      };
    } else if (!Validate.minLength(form?.password, 3)) {
      errorStructure = {
        ...errorStructure,
        errorPassword: "Password must be minimum 3 characters",
      };
    }

    if (!errorStructure?.errorEmail && !errorStructure?.errorPassword) {
      errorStructure = {
        ...errorStructure,
        isValidated: true,
      };
    }

    return errorStructure;
  };

  useEffect(() => {
    if (isFormSubmit) {
      handleSubmit();
    }
  }, [isFormSubmit]); //eslint-disable-line

  const onSubmit = () => {
    setIsFormSubmit(Math.random());
  };

  const handleSubmit = () => {
    const { isValidated } = handleValidation();

    if (!isValidated) return;

    setIsLoading(true)
    const params = { ...form };
    // Sign in Api Call
    SIGN_IN_USER(params).then(res => {
      setIsLoading(false);
      signInUserSuccess(res);
      navigate("/dashboard");
      toast.success('Login Success');
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
    })
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const { errorEmail, errorPassword } = handleValidation();
  return (
    <SignInMainComp>
      <SignInHeader>
        <img src={DesktopLogoImg} alt="logo" width={'100px'} />
        <p>English</p>
      </SignInHeader>
      <SignInStyledComponent>
        <SignInLeftSideBox>
          <SignInTextBox>
            <p>Welcome to</p>
            <h1>Vehicle <span>I</span>ntelligence <span>P</span>latform</h1>
          </SignInTextBox>
          <img src={LoginPageLeftSideImg} alt="login" width={'80%'} height={'70%'} />
        </SignInLeftSideBox>
        <SignInRightSideBox>
          <div style={{ width: '400px', padding: '15px 0px' }}>
            <h4>Sign In</h4>
          </div>
          <Input
            type="email"
            onChange={handleChange}
            name="email"
            value={form.email}
            isError={Boolean(errorEmail)}
            errorMessage={errorEmail}
            disabled={isLoading}
            placeholder='Enter Email'
          />
          <br />
          <Input
            type="password"
            onChange={handleChange}
            value={form.password}
            name="password"
            isError={Boolean(errorPassword)}
            errorMessage={errorPassword}
            disabled={isLoading}
            placeholder='Password'
          />
          <br />
          <div className="recoverPassword">
            <p>Recover Password ?</p>
          </div>
          <br />
          <Button
            onClick={onSubmit}
            large
            width='400px' >
            Sign In{isLoading && "..."}
          </Button>
        </SignInRightSideBox>
      </SignInStyledComponent>
    </SignInMainComp>
  );
}

function mapStateToProps(state) {
  return {
    theme: state?.theme,
    user: state?.user,
  };
}

export default connect(mapStateToProps, {
  signInUserSuccess
})(SignIn);