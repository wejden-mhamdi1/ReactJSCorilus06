import { useState,useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useParams } from 'react-router-dom';
import axios from 'axios' ;
import Topbar from "./Topbar";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id }=useParams();


// Rest of your code...

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};




const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [files, setFiles]= useState([]);
  const { id }=useParams();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const EMPLOYEE_API_URL = "http://localhost:8089/file/getAll";

  const fetchFiles = async () => {
    try {
      const response = await axios.get(EMPLOYEE_API_URL);
      setFiles(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSplitButtonClick2 = async (params) => {
    
    
    if (params && params.row && params.row.id) {
      const response = await axios.get(`http://localhost:8089/file/FileCypter/${params.row.id}`);
     // decrypted(params.row.id);
      const file =response.data// Modifier "content" par la propriété appropriée contenant le contenu du fichier
  console.log("le contenue"+file)

      const fileNumber = file.substring(0, 6);
  
      if (fileNumber === '920000') {
        window.location.href = '/t00/' + params.row.id;
    
      } else if (fileNumber === '920099') {
        window.location.href = '/t99/' + params.row.id;
    
      } else if (fileNumber === '920999') {
        window.location.href = '/t999/' + params.row.id;
       
      }
      else if (fileNumber === '920900') {
        window.location.href = '/t900/' + params.row.id;
       
      }
  
     
    } else {
      console.error('Missing parameters or id');
    }
  };
  useEffect(()=>{
  
    fetchFiles();
  },[]

  )
  
  const rows = files ? files.map((e) => ({
    id: e.id,
    fileName: e.fileName,
    fileType: e.fileType,
    status: e.status,
  })) : [];


 return (
  <div>

    <Topbar></Topbar>
   <Box>
    
    <Box
      sx={{
        "& .pro-sidebar-inner": {
        
          background: `${colors.greenAccent[700]} !important`,
          position: "fixed",
          left: "0px",
          width: "300px",
          top: "0px"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="30px">
              <Box display="fixed" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../../../assets/admin.png`}
                  style={{ cursor: "pointer", borderRadius: "90%" }}
                />
              </Box>
              <Box textAlign="center">
              
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  admin name
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           {/* <Item
              title="EFACT"
              to="/list/uploadFile"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            */} 

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             {/** <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
    </Box>
  </div>
);

};

export default Sidebar;
