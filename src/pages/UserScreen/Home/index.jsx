import "antd/dist/antd.css";
import styles from "./Home.module.scss";

import { Outlet } from "react-router-dom";
import { Row, Col } from "antd";

import TopBar from "../../../components/TopBar";
import Category from "../../../components/Category";

function Home() {
  return (
    <div>
      <TopBar />
      <Row gutter={10} className={styles.content}>
        <Col span={6}>
          <Category />
        </Col>

        <Col span={18}>DTHDTH</Col>
      </Row>
    </div>
  );
}

export default Home;
