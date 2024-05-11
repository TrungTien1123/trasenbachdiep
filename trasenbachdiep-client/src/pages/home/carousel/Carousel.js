import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../images/trangchu/banner.png'
import banner01 from '../../../images/Gioithieu/banner.png'
import { Link } from 'react-router-dom';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
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
  );
}

export default ControlledCarousel;