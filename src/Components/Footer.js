import React from "react";
import { Col, Layout,Row } from "antd";
import './Social.css'; // Assuming you have defined the styles for the social icons in the Social.css file

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer id="footer" style={{ textAlign: "center" }}>
    <Row justify="center">
    <Col xs={20} sm={8} md={8} lg={8} xl={7}>
    <div class="social-container">
    <ul class="social-icons">
        <li><a href="https://instagram.com/arav_ranku01?igshid=NGExMmI2YTkyZg==" target="_blank"><i class="fa fa-instagram"></i></a></li>
        <li><a href="https://twitter.com/just_arvindra?t=KDkUnT-kFkuN5OnVpwkR3A&s=08"  target="_blank"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/arvindra-ahirwar-41b3441b7"  target="_blank"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/arvindra1"  target="_blank"><i class="fa fa-github"></i></a></li>
    </ul>
    </div>
    </Col>
    </Row>
      <p className="text-white">Your Portfolio ©{new Date().getFullYear()} Created by Arvindra</p>
    </Footer>
  );
};

export default AppFooter;
