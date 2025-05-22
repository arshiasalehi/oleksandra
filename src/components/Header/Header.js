import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About', 'Plans', 'Booking', 'Contact', 'Gallery'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item} component={Link} to={item.toLowerCase()} smooth={true} duration={500} onClick={handleDrawerToggle}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" color="transparent" elevation={0} className="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Oleksandra Gurenko
        </Typography>
        
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div>
            {menuItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                component={Link}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
              >
                {item}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header; 