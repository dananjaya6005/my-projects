import React from "react";
import example from '../icon/dream_travel.png'
import '../components/CardView.css'
import Button from '@mui/material/Button';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';


const CardView=({projectName,Tool,Discription,Image,link})=>{
    return(
        <>
  
        
        <div className="card_style">
            <h3 className="project_name">{projectName}</h3>
            <img src={Image} width="95%" className="project_img" />
            <p className="project_tool_txt">{Tool}</p>

            <p className="discription">{Discription}</p>

            <Button target="_blank"href={link} className="read_more_btn" size="small" variant="contained" endIcon={<ChromeReaderModeIcon />}>
             Read more
            </Button>

        </div>

        
        




        </>
    );
}
export default CardView;