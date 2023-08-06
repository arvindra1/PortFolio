import React, { useEffect } from 'react';
import bgImage from '../assets/bg3.png';
import $ from 'jquery'; // Import jQuery
import 'jquery.ripples';
import './Text.css';

// import { Typography } from "antd";
import './Home.css';
import Typewriter from 'typewriter-effect';
import { Typography } from 'antd';
const { Text } = Typography;



const Home = () => {
  useEffect(() => {
    // Initialize the jquery.ripples plugin after the component mounts
    $('.bgimage').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });

    // Clean up the plugin instance when the component unmounts
    return () => {
      $('.bgimage').ripples('destroy');
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <section className="bgimage" id="home">
      <div className="container-fluid d-flex">
        <div className="row justify-content-start">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 mx-3 hero-text" style={{fontFamily:'system-ui'}}>
            <h1 className="hero_title">Hi, I’m Arvindra  
            <br/>
            <p>
              <span style={{color:'#F0094D'}} className='textdb'>
                <Typewriter
                  options={{
                    strings: ['Web App', 'UX/UI' ,'Mobile App' ,],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              </p>
            </h1>
            <h2>based in Noida</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
