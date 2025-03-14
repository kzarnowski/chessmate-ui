import { Outlet, Link } from 'react-router-dom'
import { Layout as AntdLayout, Menu } from 'antd'
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  OrderedListOutlined
} from '@ant-design/icons';
import { useState } from 'react';

const { Header, Content, Sider } = AntdLayout

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  }
}

const menuItems: MenuItem[] = [
  getItem(<Link to="/">Home</Link>, '1', <HomeOutlined />),
  getItem(<Link to="/tournaments">Tournaments</Link>, '2', <OrderedListOutlined />),
  getItem(<Link to="/profile">Profile</Link>, '3', <UserOutlined />)
]

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout>
      <Header style={{ backgroundColor: "white" }}>
        Title
      </Header>
      <AntdLayout>
        <Sider style={{ backgroundColor: "white" }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu mode="inline" items={menuItems} />
        </Sider>
        <Content style={{ backgroundColor: "white", padding: 16 }}>
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  )
}