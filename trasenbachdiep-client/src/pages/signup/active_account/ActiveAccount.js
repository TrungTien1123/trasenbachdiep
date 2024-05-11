import React from 'react'
import CustomButton from '../../../components/custombutton/CustomButton'
import './ActiveAccount.css'
const ActiveAccount = () => {
  const _redirect = () =>{
    window.location.replace('/signin')
  }
  return (
    <div className='active_account'>
        <h3>You have signed up successfully!</h3>
        <h4>Please, check your email to verify your account</h4>
        <CustomButton
          color = '#fff'
          width = '300px'
          onClick = {_redirect}
          >
            Trở về trang đăng nhập
          </CustomButton>
    </div>
  )
}

export default ActiveAccount