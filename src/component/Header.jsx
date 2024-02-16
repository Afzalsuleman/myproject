import { Space, Typography } from 'antd'
import {UserOutlined,PoweroffOutlined} from "@ant-design/icons"
import React from 'react'
import './Header.scss'


function Header() {
  return (
    <div className='Header'>
        <Typography.Text> PracIntel Dashboard</Typography.Text>
        <Space>
        <UserOutlined style={{fontSize:24}}/>
        <PoweroffOutlined style={{fontSize:24}}/>
        </Space>
    </div>
  )
}

export default Header