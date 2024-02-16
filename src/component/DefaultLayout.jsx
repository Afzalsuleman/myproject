import React from 'react'
import {Layout} from 'antd'
import SideSlider from './SideSlider';
import Component from './Component';
import Header from './Header';
import Footer from './Footer';
import "./DefaultLayout.scss";
import { Col, Row } from 'react-bootstrap';
// const {Header,Footer,Sider,Content}=Layout;
function DefaultLayout() {
  return (
    <Layout className='mai-dashboard'>
    <Row>
    <Col md={2} sm={12}>
        <SideSlider/>
    </Col>
    <Col md={10} sm={12}>
        <Layout>
            <Header />
                <Component/>
                <Footer/>
            </Layout>
    </Col>
    </Row>  
    </Layout>
  )
}

export default DefaultLayout