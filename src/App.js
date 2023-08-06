import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Layout } from "antd";
import Home from "./Pages/Home";
import Header1 from "./Components/Header";
import AppFooter from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

// import Home from "./Pages/Home";
// import AppHeader from "./Components/Header";
// import AppFooter from "./Components/Footer";
// import About from "./Pages/About";
// import Resume from "./Pages/Resume";
// import Services from "./Pages/Services";
// import Portfolio from "./Pages/Portfolio";

// const { Content } = Layout;

const App = () => {
  return (
    // <Router>
    //   <Layout>
    //     <AppHeader />
    //     <Content className="content">
    //       <Routes>
    //         {/* <Route exact path="/about" element={<About/>} />
    //         <Route exact path="/resume" element={<Resume/>} />
    //         <Route exact path="/services" element={<Services/>} />
    //         <Route exact path="/portfolio" element={<Portfolio/>} /> */}
    //         <Route exact path="/" element={<Home/>} />
    //       </Routes>
    //     </Content>
    //     <AppFooter />
    //   </Layout>
    // </Router>
    <div>
    <Header1/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <AppFooter/>
    </div>
  );
};

export default App;
