import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Button, LinearProgress} from '@mui/material'
const CourseLanguage = () => {
    const {language} = useParams()
    const [progressValue, setProgressValue] = useState(0)
    const [step, setStep] = useState(1);
    const youtubeVideoUrl = `https://www.youtube.com/watch?v=bEBNel06JJM`
    const videoId = youtubeVideoUrl.split('v=')[1].split('&')[0];
    const iframeSrc = `https://www.youtube.com/embed/${videoId}`;
    
    const handleSetProgress = () => {
        console.log('step', step)
        switch(step){
            case 1:
                setProgressValue(0)
                break;
            case 2:
                setProgressValue(50)
                break;
            case 3:
                setProgressValue(75)
                break;
            default:
                setProgressValue(0)
        }
    }
    useEffect(()=>{
        handleSetProgress()
    },[step])

    const handleNext = () => {
        console.log('step', step)

        if(step<2){
            setStep(prev=>prev + 1);
            
        }
        // handleSetProgress()
    }

    const handlePrev = () => {
        console.log('step', step)

        if(step>1){
            setStep(prev=>prev - 1);
        }
        // handleSetProgress()
    }

    const CourseVideo = () => {

        return (
            <>
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
            
            </>
        )
    }

    const CourseQuiz = () => {

        return (
            <>
             <div className='d-flex justify-content-center mt-5'>
                    <div>
                        <h1>Quiz</h1>
                        <p>Coming Soon</p>  

                    </div>
                    </div>
            
            </>
        )
    }

    const showContent = () => {
        switch(step){
            case 1:
                return <CourseVideo/>
            case 2:
                return <CourseQuiz/>
           
            default:
                return <CourseVideo/>
        }
    }

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
                {showContent()}
               <div className='d-flex justify-content-between'>
                <Button variant="contained" onClick={handlePrev} className='mt-5'>Prev</Button>
                <Button variant="contained" onClick={handleNext} className='mt-5'>Next</Button>
               </div>
            </div>

        </div>

    </>
  )
}





export default CourseLanguage