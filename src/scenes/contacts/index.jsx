import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@emotion/react";
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const column = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "address",
      headerName: "Address",
    },
    {
      field: "city",
      headerName: "City",
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="The  list of contacts for future reference"
      />
      <Box
        display="flex"
        flex="1"
        m="40px 0 0 0 "
        height="68vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[400] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blue[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary["600"],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blue[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {},
        }}
      >
        <DataGrid
          checkboxSelection={true}
          rows={mockDataContacts}
          columns={column}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
