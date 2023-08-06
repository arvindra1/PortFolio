import React from 'react'
import { Row, Col, Carousel } from 'antd'
import Port from '../Components/Port'

function Portfolio() {
    return (
        <div>
            <section id="portfolio">
                <p className='textd text-center'>My Latest Project</p>
                <p className='text-center'>There are many projects that I have done.</p>
                <div className='container'>

                    <Carousel autoplay arrows >
                        <div >
                            <Row justify='center' gutter={[8, 32]}>

                                <Col xs={20} sm={8} md={8} lg={10} xl={7}>
                                    <Port />
                                </Col>
                                <Col xs={20} sm={8} md={8} lg={10} xl={7}>
                                    <Port />
                                </Col>
                                <Col xs={20} sm={8} md={8} lg={10} xl={7}>
                                    <Port />
                                </Col>

                            </Row>
                        </div>
                        <div>
                            <Row justify='center' gutter={[8, 32]}>

                                <Col xs={20} sm={8} md={8} lg={8} xl={7}>
                                    <Port />
                                </Col>
                                <Col xs={20} sm={8} md={8} lg={8} xl={7}>
                                    <Port />
                                </Col>
                                <Col xs={20} sm={8} md={8} lg={8} xl={7}>
                                    <Port />
                                </Col>

                            </Row>
                        </div>
                        <div>
                            <Row justify='center' gutter={[8, 32]}>

                                <Col xs={20} sm={8} md={8} lg={8} xl={7}>
                                    <Port />
                                </Col>
                                <Col xs={20} sm={8} md={8} lg={8} xl={7}>
                                    <Port />
                                </Col>
                                <Col xs={20} sm={8} md={8} lg={8} xl={7}>
                                    <Port />
                                </Col>

                            </Row>
                        </div>

                    </Carousel>

                </div>

            </section>
        </div>
    )
}

export default Portfolio