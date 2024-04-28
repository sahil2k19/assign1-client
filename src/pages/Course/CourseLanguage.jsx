import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {LinearProgress} from '@mui/material'
const CourseLanguage = () => {
    const {language} = useParams()
    const [progressValue, setProgressValue] = useState(78)

    const youtubeVideoUrl = `https://www.youtube.com/watch?v=bEBNel06JJM`
    const videoId = youtubeVideoUrl.split('v=')[1].split('&')[0];
    const iframeSrc = `https://www.youtube.com/embed/${videoId}`;
    

  return (
    <>
        <div className='container'>
            <div className='d-flex justify-content-center mb-4 mt-5'>
                <h1 className='fs-1 fw-bold'>Lets learn <span className='text-primary'>{language}</span> together</h1>
            </div>

            <div className='px-3 py-3 mt-5 mx-3 shadow-lg rounded-4'>
                <div className='d-flex justify-content-center'>
                    <span className='fw-semibold fs-5'><span className='text-primary'>{progressValue}% </span>Completed {language}</span>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                <LinearProgress className='w-75' variant="determinate" value={progressValue} />
                </div>

                <div className='d-flex justify-content-center mt-5'>
                <iframe
                        width="560"
                        height="315"
                        src={iframeSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

        </div>
    </>
  )
}

export default CourseLanguage