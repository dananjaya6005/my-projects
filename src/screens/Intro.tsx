import React from "react";
import background from "../components/images.jpg";
import "./intro.css";
import Tag from "../components/Tag";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import "react-awesome-button/dist/styles.css";
import profile_pic from "../images/new dp.jpg";

interface IntroProps {
  onButtonClick: (index: any) => void;
  handlNav: () => void;
}

function Intro({ onButtonClick, handlNav }: IntroProps) {
  const handleButtonClick = (index: any) => {
    if (onButtonClick) {
      onButtonClick(index);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg_body">
        <div>
          <div className="divde-top-content">
            <img className="test" src={profile_pic} alt="Logo" />

            <div className="manage_head_and_sub_text">
              <h1 className="head_txt">
                Explore my collection of software projects
              </h1>
              <div className="head_info">
                <h3 className="sub_text">
                  Discover my journey in software development as I explore the
                  world of mobile and web app development using React Native.
                  Follow along as I learn and grow my skills in frontend and
                  backend handling, and see the exciting projects I’m working on
                </h3>
              </div>

              <div className="tag_handle">
                <Tag color="#774360" name="React Native" />
                <Tag color="#774360" name="React js " />
                <Tag color="#774360" name="Typescript" />
                <Tag color="#774360" name="Redux" />
                <Tag color="#774360" name="Node js" />
                <Tag color="#774360" name="Aws Amplify" />
                <Tag color="#774360" name="Graphql" />
                <Tag color="#774360" name="MongoDB" />
              </div>
            </div>
          </div>
        </div>

        <div className="get_start_btn">
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "#596633",
              padding: "14px 28px",
              fontSize: "17px",
            }}
            variant="contained"
            onClick={handlNav}
          >
            Get started
          </Button>

          <div style={{ width: "40px" }} />

          <Button
          href='https://drive.google.com/file/d/1jzcdcieol6wcFP4qPcN0IJU0uKHp8Fy3/view?usp=sharing'
          target="_blank"
            variant="outlined"
            style={{
              borderColor: "#596633",
              borderRadius: 35,
              fontWeight: "700",
              borderWidth: "2px",
              color: "#596633",
            }}
          >
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
}

export default Intro;
