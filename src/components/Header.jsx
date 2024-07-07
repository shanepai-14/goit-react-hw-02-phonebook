import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setValue(0);
        } if (location.pathname === '/feedback') {
            setValue(1);
        } else {
            setValue(2);
        }
    }, [location]);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
  
    };
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Feedback" component={Link} to="https://shanepai-14.github.io/goit-react-hw-02-feedback/" />
          <Tab label="Contact" component={Link} to="/goit-react-hw-02-phonebook" />
        </Tabs>
      </Box>
    )
}

export default Header