import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const column = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Cost",
    },
    {
      field: "date",
      headerName: "Date",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the Team Members" />
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
        }}
      >
        <DataGrid
          checkboxSelection={true}
          rows={mockDataInvoices}
          columns={column}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
