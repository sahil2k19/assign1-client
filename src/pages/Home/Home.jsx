import React, { useState } from 'react'
import {Select, MenuItem, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('Select');
  const [error, setError] = useState(false);

  const handleError = (language) => {
    if (language === 'Select') {
      setError(true);
    }
    else{
      setError(false);
    }
  }

  const handleSubmit = () => {
    if (language === 'Select') {
      setError(true);
    }else{
      setError(false);
      navigate(`/courses/${language}`)
    }
  }
  const handleChange = (event) => {
    handleError(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <>
      <div className='container'>
          <div className='d-flex justify-content-center mb-4 mt-5'>
              <h1 className='fs-1 fw-bold text-primary'>Welcome to the Course</h1>
          </div>

        <div className='px-3 py-3 mt-5 mx-3 shadow-lg rounded-4'> 
          
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h3 className='fs-5 fw-semibold mb-3 text-primary'>Select Your Language</h3>
            <Select
         error={error}
         className=''
          value={language}
          onChange={handleChange}
          style={{width:'200px'}}
          
        >
          <MenuItem value="Select">
            Select Language
          </MenuItem>
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Hindi"}>Hindi</MenuItem>
          <MenuItem value={"French"}>French</MenuItem>
        </Select>
          </div>
          <div className='d-flex justify-content-end'>
          <Button onClick={handleSubmit}  variant="contained" className='mt-3 fw-semibold text-capitalize' color='success' >Submit</Button>

          </div>
        </div>

      </div>
    </>
  )
}

export default Home