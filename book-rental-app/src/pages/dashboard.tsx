import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PieChart from '../../components/PieChart';
import LineChart from '../../components/LineChart';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Please log in to view the dashboard.</p>;
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No.', width: 70 },
    { field: 'bookNo', headerName: 'Book no.', width: 130 },
    { field: 'bookName', headerName: 'Book Name', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'action', headerName: 'Action', width: 150 },
  ];

  const rows = [
    { id: 1, bookNo: 6465, bookName: 'Derto Gada', status: 'Rented', price: '40 Birr', action: '...' },
    { id: 2, bookNo: 6465, bookName: 'Fikr Eske Mekabr', status: 'Rented', price: '40 Birr', action: '...' },
    { id: 3, bookNo: 6465, bookName: 'The Power of Now', status: 'Rented', price: '40 Birr', action: '...' },
    { id: 4, bookNo: 5665, bookName: 'Derto Gada', status: 'Free', price: '0.0 Birr', action: '...' },
    { id: 5, bookNo: 5665, bookName: 'Derto Gada', status: 'Free', price: '0.0 Birr', action: '...' },
    { id: 6, bookNo: 1755, bookName: 'Derto Gada', status: 'Free', price: '0.0 Birr', action: '...' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Navbar />
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Owner/Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">This Month Statistics</Typography>
                <Typography variant="h5">Income</Typography>
                <Typography variant="h4">ETB 9460.00</Typography>
                <Typography variant="subtitle1" color="text.secondary">Compared to ETB 8940 last month</Typography>
                <Typography variant="body1">Last Month Income ETB 25658.00</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Available Books</Typography>
                <PieChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Live Book Status</Typography>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Earning Summary</Typography>
                <LineChart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
