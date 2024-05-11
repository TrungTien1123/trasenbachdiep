import {connect} from 'react-redux';
import { useEffect, useState } from 'react'
import ProductDetails from "./productDetails";
import productActions from '../../../redux/actions/productActions';
const ProductRight = (props)=> {
    const[productItems,setProductItems] = useState([])
    useEffect(() => {
        //Get products 
        props.getListProductItems();
        setProductItems(props.listProductItems)
        console.log(productItems);
    }, [])
    useEffect(()=>{
        setProductItems({...props.listProductItems})
    },[props.ListProductItems])
    return(
        <div className="right-block col-9 p-0 ">
                            <div className="arrange">
                                <select className="p-1">
                                    <option value="1">Thứ tự mặc định</option>
                                    <option value="2">Giá thấp đến cao</option>
                                    <option value="3">Giá cao đến thấp</option>
                                    <option value="4">Xếp theo đánh giá</option>
                                    <option value="5">Xếp theo phổ biến</option>
                                </select>
                            </div>
                            <div className="list-products d-flex justify-content-between flex-wrap">
                                {
                                   props.listProductItems.content && props.listProductItems.content.map(item=><ProductDetails key={item.id} productItem={item}/>)
                                }
                            </div>
                            <div className="list-pages d-flex justify-content-between m-auto pb-5 pt-5">
                                <div className="pages text-center">1</div>
                                <div className="pages text-center">2</div>
                                <div className="pages text-center">3</div>
                                <div className="pages text-center">4</div>
                                <div className="pages text-center">{">"}</div>
                            </div>
                        </div>
    )
}

const mapStateToProps = state =>({
    listProductItems:state.product.productItemList,
})
const mapDispatchToProps = (dispatch, props) => {
    return{
        getListProductItems: () => {
            dispatch(productActions.getListProductItems());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductRight);