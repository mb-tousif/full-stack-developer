import React from 'react'
import { Link } from "react-router-dom";
import { AppBar,IconButton, Box,Menu,MenuItem, Stack, Container,Typography,Toolbar } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";

// const Image = styled("img")(({ theme }) => ({
//   width: "15%",
//   height: 64,
//   borderRadius: 10,
//   margin: "5px 20px",
//   [theme.breakpoints.down("md")]: {
//     display: "none"
//   },
// }));

export default function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
  return (
    <AppBar
      sx={{
        backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Image src={logo} alt="Logo" /> */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { md: "flex", xs: "none" },
              justifyItems: "center",
              justifyContent: "center",
              fontFamily: "roboto",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Trendy Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appBar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              color="inherit"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Typography textAlign="center" fontWeight="700" size="large">
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <Typography textAlign="center" fontWeight="700" size="large">
                    Projects
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <Typography textAlign="center" fontWeight="700" size="large">
                    About
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MERN Dev Tousif
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyItems: "end",
                justifyContent: "end",
              },
            }}
          >
            <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
              <Typography textAlign="center" fontWeight="700" size="large">
                Home
              </Typography>
            </Link>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Typography textAlign="center" fontWeight="700" size="large">
                Projects
              </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
              <Typography textAlign="center" fontWeight="700" size="large">
                About
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
