import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'

function Footer(){
    return(
        <>
        <div className="footer_bg">
        <p style={{color:"#331a00"}}>© 2023 - 2023 Dhannajaya chathuranga - All Rights Reserved.</p>
        <div className="footer_handle">
            <IconButton>
                <LinkedInIcon />
            </IconButton>

            <div style={{width:"50px"}}></div>

            <IconButton>
                <YouTubeIcon/>
            </IconButton>

            <div style={{width:"50px"}}></div>

            <IconButton>
                <GitHubIcon/>
            </IconButton>

            <div style={{width:"50px"}}></div>

            <IconButton>
                <WhatsAppIcon/>
            </IconButton>
        </div>

        </div>

        
        </>
    );
}

export default Footer;