import CustomInputNonOutline from "../../../components/custominput/CustomInputNonOutline"

import styled from 'styled-components'

import { useEffect, useState } from "react"
import FormGroup from '../../../components/formgroup/FormGroup'

import { MdOutlineClose } from 'react-icons/md'

const FormGroupInfo = (props) => {
    const [groupItem, setGroupItem] = useState(props.groupItem)

    useEffect(() => {
        setGroupItem(props.groupItem)
    }, [props.groupItem])
    
    const handleClickIconClose = () => {
        props.toggleFormGroup(false)
    }

    const _onChangeInput = (e) => {
        setGroupItem({...groupItem, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (props.buttonText === 'Create') {
        }
        else {
        }
    }

    useEffect(() => {
        if (props.closeFormGroup) props.toggleFormGroup(false)
    }, [props.closeFormGroup])

    return(
        <div className={props.className}>
            <form className="form-group-info">
                <div className="icon-close">
                    <MdOutlineClose onClick={handleClickIconClose}/>
                </div>
                <h3>GROUP INFO</h3>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Name" 
                        type="text" 
                        name="name"
                        value={groupItem.name}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Type" 
                        type="text" 
                        name="type"
                        value={groupItem.type}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Created Date" 
                        type="text" 
                        name="createdAt"
                        value={groupItem.createdAt}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Total Member" 
                        type="text" 
                        name="totalMember"
                        value={groupItem.totalMember}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <div className="btn-submit">
                    <button type="submit" onClick={handleSubmit}>{props.buttonText}</button>
                </div>
            </form>
        </div>
    )
}

const StyledFormGroupInfo = styled(FormGroupInfo) `
    .form-group-info {
        width: 500px;
        margin: auto;
        border: 1px solid rgba(0, 0, 0, .15);
        padding: 30px 60px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgb(0 0 0  / 14%);
        position: relative;
    }

    .icon-close {
        position: absolute;
        top: 6px;
        right: 6px;
        cursor: pointer;
    }

    h3 {
        text-align: center;
    }

    .form-group-info .btn-submit {
        display: flex;
        justify-content: flex-end;
    }

    .form-group-info .btn-submit button {
        background: transparent;
        border: 1px solid #39f;
        outline: none;
        padding: 5px 8px;
        border-radius: 3px;
        cursor: pointer;
    }

    .form-group-info .btn-submit button:hover {
        color: orange;
    }
`

export default StyledFormGroupInfo