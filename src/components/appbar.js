import React,{useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { UserAuth } from '../auth/auth';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/auth';
import { AddShoppingCart } from '@mui/icons-material';
import { fontSize } from '@mui/system';
   

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '80%',
  border: `1px solid white`, // Add border property here
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5,5),
    width: 'auto',
  },
}));



const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  

  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(2em + ${theme.spacing(20)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function PrimarySearchAppBar() {
  const auth=UserAuth()
  const { logoutUser } = useContext(AuthContext); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = () => {
    if (auth.user) {
      return (
        <>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/dashboard">Profile</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/dashboard">My account</MenuItem>
            <MenuItem onClick={logoutUser} color='red' component={Link} to="/logout">Logout</MenuItem>
          </Menu>
        </>
      );
    } else {
      return (
        <>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/register">Sign Up</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
          </Menu>
        </>
      );
    }
  };
  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >{auth.user && (
      <>
        <MenuItem>
        <IconButton size="large" aria-label="show 20 new mails" color="inherit">
          <Badge badgeContent={10} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={34} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      </>
    )

    }
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{flexGrow: 1, }}>
    <AppBar position="static"  sx={{backgroundColor: 'red', color: '#ffffff', width: '100%', paddingRight: '20px', }} >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{  mr: 1, display: { xs: 'none', sm: 'block' ,color: 'white', padding: '0px 0px 0px 0px' , fontSize: '20px', alignItems: 'center'} }}
          >
            <MenuIcon />
            </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' ,color: 'white', paading: '0px',} }}
          >
            JI KONNECT 
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Now…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ display: { xs: 'none', sm: 'block' ,color: 'white', padding: '0px 0px 0px 0px' , fontSize: '20px', alignItems: 'center'} }}
             
              
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {auth.user && (
                <>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </>
              )}
            
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' ,color: 'white', padding: '2px'} }}
          >
          </Typography>
          <IconButton
              size='large'
              color='green'
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' ,color: 'white', padding: '10px 30px 10px 10px' , fontSize: '20px'} }}
              
              
            >
              Help
            <HelpIcon  />
            </IconButton>
          <IconButton
              size='large'
              color='green'
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' ,color: 'white', fontSize: '20px', padding: '10px 30px 10px 10px'} }}
              
              
            >
              Cart
            <AddShoppingCart />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              font-size = '0px'
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ display: { xs: 'none', sm: 'block' ,color: 'white', fontSize: '20px', padding: '10px 30px 10px 10px'} }}
            >
              My Account
            <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', fontSize: '2px'} }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu()}
    </Box>
  );
}

export default PrimarySearchAppBar;

