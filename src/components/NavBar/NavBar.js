import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import './NavBar.scss'


const pages = ['Inicio', 'Productos', 'Quiénes Somos', 'Contacto'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    //console.log('Abrir carrito');
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            //component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}> E-Store</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            //component="a"
            //href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-Store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Inicio
              </Button>
            </Link>
            <Link to="/category/notebook" style={{textDecoration: 'none', color: 'white'}}>
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Notebooks
              </Button>
            </Link>
            <Link to="/category/celular" style={{textDecoration: 'none', color: 'white'}}>
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Celulares
              </Button>
            </Link>            
            <Link to="/about" style={{textDecoration: 'none', color: 'white'}}>
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Quiénes Somos
              </Button>
            </Link>
            <Link to="/contacto" style={{textDecoration: 'none', color: 'white'}}>
              <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                Contacto
              </Button>
            </Link>                                    
            {/* <Link to="/productos"><button>Productos</button></Link>
            <Link to=""><button>About Us</button></Link>
            <Link to="/contacto"><button>Contacto</button></Link>    */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <Link to='/cart' className="cart-link">
                <CartWidget />  
              </Link>  
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
