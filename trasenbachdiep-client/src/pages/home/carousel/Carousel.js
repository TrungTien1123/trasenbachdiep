import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../images/trangchu/banner.png'
import banner01 from '../../../images/Gioithieu/banner.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const StyledCarousel = styled.div `
.carousel-indicators{
  margin-bottom: -3rem;
}
.carousel-indicators [data-bs-target] {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 3px solid #aabc44;
}

.carousel-indicators .active {
  background-color:#aabc44 ;
}
.carousel-control-prev-icon, .carousel-control-next-icon {
  background-color: #ab4;
  border-radius: 100%;
  opacity: .8;
}
.carousel-caption{
  top: 15%;
  left: 18%;
  width: 35%;
}
.carousel-caption p{
  width: 70%;
  font-size: 1.2rem;
  text-align: justify;
}
.carousel-item {
  height: 546px
}
.carousel-item h5{
  font-size: 2rem;
  color: #000;
  font-family: 'SVNAthena';
}
.carousel-item h4, .intro-caption h1{
  font-size: 6rem;
  color: #43782b;
  font-family: 'SVNArtfulbeauty';
  height: 5.5rem;
}
.carousel-item .btn, .intro-caption .btn{
  background-color: #aabc44;
  width: 11rem;
  left: 0%;
}
.carousel-item .btn a, .intro-caption .btn a{
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  box-sizing: content-box;
  text-decoration: none;
}  

`
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <StyledCarousel>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img className="d-block w-100" src={banner} alt="First slide"/>
        <Carousel.Caption>
                    <h5 className="text-left">TRÀ SEN TÂY HỒ</h5>
                    <h4 className="text-center">Tinh hoa trà Việt</h4>
                    <p className="text-justify">Trà là món quà tuyệt vời của tạo hóa và thiên nhiên ban tặng giúp người thưởng thức cảm thấy thư thái khi thưởng thức. </p>
                    <div className="btn position-absolute">
                    <Link to={'/products'}> THỬ NGAY</Link>                      
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={banner01} alt="First slide"/>
      <Carousel.Caption>
                    <h5 className="text-left">TRÀ SEN TÂY HỒ</h5>
                    <h4 className="text-center">Tinh hoa trà Việt</h4>
                    <p className="text-justify">Trà là món quà tuyệt vời của tạo hóa và thiên nhiên ban tặng giúp người thưởng thức cảm thấy thư thái khi thưởng thức. </p>
                    <div className="btn position-absolute">
                    <Link to={'/products'}> THỬ NGAY</Link>                      
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={banner} alt="First slide"/>
      <Carousel.Caption>
                    <h5 className="text-left">TRÀ SEN TÂY HỒ</h5>
                    <h4 className="text-center">Tinh hoa trà Việt</h4>
                    <p className="text-justify">Trà là món quà tuyệt vời của tạo hóa và thiên nhiên ban tặng giúp người thưởng thức cảm thấy thư thái khi thưởng thức. </p>
                    <div className="btn position-absolute">
                    <Link to={'/products'}> THỬ NGAY</Link>                      
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </StyledCarousel>
  );
}

export default ControlledCarousel;