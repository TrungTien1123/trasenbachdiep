import styled from "styled-components"
import { useEffect, useState } from "react"
import { RiFolderUploadFill } from 'react-icons/ri'
import { connect } from "react-redux"

import CustomInput from '../../../components/custominput/CustomInput'
import FormGroup from '../../../components/formgroup/FormGroup'
import Button from '../../../components/custombutton/CustomButton'
import userActions from "../../../redux/actions/userActions"

const UserInfo = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',     
        email: '',
        phoneNumber:'',
        password: '',
        avatarUrl: ''
    })    
    const [avatarUrl, setAvatarUrl] = useState('')

    const [avatarUploadFile, setAvatarUploadFile] = useState(null)

    const [selectedFile, setSelectedFile] = useState(null)

    const handleInputChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        props.updateUserInfo(user,avatarUploadFile)
    }

    const onFileChange = (e) => {
        console.log(e.target.files);
      let url = URL.createObjectURL(e.target.files[0]);
      setAvatarUrl(url);
      setAvatarUploadFile(e.target.files[0]);
    }
    useEffect(() => {
        //Get user info
        props.getUserInfo(localStorage.getItem('username'));
    }, [])

    //khi thay doi userInfo se update props user der fill form
    useEffect(()=>{
        if(props.userInfo.avatarUrl != null && props.userInfo.avatarUrl !== ''){
            let url = props.userInfo.avatarUrl;
            let temp = url.split('/');
            //xu ly url localhost:3000/dashboard/upload ve localhost:3000/upload
            setAvatarUrl(`../${(temp[temp.length - 2] + '/' + temp[temp.length -1])}`)
        }
        setUser({...props.userInfo});
    },[props.userInfo])


    return(
        <div className={props.className}>
            <div className='user-container'>
                <div className="top">

                </div>
                <div className="overlay-top"></div>
                <div className="avatar">
                    {/* <img src = {`../${avatarUrl}`} /> */}
                    <img src = {avatarUrl} />
                    <div className="upload">
                        <label htmlFor="file_id">
                            <RiFolderUploadFill color="gray" fontSize="1.2em" className="icon-upload"/>
                        </label>
                        <input type="file" name="file" id="file_id" onChange={onFileChange}/>
                    </div>
                </div>
                <div className="content">
                    <form className="form-update">
                        {props.errorMessage &&
                            <div className="error">
                                <p>Server response status code: {props.errorMessage.statusCode}.&nbsp; </p>
                                <p>{props.errorMessage.message}</p>
                            </div>
                        }
                        {   !props.errorMessage &&
                            <div className="about-user">
                                <h1>ABOUT USER</h1>
                                 
                            </div>
                        }
                        <div className="full-name">
                            <FormGroup>
                                    <CustomInput type="text" 
                                        label="First Name *" 
                                        name="firstName"
                                        value={user.firstName }
                                        onChangeInput={handleInputChange}
                                    />
                            </FormGroup>
                            <FormGroup >
                                    <CustomInput type="text" 
                                        label="Last Name *" 
                                        name="lastName" 
                                        value={user.lastName }
                                        onChangeInput={handleInputChange}
                                    />
                            </FormGroup>
                        </div>
                        <FormGroup >
                                <CustomInput type="text" 
                                    label="Username *" 
                                    name="username"
                                    value={user.username}
                                    onChangeInput={handleInputChange}
                                />
                        </FormGroup>
                        <FormGroup >
                            <CustomInput type="email" 
                                label="Email *" 
                                name="email"
                                value={user.email}
                                onChangeInput={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup >
                            <CustomInput type="text" 
                                label="Phone number *" 
                                name="phoneNumber"
                                value={user.phoneNumber}
                                onChangeInput={handleInputChange}
                            />
                        </FormGroup>
                        <div className='btn-submit'>
                            <Button
                                type="submit"
                                uppercase
                                width="100%"
                                onClick={handleSubmitForm}
                            >
                                update
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const StyledUserInfo = styled(UserInfo) `
    ${'' /* height: 100%; */}
    height: 800px;
    width: 560px;
    margin: auto;
    ${'' /* border: 1px solid gray; */}
    padding: 30px 0 20px 0;

    .about-user {
        margin-top: -50px;
    }

    .about-user h1 {
        text-align: center;
        color: rgba(0, 0, 0, .4);
        font-size: 24px;
    }

    .about-user p {
        text-align: center;
        color: rgba(0, 0, 0, .5);
        font-size: .75rem;
        margin-top: 8px;
    }

    .form-update {
        width: 60%;
        margin: auto;
    }
    
    .icon-plus {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #9e27b0;
        position: absolute;
        top: 27%;
        right: 2rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .icon-plus span {
        font-size: 1.6rem;
    }


    .avatar {
        width: 130px;
        height: 130px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 22%;
        left: 2rem;
        ${'' /* background-image: url('/images/avatar.jpg'); */}
        background-position: center ;
        background-size: cover;
    }

    .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .error {
        ${'' /* display: flex;
        justify-content: center; */}
        color: red;
    }

    .error p {
        margin-bottom: 0;
    }

    .user-container {
        height: 100%;
        width: 100%;
        ${'' /* border: 1px solid green; */}
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;

        position: relative;

        overflow: hidden;
    }

    .top {
        ${'' /* height: 40%; */}
        height: 320px;
        background-image: linear-gradient(315deg, rgba(0, 128, 206, 0.8) 0%,  rgba(0, 128, 206, 0.8) 74%), url('/images/mountain.jpg');
        ${'' /* background-image: linear-gradient(90deg, rgba(114,215,250,1) 0%, rgba(58,198,246,1) 35%, rgba(27,186,251,1) 100%), url('/images/mountain.jpg'); */}
        background-position: center;
        background-size: cover;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .overlay-top {
        height: 160px;
        background-color: #eeeeee;
        transform: rotate(-10deg);
        position: absolute;
        width: 150%;
        top: 28%;
        z-index: 0;
    }

    .content {
        background-color: #eeeeee;
        flex: 1;
        border-radius: 6px;
        position: relative;
        z-index: 2;
    }

    .full-name {
        display: flex;
    }

    .full-name > div:first-child {
        margin-right: 5px;
    }

    .full-name > div:last-child {
        margin-left: 5px;
    }

    .upload input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .icon-upload {
        position: absolute;
        left: 50%;
        bottom: -17px;
        cursor: pointer;
        transform: translate(-50%, 0);
        z-index: 3;
    }

    .btn-submit {
        margin-top: .8rem;
    }

`

const mapStateToProps = state => {

    return {
        isLoading: state.user.isLoading,
        userInfo: state.user.userInfo
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
      getUserInfo: username =>{
        dispatch(userActions.getUserInfo(username))
      },
      updateUserInfo: (user,file) => {
        dispatch(userActions.updateUserInfo(user,file))
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StyledUserInfo);