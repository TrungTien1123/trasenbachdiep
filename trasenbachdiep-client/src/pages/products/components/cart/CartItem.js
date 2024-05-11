import cartActions from "../../../../redux/actions/cartActions";
// import { addMore } from "../../redux/reduxModules";
import { connect } from "react-redux";

function CartItem(props) {
    let {cartItem}=props

    const _addMore = productItem => {
        props.addMore(productItem);
    }

    return(
        <div className="mini-cart-item">
            <div className="cartItem-img">
                <img src={cartItem.productItem.productImage} alt=""/>
                <button>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="cartItem-box">
                <div className="cartItem-boxInfo">
                    <h3 className="cartItem-infoName">{cartItem.productItem.product.name}</h3>
                    <div className="cartItem-infoPrice">
                        <p className="cartItem-newPrice">{cartItem.productItem.price}đ</p>
    
                    </div>
                </div>
                <div className="cartItem-itemOption">
                    <p className="cartItem-option">100g</p>
                    <div className="cartItem-btnQuantity">  
                        <button><i className="fa-solid fa-minus"></i></button>
                        <p className="quantity-text">{cartItem.qty}</p>
                        <button onClick={()=>_addMore(cartItem)}><i className="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
  
});
const mapDispatchToProps = (dispatch, props) => {
    return{
        addMore: productItem => {
            dispatch(cartActions.addMore(productItem))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem);