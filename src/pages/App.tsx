import React from "react";
import {useLocation} from 'react-router-dom'
import { Layout } from 'antd';
import Router from "../router";
import Menus from "../menus";
import Head from "./head";
import './App.css'

const { Header, Sider, Content } = Layout;
function App() {
  const location = useLocation()
  const { pathname } = location
  console.log('pathname', pathname);
  const headerStyle = {
    width:window.screen.width,
    color: '#fff',
    backgroundImage: `url(${'https://img0.baidu.com/it/u=896097389,2049594816&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'})`,
    backgroundSize: '100%',
  }
  const mainStyle = {
    height:window.screen.height-64,
    width:200,
  }
  return (
    <>
     <Layout>
      <Header className="header" style={headerStyle}><Head/></Header>
      <Layout style={mainStyle}>
        <Sider><Menus/></Sider>
        <Content style={{width:window.screen.width-200}} ><Router /></Content>
      </Layout>
    </Layout>
    </>
  );
}

export default App;
