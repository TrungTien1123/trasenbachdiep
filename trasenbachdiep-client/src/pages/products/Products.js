import banner from "../../images/Sanpham/Banner.png"
import ProductLeft from "./components/productLeft"
import ProductRight from "./components/productRight";
import './sanpham.css'
// import './Sanpham-Responsive.css'
import Cart from "../cart/Cart"

function Products(){
    return(
        <div>
           <section>
                <div class="banner">
                    <img class="position-relative" src={banner} alt=""/>
                    <div class="title position-absolute">
                        <h1>SẢN PHẨM</h1>
                    </div>
                </div>
                <div class="content col-8 m-auto pt-4">
                    <p class="direction blur">Trang chủ {">"} Sản phẩm</p>
                    <h2>Sản phẩm</h2>
                    <hr/>
                    <div class="main-content d-flex justify-content-between">
                         <ProductLeft/>
                         <ProductRight/>   
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Products;