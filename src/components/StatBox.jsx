import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      flex={1}
      justifyContent="space-between"
      width="150px"
      height="120px"
      m="0 30px"
      alignItems="center"
    >
      <Box>
        {icon}
        <Typography
          variant="h6"
          fontWeight="Bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
        <Box>
          <Typography
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>

        <Box>
          <Typography
            variant="h7"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
