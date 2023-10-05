import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="A simple pie Chart" />
      <Box height="68vh">
        <PieChart />
      </Box>
    </Box>
  );
};
export default Pie;
