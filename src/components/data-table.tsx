import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { User } from '@models/user/types';
import { FC } from '@modules/@types/react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 200 },
  { field: 'website', headerName: 'Website', width: 130 },
  {
    field: 'address',
    headerName: 'Address',
    width: 200
  }
];

const paginationModel = { page: 0, pageSize: 5 };

interface DataTableProps {
  data: User[]
}

const DataTable: FC<DataTableProps> = ({ data }) => {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default DataTable
