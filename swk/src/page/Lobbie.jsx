import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Lobbie() {
  // Modal styles and state
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen'>
      <div className="flex justify-between items-center py-96">
        <h1 className='pl-96 text-3xl hover:text-blue-400'>
          Welcome to Numerical Method
        </h1>
        <ul className="flex">
          <li className="pr-96">
            <Stack spacing={2} direction="row">
              <Link to="/Home/Rootequation">
                <Button variant="contained" className='hover:text-rose-500'>
                  Get Start
                </Button>
              </Link>
              <Button variant="outlined" onClick={handleOpen}>
                Outlined
              </Button>
              
            </Stack>
          </li>
        </ul>
      </div>

      {/* Modal code */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-black'>
            What is Numerical
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-black'>
            Numerical methods are techniques used to approximate solutions to mathematical problems that cannot be solved exactly or analytically.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Lobbie;
