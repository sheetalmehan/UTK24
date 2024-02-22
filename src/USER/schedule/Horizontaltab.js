import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Schedule1 from './Schedule1';
import Schedule2 from './Schedule2';
import Schedule3 from './Schedule3';
import styled from 'styled-components';

const Container = styled.div`
  h2 {
    text-align: center;
   margin-bottom:40px;
  }
`;

const ResponsiveTabList = styled(TabList)`
  width: 60%;
  margin-left: 35%;
  typography: body1;
  // background-color: pink;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin:auto;
    // padding: 0% 1% 0% 1%;
  }
`;

const AnimatedBox = styled(Box)`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }

  width: 90%;
  margin: auto;
  padding-top: 20px;
  border-radius: 20px;
  typography: body1;
  background-color: rgb(115, 124, 175);
  box-shadow: 0 0 25px 30px rgba(167, 98, 231, 0.5);
`;

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <h2 className="titls">Schedule</h2>
      <AnimatedBox>
        <TabContext value={value}>
          <Box>
            <ResponsiveTabList onChange={handleChange}>
              <Tab
                sx={{
                  width: '6%', // Take up full width initially
                
                  margin: '1.5%',
                  borderRadius: '5px',
                  fontSize: '12px',
                  typography: '',
                  backgroundColor: 'pink',
                  height: 15,
                  '@media screen and (max-width: 768px)': { // Adjust styles for larger screens
                    width: '1%', // Adjust maximum width for larger screens if needed
                  },
                }}
                label="Day 1"
                value="1"
              />  <Tab
                sx={{
                  width: '6%', // Take up full width initially
             
                  margin: '1.5%',
                  borderRadius: '5px',
                  fontSize: '12px',
                  typography: '',
                  backgroundColor: 'pink',
                  height: 15,
                  '@media screen and (max-width: 768px)': { // Adjust styles for larger screens
                    width: '1%', // Adjust maximum width for larger screens if needed
                  },
                }}
                label="Day 2"
                value="2"
              />        <Tab
                sx={{
                  width: '6%', // Take up full width initially
              
                  margin: '1.5%',
                  borderRadius: '5px',
                  fontSize: '12px',
                  typography: '',
                  backgroundColor: 'pink',
                  height: 15,
                  '@media screen and (max-width: 942px)': { // Adjust styles for larger screens
                    width: '1%', // Adjust maximum width for larger screens if needed
                  },
                }}
                label="Day 3"
                value="3"
              />    </ResponsiveTabList>
          </Box>
          <TabPanel value="1"><Schedule1 /></TabPanel>
          <TabPanel value="2"><Schedule2 /></TabPanel>
          <TabPanel value="3"><Schedule3 /></TabPanel>
        </TabContext>
      </AnimatedBox>
    </Container>
  );
}
