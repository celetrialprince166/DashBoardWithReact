import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarChart from "../../components/BarChart";
import Linechart from "../../components/LineChart";
import GeographyChart from "../../components/Goegraphy";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="5px"
      >
        <Box></Box>
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blue[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140"
        gap="20px"
      >
        {/* Row */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyItems="center"
        >
          <StatBox
            title="23,564"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600] }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyItems="center"
        >
          <StatBox
            title="235,564"
            subtitle="Sales Obtained "
            progress="0.45"
            increase="+14%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600] }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyItems="center"
        >
          <StatBox
            title="324,582"
            subtitle="New  Clients"
            progress="0.55"
            increase="+14%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600] }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyItems="center"
        >
          <StatBox
            title="4235,564"
            subtitle="Traffic Inbond"
            progress="0.85"
            increase="+44%"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600] }} />}
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography fontWeight="bold" color={colors.greenAccent[500]}>
                $59,345
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" ml="20px">
            <Linechart isDashboard={true} />
          </Box>
        </Box>
        {/* Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography variant="h6" color={colors.grey[100]} fontWeight="600">
              Transactions
            </Typography>
          </Box>
          <Box height="250px">
            {mockTransactions?.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h6"
                    fontWeight={"400"}
                  >
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box backgroundColor={colors.greenAccent[500]} p="5px 10px">
                  {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>

          {/* last */}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h6" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="75" />
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 Revenue Generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h6" fontWeight="600">
            Sales Quatity
          </Typography>
          <Box height="200px" ml="20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
