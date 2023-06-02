import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Sidebar from "../global/Sidebar";

const Bar = () => {
  return (
    <Box display="flex">
    <Sidebar></Sidebar>
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh" width="75vh">
        <BarChart />
      </Box>
    </Box>
    </Box>
  );
};

export default Bar;
