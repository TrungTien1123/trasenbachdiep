import CustomInputNonOutline from "../../../components/custominput/CustomInputNonOutline"
import './FormProductInfo.css'

import { useEffect, useState } from "react"
import FormGroup from '../../../components/formgroup/FormGroup'

import { MdOutlineClose } from 'react-icons/md'

const FormProductInfo = (props) => {
    const [productItem, setProductItem] = useState(props.productItem)

    useEffect(() => {
        setProductItem(props.productItem)
    }, [props.productItem])
    
    const handleClickIconClose = () => {
        props.toggleFormGroup(false)
    }

    const _onChangeInput = (e) => {
        setProductItem({...productItem, [e.target.name] : e.target.value})
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
            <form className="form-product-info">
                <div className="icon-close">
                    <MdOutlineClose onClick={handleClickIconClose}/>
                </div>
                <h3 className="form-title">PRODUCT INFO</h3>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Name" 
                        type="text" 
                        name="name"
                        value={productItem.name}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Price" 
                        type="text" 
                        name="type"
                        value={productItem.type}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Description" 
                        type="text" 
                        name="createdAt"
                        value={productItem.createdAt}
                        onChangeInput={_onChangeInput}
                    />
                </FormGroup>
                <FormGroup>
                    <CustomInputNonOutline 
                        label="Category" 
                        type="text" 
                        name="totalMember"
                        value={productItem.totalMember}
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


export default FormProductInfo;