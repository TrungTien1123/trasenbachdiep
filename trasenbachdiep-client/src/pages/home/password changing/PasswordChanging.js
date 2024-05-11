import styled from "styled-components";
import CustomInput from "../../../components/custominput/CustomInput";
import FormGroup from "../../../components/formgroup/FormGroup";
import CustomButton from "../../../components/custombutton/CustomButton";

const PasswordChanging = (props) => {

    return (
        <div className=/*{props.className}*/ 'password-changing-container'>
            <form 
                className="content" 
            >
                <h3>Change password</h3>
                <FormGroup>
                    <CustomInput 
                        label='New password *'
                        type='password'
                        name='password'
                    />
                </FormGroup>
                <FormGroup>
                    <CustomButton
                        type="submit"
                        color="#ffffff"
                        width="100%"
                        uppercase
                    >
                        Submit
                    </CustomButton>
                </FormGroup>
                <FormGroup>
                    <p style={{color: 'blue'}}>{props.messageChangePasswordSuccess}</p>
                    <p>{props.errorMessageChangePassword}</p>
                </FormGroup>
            </form>
        </div>
    )

}


export default PasswordChanging;
