import React from 'react'
import { Card, Col, Row,Divider} from 'antd';
import { BiSolidBlanket } from "react-icons/bi";
import { SiAdobeindesign, SiProbot, SiAntdesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { IoLogoDesignernews } from "react-icons/io";
import { FcMultipleDevices } from "react-icons/fc";
import { MdOutlineAnimation } from "react-icons/md";
import Cardp from '../Components/Cardp';
import './Text.css'

function Services() {

  return (
    <div>
      <section id="services">
        <div className="container pt-4">
        <p className='textd text-center'>Services</p>
          <p className='text-center'>What I provide.</p>
          <Row gutter={[20, 20]}>

            <Col xs={24} sm={12} md={12} lg={10} xl={8}>

              <Cardp icon={<CgWebsite />} names='Web Development' description="Your digital storefront matters, and our website design and development services ensure visually stunning, user-friendly, and responsive websites. We blend creativity with functionality to effectively communicate your message." />
            </Col>
            <Col xs={24} sm={12} md={12} lg={10} xl={8}>
              <Cardp icon={<FcMultipleDevices />} names='App Development' description="Your digital storefront matters, and our website design and development services ensure visually stunning, user-friendly, and responsive websites. We blend creativity with functionality to effectively communicate your message." />
            </Col>
            <Col xs={24} sm={12} md={12} lg={10} xl={8}>
              <Cardp icon={<SiAntdesign />} names='UX/UI Design' description="A customer-centric approach lies at the core of our UX/UI design services. We create exceptional user experiences through intuitive interfaces and beautiful designs, ensuring every interaction is memorable." />
            </Col>

            <Col xs={24} sm={12} md={12} lg={10} xl={8}>
              <Cardp icon={<SiProbot />} names='Robotics' description="Step into the future with our robotics solutions that optimize processes, increase efficiency, and enhance safety in various industries. Our expert team develops custom robots and autonomous systems that push technological boundaries." />
            </Col>
            <Col xs={24} sm={12} md={12} lg={10} xl={8}>
              <Cardp icon={<IoLogoDesignernews />} names='Graphics Design' description="Empower your brand with captivating visuals through our graphics design and animation services. From logo design to marketing collateral, we craft designs that evoke emotions and add interactivity to your content." />
            </Col>
            <Col xs={24} sm={12} md={12} lg={10} xl={8}>
              <Cardp icon={<MdOutlineAnimation />} names='Animation Design' description="Adding animated elements to your digital content can significantly enhance its visual appeal and engagement. Our animation services bring your ideas to life through captivating animations, motion graphics." />
            </Col>
          </Row>

        </div>

      </section>
    </div>
  )
}

export default Services