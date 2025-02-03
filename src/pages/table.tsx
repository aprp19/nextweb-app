import DataTable from "@components/data-table";
import { useCommand, useStore } from "@models/store";
import { useEffect, useState } from "react";
import { PageComponent } from "@nxweb/react";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import {TextField} from "@mui/material";

const Table: PageComponent = () => {
  const [store, dispatch] = useStore((state) => state.user?.users);
  const command = useCommand(cmd => cmd);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(command.user.searchUsers(event.target.value));
  };

  useEffect(() => {
    dispatch(command.user.getUsers())
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
          setShowAlert(true);
        }, 3000);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Users loaded successfully!
        </Alert>
      </Snackbar>

      <TextField sx={{m: 2}} id="outlined-basic" label="Search" variant="outlined" onChange={handleFilter}/>

      <DataTable data={store || []}/>
    </>
  );
}

Table.displayName = 'Table';
export default Table;
