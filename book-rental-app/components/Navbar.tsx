import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Book Rent
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
