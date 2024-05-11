import {connect} from 'react-redux'
import { Cart,addToCart } from '../../../redux/reduxModules';
import rating from '../../../images/Chitietsanpham/rating.png'



function productDetails(props){
    let {productItem, Cart,addToCart}=props;
    return(
        <div className="product position-relative pt-5">
            <div className="rating">
                <img src={rating} alt=""/>
            </div>
            <div className="badges position-absolute">
                <span>New</span>
            </div>
            <div>
                <img src={productItem.productImage} alt=""/>
            </div>
            <div className="detail">
                <button /*onClick={()=>addToCart(productItem)}*/>Thêm vào giỏ</button>
                <h4 className="text-center">{productItem.product.name}</h4>
                <div className="product-information d-flex justify-content-center">
                    <div className="price d-flex">
                    <h4>{productItem.price}</h4><span className="currency-unit">VND</span>
                    </div>
                    <select className="ps-2" name="weight" id="weight">
                        <option value="100g">100g</option>
                        <option value="200g">200g</option>
                        <option value="500g">500g</option>
                        <option value="1kg">1kg</option>
                    </select>
                </div>
            </div>
    </div>
        
    )
}
const mapDispatchToProps = {/*Cart,addToCart*/}
export default connect(null,mapDispatchToProps)(productDetails);