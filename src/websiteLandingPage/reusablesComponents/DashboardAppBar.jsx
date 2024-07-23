import * as React from 'react';
import FilledButton from '../reusablesComponents/buttons/FilledButton'
import GhostButton from '../reusablesComponents/buttons/GhostButton'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { orange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import spice from '../../assets/spice.png'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Bookmark, FavoriteBorder } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(10),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '600px',
    },
  },
}));

const DashboardAppBar=()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate()
  // const handleProfile = ()=>{
  //     navigate("/dashboardProfile")
  // }

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
  const renderMenu = (
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
      <Link to="/dashboard/profile"><MenuItem>Profile</MenuItem> </Link>
      <Link to="/dashboard/setting"><MenuItem>Settings</MenuItem> </Link> 
    </Menu>
  );

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
    >
      <Link to="/dashboard/recipehome">
        <MenuItem>
          <IconButton
              size="large"
              color="inherit"
          >
            <Badge>
              <HomeIcon sx={{color: "orange"}}/>
            </Badge>
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>
      <Link to="/dashboard/create">
        <MenuItem>
          <Badge>
          <CreateIcon
              size="large"
              color="inherit"
              sx={{color: "orange"}}
          >
          </CreateIcon>
          </Badge>
          <p className={`pl-6`}>Create</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon sx={{color: "orange"}} />
          </Badge>
        </IconButton>
        <p>Notification</p>
      </MenuItem>
      
      <Link to="/dashboard/bookmark"> 
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge>
            <Bookmark sx={{color: "orange"}} />
            </Badge>
          </IconButton>
          <p>BookMark</p>
        </MenuItem>
      </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{color: "orange"}}/>
        </IconButton>
        <p>Settings</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{top: 0}}>
        <Toolbar sx={{backgroundColor: "white"}}>
          <Link to="/home"><img src={spice} alt="" className='w-20' /></Link>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <div className='flex gap-8'>
            <Link to="/dashboard/recipehome">
              <FilledButton text="Home" style={{width: 96}}/>
            </Link>
            <Link to="/dashboard/create">
            <div className='flex'>
              <GhostButton text="Create"/>
              <CreateIcon sx={{color: "orange", paddingTop: "2"}} />
            </div>
            </Link>
            </div>
          </Typography>
          <Search sx={{color: orange[400], borderColor: orange[400], border: 2, borderRadius: 'lg'}} >
            <SearchIconWrapper sx={{color: orange[400]}}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search recipes by preferences or ingredients."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to="/dashboard/bookmark">
            <IconButton>
              <Bookmark sx={{color: "orange"}} />
            </IconButton>
          </Link>

          <Link to="/dashboard/favorite"><IconButton>
            <FavoriteBorder sx={{color: "orange"}}/>
              </IconButton>
           </Link>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={10} color="error">
                <MailIcon sx={{color: "orange"}} />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={20} color="error">
                <NotificationsIcon sx={{color: "orange"}} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{color: "orange"}}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{
                color: "orange"
              }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default DashboardAppBar