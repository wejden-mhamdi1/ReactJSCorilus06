import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
const Team = () => {
  const [users, setUsers] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  function getUsers() {
    axios.get(`http://localhost:8090/api/v1/auth/getall`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  useEffect(() => {
    getUsers();
  }, []);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "address",
      headerName: "address",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "firstname",
      headerName: "firstname",
     
      headerAlign: "left",
      align: "left",
    },
    {
      field: "lastname",
      headerName: "lastname",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
   
  ];

  return (
    <Box display="flex">
    <Sidebar></Sidebar>
    <Box m="20px" width={"200vh"}>

      <Header subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
     <DataGrid checkboxSelection rows={users} columns={columns} />

      </Box>
    </Box>
    </Box>
    
  );
};

export default Team;
