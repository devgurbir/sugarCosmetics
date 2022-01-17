import { SocialIcons } from "./SocialIcons/SocialIcons";
import Box from "@mui/material/Box";
import styling from "./Footer.module.css";
import NewsLetter from "./NewsLetter/NewsLetter";
import { Information } from "./Information/Information";
import { GetInTouch } from "./GetInTouch/GetInTouch";
import { GetNewApp } from "./GetNewApp/GetNewApp";

const Footer = () => {
  return (
    <>
    
    
    <Box sx={{ backgroundColor: "#000000", padding: "0px", color:"#ffffff", width:"100%", margin:"auto", marginTop:"36px" }}>
      <img
        src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
        style={{ width: "100px", height: "100px" }}
        alt="sugar"
      />
      <SocialIcons />
      <Box sx={{display:"flex",flexDirection:"row", gap:"6%", marginLeft:"60px"}}>
      <NewsLetter />
      <GetNewApp />
      </Box>
      <Information />
      <GetInTouch /><br/>
      <hr/><br/>
      <p>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
      <br/><br/>
    </Box>
    </>
  );
};

export { Footer };
