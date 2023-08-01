import React, { useState } from 'react';
import { AppstoreOutlined, CreditCardOutlined, HomeFilled, MailOutlined, QuestionCircleFilled, QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Button,Input,Modal} from 'antd';
import './Navbar.css';
import logo from '../icon/danalogo.png'

//hadnle modal



const items = [
  {
    label: 'Home',
    className:'customclass',
    key: 'home',
    icon: <HomeFilled />,
  },
  {
    label: 'Experince lab',
    key: 'Experince lab',
    icon: <CreditCardOutlined/>,
    disabled: false,
  },
  {
    label: 'Help',
    key: 'SubMenu',
    icon: <QuestionCircleOutlined/>,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
            disabled : true
          },
          {
            label: 'Option 2',
            key: 'setting:2',
            disabled : true
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        disabled : true
      
      },
      
    ],
  }
];



const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  




  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
  <><div className='head_nav'>

    <div>
    <img src={logo} className='logo'/>
    </div>

      <Menu theme='dark' className='menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{minWidth:'30%'}} />

      <Button onClick={showModal} style={{ backgroundColor: '#B25068' }} type="primary">Contact me  </Button>

      <Modal title="Don’t be shy, say hi! I’m always here to chat 😊 i'm also looking for opportunities" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Email : dananjaya6005@gmail.com</p>
        <p>Mobile : 071 884 3104</p>
        <p>whatsApp : 071 884 3104</p>
        <p>https://www.linkedin.com/in/dananjaya6005/</p>
        
      </Modal>
     

    </div>
   
  
    </>
  
  
  
  );
};
export default Navbar;