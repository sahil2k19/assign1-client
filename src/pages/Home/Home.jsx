import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BarChart from '../Course/BarChart';
import Nav from '../../Nav';

const Home = () => {
  const navigate = useNavigate();
  const [progressData, setProgressData] = useState(JSON.parse(localStorage.getItem('progressData')));
  const [language, setLanguage] = useState('Select');
  const [error, setError] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const handleError = (language) => {
    if (language === 'Select') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = () => {
    if (language === 'Select') {
      setError(true);
    } else {
      setError(false);
      navigate(`/courses/${language}`);
    }
  };

  const handleChange = (event) => {
    handleError(event.target.value);
    setLanguage(event.target.value);
  };

  // Add a useEffect hook to listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'progressData') {
        setProgressData(JSON.parse(event.newValue));
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      <Nav />
      <div className='container'>
        <div className='d-flex justify-content-center mb-4 mt-5'>
          <h1 className='fs-1 fw-bold text-primary'>Hi <span className='text-success'>{user?.name}</span> Welcome to the Course</h1>
        </div>

        <div className='px-3 py-3 mt-5 mx-3 shadow-lg rounded-4'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <h3 className='fs-5 fw-semibold mb-3 text-primary'>Select Your Language</h3>
            <Select
              error={error}
              className=''
              value={language}
              onChange={handleChange}
              style={{ width: '200px' }}
            >
              <MenuItem value="Select">Select Language</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"French"}>French</MenuItem>
              <MenuItem value={"Spanish"}>Spanish</MenuItem>
            </Select>
          </div>
          <div className='d-flex justify-content-end'>
            <Button
              onClick={handleSubmit}
              variant="contained"
              className='mt-3 fw-semibold text-capitalize'
              color='success'
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5 container'>
        {progressData?.length > 0 && <BarChart />}
      </div>
    </>
  );
};

export default Home;
