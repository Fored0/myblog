import React,{useEffect} from "react";
// import {useLocation} from 'react-router-dom'
import { Layout } from 'antd';
import Router from "../router";
import Menus from "../menus";
import Head from "./head";
import './App.css'

const userInfo = {
  name:'王一琦',
  age:22,
  sex:'女',
  role:'student',
  address:'四川省成都市双流区海昌路地铁附近',
  phone:18215589376,
  school:'四川大学锦江学院'
}

const { Header, Sider, Content } = Layout;
function App() {
  // const location = useLocation()
  // const { pathname } = location
  // console.log('pathname', pathname);
  useEffect(()=>{
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
  })
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
