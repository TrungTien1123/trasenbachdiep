import { useEffect, useState } from 'react'
import CustomInput from '../../components/custominput/CustomInput'
import FormGroup from '../../components/formgroup/FormGroup'
import './lienhe.css'
import userActions from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import CustomButton from '../../components/custombutton/CustomButton'
import WithLoading from '../../components/HOC/withLoading/WithLoading'

const Contact = (props)=>{
    const [contact, setContact] = useState({
        fullName:'',
        email:'',
        phoneNumber: '',
        content:''
    })
    const handleSubmitForm = (e) => {
        e.preventDefault()
        props.sendContact(contact)

    }

    const handleOnChangeInput = (e) => {
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        })
    }
    // useEffect(()=> {
    //     props.showLoading(props.isLoading)
    // },[props.isLoading])
    
    
    return(
        <div className='contact-content'>
                <div className="contact-form">
                    
                    <form className="contact-field">
                    <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                        <FormGroup>
                            <CustomInput 
                                label="Họ và tên *"
                                type="text"
                                name="fullName"
                                value=""
                                onChangeInput={handleOnChangeInput}
                            />
                        </FormGroup>

                        <FormGroup>
                            <CustomInput 
                                label="Email *"
                                type="email"
                                name="email"
                                value=""
                                onChangeInput={handleOnChangeInput}
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <CustomInput 
                                label="Số điện thoại*"
                                type="textl"
                                name="phoneNumber"
                                value=""
                                onChangeInput={handleOnChangeInput}
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <CustomInput 
                                label="Nội dung *"
                                type="text"
                                name="content"
                                value=""
                                onChangeInput={handleOnChangeInput}
                            />
                        </FormGroup>


                        <div className="btn-submit">
                            <CustomButton 
                                type="submit"
                                uppercase
                                width="100%"
                                onClick={handleSubmitForm}
                                color="white"
                            >
                                Submit
                            </CustomButton>
                        </div>

                    </form>
                </div>
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
        signin: contact => {
            dispatch(userActions.sendContact(contact));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);