import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/Goegraphy";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geograpy CHART" subtitle="A simple Geograpy Chart" />
      <Box height="68vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};
export default Geography;
