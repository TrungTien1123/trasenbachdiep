import CustomCheckbox from "../../components/customcheckbox/CustomCheckbox";

import { useEffect, useState } from "react";
import { MdLockOutline } from 'react-icons/md';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WithLoading from '../../components/HOC/withLoading/WithLoading';
import CustomButton from "../../components/custombutton/CustomButton";
import CustomInput from "../../components/custominput/CustomInput";
import FormGroup from "../../components/formgroup/FormGroup";
import userActions from '../../redux/actions/userActions';
import './Signin.css';

const Signin = (props) => {
    const [userSignin, setUserSignin] = useState({
        username:'',
        password:'',
        rememberMe:false
    })
  
    const handleSubmitForm = (e) => {
        e.preventDefault()
        props.signin(userSignin)

    }

    const handleOnChangeInput = (e) => {
        setUserSignin({
            ...userSignin,
            [e.target.name]:e.target.value
        })
    }

    const handleCheckboxChange = (checked) => {
        setUserSignin({
            ...userSignin,
            rememberMe: checked
        })
    }

    useEffect(()=> {
        props.showLoading(props.isLoading)
    },[props.isLoading])

    return (
        <div className="signin-container">
            <div className="signin-header">
                <div className="signin-avatar">
                    <MdLockOutline size='1.36rem' className="signin-icon" />
                </div>
                <h1>Sign in</h1>
            </div>
            <form className="signin-amin">
                <FormGroup>
                    <CustomInput 
                        label="Username *"
                        type="text"
                        name="username"
                        value=""
                        onChangeInput={handleOnChangeInput}
                    />
                </FormGroup>

                <FormGroup>
                    <CustomInput 
                        label="Password *"
                        type="password"
                        name="password"
                        value=""
                        onChangeInput={handleOnChangeInput}
                    />
                </FormGroup>

                <div className="remember-me">
                    <CustomCheckbox 
                        fontSize="24px" 
                        label="Remember me"
                        checkboxChange={handleCheckboxChange}
                    />
                </div>

                <div className="btn-submit">
                    <CustomButton 
                        type="submit"
                        uppercase
                        width="100%"
                        onClick={handleSubmitForm}
                        color="white"
                    >
                        Sign In
                    </CustomButton>
                </div>

                <div className='group-link'>
                    <Link to="/forgot-password">Forgot password?</Link>
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
                <p className="copy-right"> Copyright &copy; &nbsp;
                    <Link to="/">Trasenbachdiep</Link>&nbsp;2024
                </p>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.user.isLoading
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        signin: user => {
            dispatch(userActions.signin(user));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WithLoading(Signin));