import React from "react";
import { Typography } from "@mui/material";

export default function MyPageA() {
  return (
    <>
    <div>
      <h1>สวัสดีชาวโลก Hello World</h1></div>
      
      <Typography variant="h4">
        สวัสดีชาวโลก Hello World
      </Typography>
      <hr />
      {/* <div style="color: red; font-size: 40px"}> */}
      <div style={{ color:'red', fontSize: "40px", marginLeft: '100px' }}>
        สวัสดีชาว IoT
      </div>
      <Typography sx={{ color: "red", fontSize: "40px", ml: "100px" }}>
        สวัสดีชาว IoT
      </Typography>
    </>
  );
}
