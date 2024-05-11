import banner from'../../images/trangchu/banner.png'
import product01 from "../../images/trangchu/product01.png"
import product02 from "../../images/trangchu/product02.png"
import product03 from "../../images/trangchu/product03.png"
import product04 from "../../images/trangchu/product04.png"

import phone from "../../images/trangchu/phone.png"
import nextleft from "../../images/trangchu/next-left.png"
import nextright from "../../images/trangchu/next-right.png"
import listback from "../../images/trangchu/list-product-back.png"
import person01 from "../../images/trangchu/person01.png"
import person02 from "../../images/trangchu/person02.png"
import person03 from "../../images/trangchu/person03.png"
import person04 from "../../images/trangchu/person04.png"
import person05 from "../../images/trangchu/person05.png"

import './trangchu.css'
import ControlledCarousel from './carousel/Carousel'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
        <ControlledCarousel className="carousel-home"/>
        <div className="content-home pt-5 ">
            <div className="signature pt-5 col-8 m-auto ">
                <h2 className="text-center title">SẢN PHẨM NỔI BẬT</h2>
                <div className="list-product justify-content-between d-flex pt-4 position-relative">
                    <div className="product">
                        <img src={product01} alt=""/>
                        <h5 className="text-center pt-3">TRÀ ƯỚP BÔNG SEN</h5>
                    </div>
                    <div className="product">
                        <img src={product02} alt=""/>
                        <h5 className="text-center pt-3">TRÀ ƯỚP NHỊ SEN</h5>
                    </div>
                    <div className="product">
                        <img src={product03} alt=""/>
                        <h5 className="text-center pt-3">TRÀ Ô LONG</h5>
                    </div>
                    <div className="product">
                        <img src={product04} alt=""/>
                        <h5 className="text-center pt-3">TRÀ SHAN TUYẾT</h5>
                    </div>
                <img className="btn-left position-absolute" src={nextleft} alt=""/>
                <img className="btn-right position-absolute" src={nextright} alt=""/>
                <img className="list-product-back position-absolute" src={listback} alt=""/>
                </div>
               
            </div>
            <div className="introduction position-relative">
                <div className="intro-content">
                    <h2 className="intro-title text-center title">GIỚI THIỆU</h2>
                    <div>
                        <div className="intro-caption d-none d-md-block ">
                            <h1 className="">Trà sen Bách Diệp</h1>
                            <p className="intro-infor text-justify">
                            Trà sen bách diệp, với hương thơm dịu dàng và vị tinh tế, 
                            là biểu tượng của sự thanh nhã và sự tinh tế trong ẩm thực trà. 
                            Với hương thơm dịu nhẹ, vị thanh mát, nó làm say đắm lòng người, mang lại cảm giác bình yên và thư thái.
                            </p>
                            <div className="btn">
                                <Link to={'/about'}> ĐỌC THÊM</Link>                       
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact position-absolute d-flex">
                    <div className="phone"><img src={phone} alt=""/></div>
                    <div className="phone-number"> <h4>9999.999.999</h4></div>
                </div>
            </div>
            <div className="about-us ">
                <div className="about-us-content pt-5 col-8 m-auto">
                    <h2 className="text-center title">NGHỆ NHÂN TRÀ ĐẠO</h2>
                    <div className="list-person d-flex justify-content-between pt-5">
                        <div className="person">
                            <img src={person01} alt=""/>
                            <h4 className="text-center">TS. Trương Huy Hoàng</h4>
                            <p className="text-center">
                            Một chuyên gia sành sỏi về lịch sử ra đời, khoa học và nghệ thuật của trà.</p>
                        </div>
                        <div className="person">
                            <img src={person02} alt=""/>
                            <h4 className="text-center">NSND. Lại Gia Huy</h4>
                            <p className="text-center">
                            Sự sáng tạo của ông không chỉ nằm ở việc tạo ra những loại trà mới mẻ mà còn là trong cách kết hợp hương vị độc đáo                            </p>
                        </div>
                        <div className="person">
                            <img src={person03} alt=""/>
                            <h4 className="text-center">NSND. Vũ Thị Anh Thư</h4>
                            <p className="text-center">
                            Nghệ nhân có 40 năm kinh nghiệm trồng và chăm sóc những giống trà quý hiếm
                            </p>
                        </div>
                        <div className="person">
                            <img src={person04} alt=""/>
                            <h4 className="text-center">TS. Nguyễn Quý Hùng</h4>
                            <p className="text-center">
                            Người đã đặt dấu ấn sâu đậm trong nghệ thuật ẩm thực trà bằng sự tinh tế trong việc phối hợp các loại lá trà và hương liệu              </p>
                        </div>
                        <div className="person">
                            <img src={person05} alt=""/>
                            <h4 className="text-center">NSND. Nguyễn Đinh Hoàng Mi </h4>
                            <p className="text-center">
                            Bà là biểu tượng của sự tiên phong và sáng tạo trong phương pháp chế biến trà
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buy pt-5 ">
                <h2 className="text-center pt-5 title">MUA NGAY</h2>
                <div className="form d-flex m-auto justify-content-between pt-5">
                    <input type="text" placeholder="Số điện thoại/Email"/>
                    <div className="btn">
                        GỬI
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;