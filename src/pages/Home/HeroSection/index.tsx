import { AppBar, Box, Button, Divider, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <MainContainer>
      <StyledBox>
        <Typography color={"white"} variant='subtitle2' fontWeight={900}>
          Software Development
        </Typography>
        <Typography color={"white"} variant='h1' textAlign={"center"} fontWeight={900}>
          Simplify.Automate.Grow
        </Typography>

        <StyledDivider />

        <Typography color={"white"} variant='h5' textAlign={"center"}>
          We help build and manage a team of world-class developers to bring your vision to life
        </Typography>

        <StyledDivider />

        <AppBar position='static' color='default'>
          <StyledToolbar>
            <Link to={"services"}>
              <Button variant='text'>Explore services</Button>
            </Link>
            <Button variant='contained'>Schedule a meeting</Button>
          </StyledToolbar>
        </AppBar>
      </StyledBox>
    </MainContainer>
  );
}

const MainContainer = styled(Box)`
  height: 70vh;
  background-repeat: norepeat";
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-image: url(https://wallpapercave.com/wp/BAIavaT.jpg);
  display: flex;
  justify-content: center;
  margin: auto
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  columnGap: theme.spacing(1),
  justifyContent: "end",
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(4),
  width: "100%",
}));
