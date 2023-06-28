import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Sidebar from "../global/Sidebar";
//import PieChart from "../../components/Statistiques/allstat";

const Pie = () => {
  return (
   
       <Box display="flex">
    <Sidebar></Sidebar>
    <Box m="20px">
    <br></br>
    <br></br>
      <Header subtitle="Consulter les erreurs des fichiers" />
      <Box height="75vh" width="75vh">
        <PieChart />
      </Box>
    </Box>
    </Box>
  );
};

export default Pie;