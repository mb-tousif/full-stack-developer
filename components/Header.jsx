import React,{useState} from 'react'
import { AppBar,IconButton, Box,Menu,MenuItem, Stack, Container,Typography,Toolbar } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';

export default function Header (){
    const [anchorElNav, setAnchorElNav] = useState(false);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }; 
    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };
  return (
    <AppBar
      sx={{
        background: "linear-gradient(90deg, #103783 0%, #1c1554 50%, #7c65a9 100%)",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            MERN Dev. Tousif
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
                display: { xs: "block", md: "none" }, position: "static"
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/" style={{ textDecoration: "none", color:"#471069" }}>
                  <Typography textAlign="center" fontWeight="700" size="large">
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/projects" style={{ textDecoration: "none", color:"#471069" }}>
                  <Typography textAlign="center" fontWeight="700" size="large">
                    Projects
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/about" style={{ textDecoration: "none", color:"#471069" }}>
                  <Typography textAlign="center" fontWeight="700" size="large">
                    About
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/blogs" style={{ textDecoration: "none", color:"#471069" }}>
                  <Typography textAlign="center" fontWeight="700" size="large">
                    Blogs
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
            MERN Dev. Tousif
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
            <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
              <Typography textAlign="center" fontWeight="700" size="large">
                Home
              </Typography>
            </Link>
            <Link
              href="/projects"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Typography textAlign="center" fontWeight="700" size="large">
                Projects
              </Typography>
            </Link>
            <Link href="/about" style={{ textDecoration: "none", color: "#fff" }}>
              <Typography textAlign="center" fontWeight="700" size="large">
                About
              </Typography>
            </Link>
            <Link href="/blogs" style={{ textDecoration: "none", color: "#fff" }}>
              <Typography textAlign="center" fontWeight="700" size="large">
                Blogs
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
};
