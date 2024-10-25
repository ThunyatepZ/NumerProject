import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button variant='text '
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Problem
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/Home/Rootequation">Root of equation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/Home/Carmer"}>Linear algebra equation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/Home/newtondiv"}>Interpolation</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/Home/reg"}>Regression</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/Home/STP"}>intrigration</Link></MenuItem>
      </Menu>
    </div>
  );
}
