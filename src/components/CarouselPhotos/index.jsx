import "antd/dist/antd.css";
import styles from "./CarouselPhotos.module.scss";
import { Carousel, Row, Col } from "antd";

import Image1 from "../../assets/vectors/image 1.png";
import Image2 from "../../assets/vectors/image 2.png";

function CarouselPhotos() {
  return (
    <Row gutter={[8, 7]}>
      <Col span={24}>
        <Carousel autoplay>
          <img src={Image1} alt="Image 1" />
          <img src={Image1} alt="Image 2" />
          <img src={Image1} alt="Image 3" />
        </Carousel>
      </Col>
      <Col span={8}>
        <img src={Image2} alt="Image 1" />
      </Col>
      <Col span={8}>
        <img src={Image2} alt="Image 2" />
      </Col>
      <Col span={8}>
        <img src={Image2} alt="Image 3" />
      </Col>
    </Row>
  );
}

export default CarouselPhotos;
