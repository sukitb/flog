import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import { Home } from "./Pages/Home";
import AddActivities from "./Pages/AddActivities";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from 'prop-types';
import Typography from "@mui/material/Typography";
// todo add AddActivity
// todo add EditProfile

import ActivityCardList from "./components/ActivityCardList/ActivityCardList";
import NavTabs from "./components/์ฺNavtab/NavTabs";

// function App() {

//   return (
//     <div className="App">
//       <NavTabs />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/addactivity" element={<AddActivity />} /> */}
//           <Route path="/add-activities" element={<AddActivities />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleChange} aria-label="">
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Activity" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddActivities />
      </TabPanel>

    </div>
  );
}
