import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

console.log(mockDataTeam);
const Team = () => {
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
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            margin="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
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
          rows={mockDataTeam}
          columns={column}
        />
      </Box>
    </Box>
  );
};

export default Team;
