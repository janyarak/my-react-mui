import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Avatar,
  Rating,
  styled,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  CssBaseline,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FalaFew from "../assets/1697558103063_mr1697558176749.jpg";
import Facebook from "../assets/Sicons-Basic-Round-Social-Facebook.512.png";
import Line from "../assets/line-icon.png";
import X from "../assets/Github-Octicons-X-16.512.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
function MyPageB() {
  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar position="static">
          <Toolbar>
            <FlightTakeoffIcon sx={{ mr: 1.5, color: "#ff0000" }} />
            <Typography
              sx={{
                ml: 2,
                color: "#ffff00",
                fontWeight: "bold",
                fontSize: "1.5rem",
                flexGrow: 1,
              }}
            >
              FalaFew Proflie
            </Typography>
            <Typography sx={{ ml: 2 }}>Chattanon Amprasoet</Typography>
            <Avatar alt="mem" src={FalaFew} sx={{ ml: 2 }} variant="rounded" />
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="omo"
          src={FalaFew}
          variant="rounded"
          sx={{
            width: 200,
            height: 200,
            mx: "auto",
            border: "2px solid #fff080",
            p: 2,
          }}
        />
        <Typography
          sx={{ mt: 2 }}
          color="#000000"
          fontSize={"2rem"}
          fontWeight={"bold"}
        >
          ฉัตรตนนท์ อำประเสริฐ
        </Typography>
        <Typography
          sx={{ mt: 1 }}
          color="#fff080"
          fontSize={"1.5rem"}
          fontWeight={"bold"}
        >
          ID:6419410039
        </Typography>
      </Box>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Avatar
          alt="facebook"
          src={Facebook}
          variant="rounded"
          sx={{ mr: 2 }}
        />
        <Avatar alt="line" src={Line} variant="rounded" sx={{ mr: 2 }} />
        <Avatar alt="x" src={X} variant="rounded" />
      </Box>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>

      <Box
        sx={{
          mt: 5,
          width: "75%",
          mx: "auto",
          boxShadow: 3,
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>ชื่อ-สกุล</Typography>
        <TextField size="small" />
        <Box sx={{ mt: 2 }} />
        <Typography>เบอร์โทร</Typography>
        <TextField size="small" />
        <Box sx={{ mt: 2 }} />
        <Typography>เพศ</Typography>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="LGBTQ+" control={<Radio />} label="LGBTQ+" />
        </RadioGroup>
      </FormControl>
      <Button variant="contained" sx={{mt:2, backgroundColor: "#ff0085",boxShadow: 3}} >บันทึก</Button>
      </Box>
      
    </>
  );
}
export default MyPageB;
