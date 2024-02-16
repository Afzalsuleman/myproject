import React from 'react'
import './SideSlider.scss'
import { Menu } from 'antd'
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserDeleteOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
function SideSlider() {
    const navigate=useNavigate()
  return (
    <div className='slider'>
    <Menu onClick={(items) =>{
        navigate(items.key)
    }}
    items={[
            {
                label: "Dashboard",
                icon: <AppstoreOutlined/>,
                key: "/dashboard"
                },
                {
                label: "Practice Insight",
                icon: <ShopOutlined/>,
                key: "/Practice Insight"
                },
                {
                label: "Practice Devlopment",
                icon: <ShoppingCartOutlined/>,
                key: "/Practice Devlopment"
                },
                {
                label: "Practice valuation",
                icon: <ShopOutlined/>,
                key: "/Practice valuation"
                },
                {
                label: "Practice Ai",
                icon: <UserDeleteOutlined/>,
                key: "/Practice Ai"
                },
                {
                label: "Admin",
                icon:<UserOutlined/>,
                key: "/Admin"
                },
        ]}>

    </Menu>
    </div>
  )
}

export default SideSlider