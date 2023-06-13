import React, { useState } from "react";
import { ISlideConfig, PageSlides, SlideParallaxType } from "@re_point/react-page-slides";
import Intro from "./screens/Intro";
import Project from "./screens/Project";
import './MainPage.css'

interface MainPageProps {
  index: number;
  onButtonClick: (index: number) => void;
}

export const MainPage = ({ index, onButtonClick }: MainPageProps) => {


  const [currentSlideIndex, setCurrentSlideIndex] = useState(index);


  const handleButtonClick = (index: number) => {
    setCurrentSlideIndex(index);
    if (onButtonClick) {
      onButtonClick(index);
    }
  };

  const slides: ISlideConfig[] = [
    {
      content: (
        <div>
          <Intro onButtonClick={handleButtonClick} handlNav={function (): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      ),
      style: {
        backgroundImage: 'url("https://i.ibb.co/82Hp4JS/Pngtree-aesthetic-brown-abstrac-background-1660103.jpg")',
      },
    },
    {
      content: <div><Project/></div>,
      style: {
        
       
        backgroundColor:"	#596633",
        backgroundRepeat:'',
        position:"absolute",
        
      },
    
    },
    
  ];

  return (
    <>
      <PageSlides
        
        currentSlideIndex={currentSlideIndex}
        enableAutoScroll={true}
        transitionSpeed={1000}
        slides={slides}
        parallax={{
          offset: 0.6,
          type: SlideParallaxType.reveal,
        }}
      />
    </>
  );
};
