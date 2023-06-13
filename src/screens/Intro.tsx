import React from "react";
import background from "../components/images.jpg";
import './intro.css';
import Tag from "../components/Tag";
import Button from '@mui/material/Button';


import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import test from '../images/new dp.png';


interface IntroProps {
  onButtonClick: (index: any) => void;
  handlNav: () => void;
}





function Intro({ onButtonClick,handlNav}:IntroProps) {

  const handleButtonClick = (index : any) => {
    if (onButtonClick) {
      onButtonClick(index);
    }
  };

  return (
    <>
    

    <div className="bg_body">

  

        <div className="nav">

                        <div className="nav-btn-1">
                        <AwesomeButton  className="nav_btn"  type="secondary" onPress={()=> handleButtonClick(0)}  style={{
                '--button-secondary-color': "#FFDEAD",
                '--button-secondary-color-dark': "#88670C",
                '--button-secondary-color-light': "#655310",
                '--button-secondary-color-hover': "#F7DEBB",
                '--button-secondary-color-active': "#F9D75D",
                '--button-secondary-border' : "#75550f",
                
                }}>Home</AwesomeButton>
                    </div>
                    <div style={{width:30}}></div>


                    <div className="nav-btn-2">
                        <AwesomeButton className="nav_btn" type="secondary" onPress={()=> handleButtonClick(1)} style={{
                '--button-secondary-color': "#FFDEAD",
                '--button-secondary-color-dark': "#88670C",
                '--button-secondary-color-light': "#655310",
                '--button-secondary-color-hover': "#F7DEBB",
                '--button-secondary-color-active': "#F9D75D",
                '--button-secondary-border' : "#75550f", 
                
                }} >Project</AwesomeButton>

                    </div>
                    <div style={{width:30}}></div>


                        <AwesomeButton className="nav_btn" type="secondary" onPress={()=> handleButtonClick(2)} style={{
                '--button-secondary-color': "#FFDEAD",
                '--button-secondary-color-dark': "#88670C",
                '--button-secondary-color-light': "#655310",
                '--button-secondary-color-hover': "#F7DEBB",
                '--button-secondary-color-active': "#F9D75D",
                '--button-secondary-border' : "#75550f",
                
                }}>About</AwesomeButton>

        </div>


   

    <hr className='fade-hr' />

 
    
      <div>
        <div className="divde-top-content">
        <img className="test" src={test} alt="Logo" />

        <div className="manage_head_and_sub_text">
          <h1 className="head_txt">Explore my collection of software projects</h1>
          <div className="head_info">
            <h3 className="sub_text">Discover my journey in software development as I explore the world of mobile and web app development using React Native. Follow along as I learn and grow my skills in frontend and backend handling, and see the exciting projects I’m working on</h3>
          </div>

          <div className="tag_handle">
            <Tag color="#665933" name="React Native"/>
            <Tag color="#665933" name="React js " />
            <Tag color="#665933" name="Typescript" />
            <Tag color="#665933" name="Redux" />
            <Tag color="#665933" name="Node js" />
            <Tag color="#665933" name="Aws Amplify" />
            <Tag color="#665933" name="Web scraping" />
          </div>
          
    

        </div>
        
          

        </div>
        
      </div>

      <div className="get_start_btn">
      <Button style={{
      
        borderRadius: 35,
        backgroundColor: "#596633",
        padding: "14px 28px",
        fontSize: "17px"
    }}variant="contained" onClick={handlNav}>Get started</Button>

    <div style={{width:"40px"}}/>

    <Button variant="outlined"  
      style={{ borderColor:"#596633",
      borderRadius: 35,
      fontWeight:"700",
      borderWidth:"2px",
      color:"#596633"}}>Download CV</Button>
    

      </div>

      </div>

      
      
    </>
  );
}

export default Intro;
