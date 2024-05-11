import { Link } from 'react-router-dom'
import './ListProducts.css'

import { MdEdit } from 'react-icons/md'

import { MdOutlineDeleteForever } from 'react-icons/md'

import { MdAddToPhotos } from 'react-icons/md'

import { MdOutlineClose } from 'react-icons/md'

import { MdSearch } from 'react-icons/md'

import FormProductInfo from './FormProductInfo.js'

import { useEffect, useState } from 'react'

import  DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

import ReactPaginate from 'react-paginate'
import ControlPanel from '../../../components/CRUD/controlpanel/ControlPanel.js'
import productActions from '../../../redux/actions/productActions.js'
import WithLoading from '../../../components/HOC/withLoading/WithLoading.js'
import { connect } from 'react-redux'


const ListProducts = (props) => {
    const [isloading,setIsLoading] = useState(true)
    const [productItem, setProductItem] = useState({})

    const [buttonText, setButtonText] = useState('Create')

    const [selectChanged, setSelectChanged] = useState(false)

    const [type, setType] = useState('Type')

    const [startDate, setStartDate] = useState(null)

    const [endDate, setEndtDate] = useState(null)

    const[productItems,setProductItems] = useState([])

   

    const handleClickAddProduct = () => {
        // props.formProductIsOpen = true
        setProductItem({
            name: '',
            description: '',
            imageUrl: '',
            categoryId:'',
        })
        setButtonText('Create')

    }

    const handleClickEdit = (item) => {
        setButtonText('Save')
       
    }
    
    const handleClickDelete = (item) => {
        console.log(item);
        // props.deleteProduct(item);
       
    }

    const handleClickIconClose = () => {
        setType('Type')
        setSelectChanged(false)
    }

    const onSelectChange = (e) => {
        setType(e.target.value)
        setSelectChanged(true)
    }

    const handleStartDateChange = (date) => {
        setStartDate(date)
    }

    const handleEndDateChange = (date) => {
        setEndtDate(date)
    }


    const _clickSearch = () => {
        
    }

    
    useEffect(() => {
        //Get products 
        props.getListProductItems();
        setProductItems(props.listProductItems)
    }, [])

    // useEffect(()=> {
    //     props.showLoading(props.isLoading)
    // },[props.isLoading])

    useEffect(()=>{
        setProductItems({...props.listProductItems})
    },[props.ListProducts])
    console.log('List product rerender...')

    return(
        <div className="list-products">
            <h1 style={{textAlign: 'center'}}>PRODUCT MANAGEMENT</h1>
            <div className='content'>
                {   
                    props.formProductIsOpen && <FormProductInfo productItem={productItem} buttonText={buttonText}/>
                }
                <div className='filter-form'>
                    <div className='type-filter'>
                        <select 
                            className='form-control-filter' 
                            value={type} 
                            onChange={onSelectChange}
                        >
                            <option value="Type" hidden>Type</option>
                            <option value="Trà tươi">Trà tươi</option>
                            <option value="Trà túi lọc">Trà túi lọc</option>
                            <option value="Trà khô">Trà khô</option>
                        </select>
                        
                        {   
                            selectChanged && <MdOutlineClose onClick={handleClickIconClose} className='icon-close'/>
                        }
                    </div>
                    <DatePicker
                        className='form-control-filter'
                        selected={ startDate }
                        onChange={ handleStartDateChange }
                        name="startDate"
                        dateFormat="dd/MM/yyyy"
                        placeholderText='Start Date'
                    />
                    <DatePicker
                        className='form-control-filter'
                        selected={ endDate }
                        onChange={ handleEndDateChange }
                        name="endtDate"
                        dateFormat="dd/MM/yyyy"
                        placeholderText='End Date'
                    />
                    {/* <div className='icon-search'>
                        <MdSearch onClick={_clickSearch} fontSize="1.2rem"/>
                    </div> */}
                </div>
                {/* <div className='icon-add'>
                    <MdAddToPhotos fontSize="1.2rem" style={{cursor: 'pointer'}}
                        onClick={handleClickAddProduct}
                    />
                </div> */}
                <ControlPanel/>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    

                    <tbody>
                        {
                            props.listProductItems.content && props.listProductItems.content.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td style={{width:'50px'}}>{index + 1}</td>
                                        <td style={{width:'200px'}}>{item.product.name}</td>
                                        <td style={{width:'100px'}}>{item.price}</td>
                                        <td style={{width:'200px'}}>{item.product.description} </td>
                                        <td style={{width:'300px'}}>{item.product.productImage}</td>
                                        {/* <td>
                                            <MdEdit fontSize="1.2rem"
                                                style={{marginRight: '10px', cursor: 'pointer'}}
                                                onClick={() => handleClickEdit(item)}
                                            />
                                            <MdOutlineDeleteForever onClick={handleClickDelete(item)} fontSize="1.2rem"
                                                style={{marginLeft: '10px', cursor: 'pointer'}}
                                            />
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                <div className='paging'>
                    {/* <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    /> */}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.product.isLoading,
        listProductItems: state.product.productItemList,
        formProductIsOpen: false
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        getListProductItems: () => {
            dispatch(productActions.getListProductItems());
        },
        addProduct: product => {
            dispatch(productActions.addProduct(product))
        },
        updateProduct: (product,file) =>{
            dispatch(productActions.updateProductInfo(product,file))
        },
        deleteProduct: product => {
            dispatch(productActions.deleteProduct(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(WithLoading(ListProducts));

