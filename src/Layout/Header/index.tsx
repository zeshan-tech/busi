import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import { AppBar, Link } from "@mui/material";

export default function Header() {
  return (
    <AppBar color='default' position="static">
      <Toolbar>
        <AdbIcon sx={{ color: "white" }} />
        <Typography variant='h6' fontWeight={"bold"} component={Link} color={"white"} underline='none' fontFamily={"monospace"} href='/'>
          LOGO
        </Typography>
      </Toolbar>
    </AppBar>
  );
}