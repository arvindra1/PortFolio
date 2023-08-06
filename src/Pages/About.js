import React from 'react'
import { Row, Col, Card, Button, Tabs } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import exampleImage from '../assets/about.jpg';
import pdfAdd from '../assets/pdf/resume.pdf';
import Modal1 from '../Components/Modal';
import './Text.css'
import Skills from '../Components/Skills';

const About = () => {

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: <b>Main skills</b>,
      children: <><Skills role1="Web Development" role2="App development" role3="Ux/Ui & Robotics" em1="HTML | CSS | JavaScript | React Js" em2="React Native" em3="Figma | Embedded C++ | Python | Ai" /></>,
    },
    {
      key: '2',
      label: <b>Experience</b>,
      children: <Skills role1="STEM Innovation Engineer" role2="Sr.Engineer" em1="Stemrobo Technologies" em2="Stayaa" d1="2022-current" d2="2021-2022" />,
    },
    {
      key: '3',
      label: <b>Education & Certification</b>,
      children: <Skills role1="BCA" role2="Intermediate" em1="Bundelkhand University-Jhansi" role3="High-School" em3='SVM-Mauranipur' em2="SVM-Mauranipur" d1="2022" d2="2019" d3="2017" />,
    },
  ];

  return (
    <section id="about">
      <div className="container pt-4">
        <Row gutter={[32, 32]} justify="center">
          <Col xs={20} sm={20} md={20} lg={10} xl={8}>
            <Card bordered={false} hoverable={false} cover={<img alt="example" src={exampleImage} />} > <Row justify="center" gutter={[8, 8]} ><Col><Modal1/></Col><Col><Button type="primary" icon={<DownloadOutlined />}  href={pdfAdd} target='_blank' >Resume</Button></Col></Row>  </Card>
          </Col>
          <Col xs={20} sm={12} md={12} lg={10} xl={8} style={{ width: '200px' }}>
            <p className="textd text-center">About Me</p>
            <p>I am Arvindra Ahirwar, age 23 years. I have done my graduation in BCA from Bundelkhand University Jhansi, Uttar Pradesh. Having a keep interest in Web development, App Development, Robotics and UI/UX, I work to make WebApp, Android and IoS app using React Native.</p>
            <br />

        
             <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          
            
            <br />

            {/* tabs */}

            {/* <Button type="primary" icon={<DownloadOutlined />} size="large">
              Resume
            </Button> */}

          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About