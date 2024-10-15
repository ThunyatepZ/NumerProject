import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Link } from 'react-router-dom';
function Submenuroot() {
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
          Another solution
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
          <MenuItem onClick={handleClose}><Link to="/Home/Rootequation">Graphical Method</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/Home/Bisection">Bisection method</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to={"/Home/FalsePosition"}>False-position Method</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to={"/Home/Onepoint"}>One-point iteration method</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to={"/Home/Newtonrapson"}>Newton-Raphson Method</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to={"/Home/Secantmed"}>Secant Method</Link></MenuItem>

        </Menu>
      </div>
    );
}

export default Submenuroot
