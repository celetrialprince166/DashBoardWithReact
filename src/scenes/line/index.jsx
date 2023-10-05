import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line CHART" subtitle="A simple Line Chart" />
      <Box height="68vh">
        <LineChart />
      </Box>
    </Box>
  );
};
export default Line;
