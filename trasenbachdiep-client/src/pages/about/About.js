import banner from "../../images/Gioithieu/banner.png"
import title from "../../images/Gioithieu/title.png"
import post01 from "../../images/Gioithieu/post01.png"
import post02 from "../../images/Gioithieu/post02.png"
import "./gioithieu.css"


function About(){
    return(
        <div>
            <div className="content pb-5">
                    <img className="position-relative" src={banner} alt="banner"/>
                <div className=" about-title position-absolute">
                    <img className="" src={title} alt="Title"/>
                </div>
                <div className="about col-8 m-auto pb-5">
                    <h2 className="text-center">GIỚI THIỆU</h2>
                    <p className="pt-3 text-justify">Trà Sen Bách Diệp không chỉ là một sản phẩm, mà còn là một biểu tượng của sự tinh tế và văn hóa truyền thống của Việt Nam. Với hơn một thập kỷ hoạt động trong ngành công nghiệp trà, thương hiệu này đã ghi dấu ấn bằng những sản phẩm chất lượng và uy tín. Hãy cùng khám phá hơn về hương vị đặc biệt và giá trị của trà Sen Bách Diệp.</p>
                    <p className="pt-3 text-justify">Sức hút lớn nhất của trà Sen Bách Diệp chính là chất lượng không gì có thể phủ nhận. Thương hiệu này chú trọng vào việc lựa chọn những lá sen tươi mát từ những vùng trồng sen uy tín tại Việt Nam. Qua quy trình chế biến kỹ lưỡng, từ việc lựa chọn, xử lý đến đóng gói, mỗi tách trà Sen Bách Diệp đều mang trong mình hương vị và mùi thơm tự nhiên, làm say đắm bất kỳ ai từ lần đầu thưởng thức.</p>
                    
                    <img src={post01} alt=""/>   
                    <p className="pt-3 text-justify">Thương hiệu trà Sen Bách Diệp không chỉ được khẳng định qua uy tín mà còn được vinh danh thông qua nhiều giải thưởng uy tín trong ngành công nghiệp trà. Sự cam kết về chất lượng và sự nỗ lực không ngừng đã giúp thương hiệu này chiếm được lòng tin của khách hàng, từng bước khẳng định vị thế của mình trên thị trường.</p>
                    <p className="pt-3 text-justify">Không ngừng đổi mới và sáng tạo, trà Sen Bách Diệp mang đến cho khách hàng một loạt các sản phẩm đa dạng từ trà sen truyền thống đến các loại trà pha trộn độc đáo. Bất kỳ ai cũng có thể tìm thấy một hương vị phản ánh cá tính và sở thích riêng của mình trong danh mục sản phẩm của thương hiệu này.
                    </p>

                    <img src={post02} alt=""/>   
                </div>
            </div>
        </div>
    )
}

export default About;