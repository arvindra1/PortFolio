import React from 'react';
import { Form, Input, Button, Image, InputNumber} from 'antd';
import earthImage from '../assets/message.png'
import { message } from 'antd';
import axios from 'axios';
import './Text.css';

const ContactForm = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    // Submit the form data to your backend server using axios or any other HTTP client
    axios.post('https://getform.io/f/7c4aab2e-9a04-4437-b751-9ba640ed6c19', values)
      .then((response) => {
        console.log(response.data);
         messageApi.open({
      type: 'success',
      content: 'Message sent successfully!',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
      })
      .catch((error) => {
        console.error(error);
        messageApi.open({
          type: 'error',
          content: 'Failed!',
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
      });
  });
}

  return ( 
    <div id='contact' className="rn-contact-area ptb--120 bg_color--2 my-4">
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <p className="textd ">Hire Me.</p>
                <p className="description">
                  I am available for freelance work. Connect with me via phone:{' '}
                  <a href="tel:+917651853228">+917651853228</a> or email:{' '}
                  <a href="mailto:kumararvindra228@gmail.com">kumararvindra228@gmail.com</a>{' '}
                </p>
              </div>
              <div className="form-wrapper">
                <Form name="contact-form" onFinish={onFinish}>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                  >
                    <Input placeholder="Your Name *" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!',
                      },
                    ]}
                  >
                    <Input placeholder="Your email *" />
                  </Form.Item>
                  <Form.Item name="Mobile No:"
                  rules={[
                      {
                        required: true,
                        type: 'number',
                        message: 'Please enter a valid number!',
                      },
                    ]}
                    
                  >
                    <InputNumber style={{width:'100%'}}  placeholder="Contact*" />
                  </Form.Item>
                  <Form.Item name="message">
                    <Input.TextArea rows={5} placeholder="Your Message" />
                  </Form.Item>
                  {contextHolder}
                  <Form.Item>
                    <Button className="rn-button-style--2 btn-solid" type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
               {/* image  */}
               <Image src={earthImage}
               preview={false}/>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
