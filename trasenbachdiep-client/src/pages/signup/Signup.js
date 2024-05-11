import CustomInput from "../../components/custominput/CustomInput";
import FormGroup from "../../components/formgroup/FormGroup";
import { MdGroupAdd } from 'react-icons/md';
import './Signup.css'
import CustomButton from "../../components/custombutton/CustomButton";

import { useFormik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import WithLoading from '../../components/HOC/withLoading/WithLoading';
import userActions from '../../redux/actions/userActions';
import { REGEX_PASSWORD, REGEX_PHONE_NUMBER } from "../../utils/pattern";


const Signup = (props) => {
    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName:Yup.string()
                .min(2,'Minimum 2 characters')
                .max(15,'Maximum 15 characters')
                .required('Required!'),
            lastName:Yup.string()
                .min(2,'Minimum 2 characters')
                .max(15,'Maximum 15 characters')
                .required('Required!'),
            username:Yup.string()
                .min(2,'Minimum 2 characters')
                .max(15,'Maximum 15 characters')
                .required('Required!'),
            email:Yup.string()
                .email('Invalid email format')
                .required('Required!'),
            phoneNumber:Yup.string()
                .matches(
                    REGEX_PHONE_NUMBER,
                    'Phone number must have 10 numbers 0-9'
                )
                .required('Required!'),
            password:Yup.string()
                .matches(
                    REGEX_PASSWORD,
                    'Password must have minimum eight characters, maximum 20 characters, at least one uppercase letter, one lowercase letter and one number'
                )
                .required('Required!'),
            // role:Yup.string()
            //     .oneOf(['ADMIN','EMPLOYEE','CUSTOMER'])
            //     .required('Required!'),
        }),
        onSubmit: values => {
            console.log(values);
            console.log(props);
            props.signup(values)
        }
    })

    useEffect(()=> {
        props.showLoading(props.isLoading)
    },[props.isLoading])

    return (
        <div className="signup-container">
            <div className="signup-header">
                <div className="signup-avatar">
                    <MdGroupAdd size='1.36rem'/>
                </div>
                <h1>Sign up</h1>
            </div>
            <form className="signup-main" onSubmit={formik.handleSubmit}>
                <div className="name">
                    <FormGroup>
                        <CustomInput
                            label='First Name *'
                            type='text'
                            name='firstName'
                            value={formik.values.firstName}
                            onChangeInput={formik.handleChange}
                        />
                        {
                            formik.errors.firstName && formik.touched.firstName && (
                                <p>{formik.errors.firstName}</p>
                            )
                        }
                    </FormGroup>
                    <FormGroup>
                        <CustomInput
                            label='Last Name *'
                            type='text'
                            name='lastName'
                            value={formik.values.lastName}
                            onChangeInput={formik.handleChange}
                        />
                        {
                            formik.errors.lastName && formik.touched.lastName && (
                                <p>{formik.errors.lastName}</p>
                            )
                        }
                    </FormGroup>
                </div>
                <FormGroup>
                    <CustomInput
                        label='Username *'
                        type='text'
                        name='username'
                        value={formik.values.username}
                        onChangeInput={formik.handleChange}      
                    />
                    {
                        formik.errors.username && formik.touched.username && (
                            <p>{formik.errors.username}</p>
                        )
                    }
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Email *'
                        type='email'
                        name='email'
                        value={formik.values.email}
                        onChangeInput={formik.handleChange}                    
                    />
                    {
                        formik.errors.email && formik.touched.email && (
                            <p>{formik.errors.email}</p>
                        )
                    }
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Phone number *'
                        type='text'
                        name='phoneNumber'
                        value={formik.values.phoneNumber}
                        onChangeInput={formik.handleChange}                    
                    />
                    {
                        formik.errors.phoneNumber && formik.touched.phoneNumber && (
                            <p>{formik.errors.phoneNumber}</p>
                        )
                    }
                </FormGroup>
                <FormGroup>
                    <CustomInput
                        label='Password *'
                        type='password'
                        name='password'
                        value={formik.values.password}
                        onChangeInput={formik.handleChange}                    
                    />
                    {
                        formik.errors.password && formik.touched.password && (
                            <p>{formik.errors.password}</p>
                        )
                    }
                </FormGroup>
                {/* <FormGroup>
                    <CustomInput
                        label="Role *"
                        type="text"
                        name="role"
                        value={formik.values.role}
                        onChangeInput={formik.handleChange}                    
                    />
                    {
                        formik.errors.role && formik.touched.role && (
                            <p>{formik.errors.role}</p>
                        )
                    }
                </FormGroup> */}
                <div className="btn-submit">
                    {/* <CustomButton title='Sign up'/> */}
                    <CustomButton
                        type="submit"
                        color="#ffffff"
                        width="100%"
                        uppercase
                    >
                        Sign up
                    </CustomButton>
                </div>
                <div className="group-link">
                    <Link to="/signin">
                        Already have an account? Sign in
                    </Link>
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
        signup: user => {
            dispatch(userActions.signup(user));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WithLoading(Signup));