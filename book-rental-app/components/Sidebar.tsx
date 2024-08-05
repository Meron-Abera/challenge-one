import { List, ListItem, ListItemIcon, ListItemText, Drawer, Box } from '@mui/material';
import { Dashboard, UploadFile, Notifications, Settings, ExitToApp } from '@mui/icons-material';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Dashboard', 'Book Upload', 'Other', 'Other', 'Notification', 'Setting', 'Login as Admin'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <Dashboard /> : null}
                {index === 1 ? <UploadFile /> : null}
                {index === 4 ? <Notifications /> : null}
                {index === 5 ? <Settings /> : null}
                {index === 6 ? <ExitToApp /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
