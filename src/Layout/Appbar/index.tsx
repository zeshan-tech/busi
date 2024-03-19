import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Stack, styled } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import { RouteParams } from "@/navigation";
import { Header } from "..";

const pages: RouteParams[] = ["about", "services", "blogs", "contact"];

function ResponsiveAppBar() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Toolbar />
      <StyledAppbar color='default'>
        <StyledToolbar>
          <Stack></Stack>
          <Stack flexDirection={"row"}>
            {pages.map((page) => (
              <StyledLink to={page}>
                <Button key={page} color='inherit'>
                  {page}
                </Button>
              </StyledLink>
            ))}
          </Stack>
          <Button color='inherit'>Sign in</Button>
        </StyledToolbar>
      </StyledAppbar>
    </Fragment>
  );
}
export default ResponsiveAppBar;

const StyledAppbar = styled(AppBar)(() => ({
  top: "auto",
  bottom: 0,
}));

const StyledLink = styled(Link)(() => ({
  color: "#fff",
}));

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;
