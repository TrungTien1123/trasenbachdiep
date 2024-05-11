import { useEffect, useState } from 'react'
// import './CustomInput.css'
import styled from 'styled-components'

const StyledCustomInput = styled.div `
.formcontrol-input {
    position: relative;
}

.input-item {
    position: relative;
}

input {
    width: 100%;
    height: 3rem;
    background: none;
    border: 0;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, .87);
    border: 1px solid rgba(0, 0, 0, .23);
    border-radius: 4px;
    padding: 0 14px;
}

input.active,  input.allowed{
    border-color: transparent;
}

.label {
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(0, 0, 0, .5);
    transform: translate(14px, 14px);
    text-align: center;
    pointer-events: none;
    transition: transform .3s ease-in-out;
    background: transparent;
}

.label.active {
    transform: translate(8px, -22px) scale(.88);
    color: #ab4
}

.label.allowed {
    transform: translate(8px, -22px) scale(.88);
}

.input-item fieldset {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0px;
    pointer-events: none;
    width: 100%;
    /* border: 1px solid #ab4; */
    border-color: #ab4;
    border-radius: 4px;
    display: none;
    padding: 0 15px 0 8px;
}

.input-item fieldset.active, fieldset.allowed {
    display: initial;
    border: 1px solid #ab4;
}



fieldset span {
    font-size: .88rem;
    padding: 0 5px 0 5px;
    visibility: hidden;
}


`

function CustomInput(props) {
    const [value, setValue] = useState('')

    const [inputFocus, setInputFocus] = useState(false)
    
    const [allowed, setAllowed] = useState(false)

    const _onChange = (e) => {
        setValue(e.target.value)
        props.onChangeInput(e)
    }

    const _onFocus = (e) => {
        setInputFocus(true)
    }

    const _onBlur = (e) => {
        setInputFocus(false)

        if (value != null && value !== '') {
            setAllowed(true)
        }else setAllowed(false)
    }


    useEffect(() => {
        setValue(props.value)

        if (props.value != null && props.value !== '') {
            setAllowed(true)
            setInputFocus(false)
        }else {
            setAllowed(false)
        }
        
    }, [props.value])

    return(
        <StyledCustomInput>
        <div className="formcontrol-input">
            <label 
                className={
                    inputFocus ? 'label active' : 
                    (allowed ? 'label allowed' : 'label')
                }
            >
                {props.label}
            </label>
            <div className='input-item'>
                <input
                    className={inputFocus ? 'active' : 
                    (allowed ? 'allowed' : '')}
                    type={props.type}
                    name={props.name}
                    value={value}
                    onChange={_onChange}
                    onFocus={_onFocus}
                    onBlur={_onBlur}
                />
                <fieldset className={
                    inputFocus ? 'active' : 
                    (allowed ? 'allowed' : '')
                }>
                    <legend>
                        <span>{props.label}</span>
                    </legend>
                </fieldset>
            </div>
        </div>
        </StyledCustomInput>
    )
}

export default CustomInput