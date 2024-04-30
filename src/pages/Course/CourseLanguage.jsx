import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Button, LinearProgress} from '@mui/material'
import BarChart from './BarChart'
import PieChart from './PieChart'
import Nav from '../../Nav'
const CourseLanguage = () => {
    const navigate = useNavigate()
    const {language} = useParams()
    const [progressValue, setProgressValue] = useState(0)
    const [step, setStep] = useState(1);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [progressStep, setProgressStep] = useState(1);


    const Spanish = [
        {
            question: 'What does "Hola" mean in English?',
            options: ['Goodbye', 'Yes', 'Hello', 'Thank you'],
            answer: 'Hello'
        },
        {
            question: 'How do you say "Thank you" in Spanish?',
            options: ['De nada', 'Por favor', 'Gracias', 'Perdón'],
            answer: 'Gracias'
        },
        {
            question: 'Which of the following is the Spanish word for "dog"?',
            options: ['Gato', 'Perro', 'Pez', 'Conejo'],
            answer: 'Perro'
        },
        {
            question: 'How do you ask "How are you?" in Spanish?',
            options: ['¿Cómo estás?', '¿Qué hora es?', '¿Dónde está el baño?', '¿Cuánto cuesta?'],
            answer: '¿Cómo estás?'
        }
    ]
    const Hindi = [
        {
            question: 'What does "नमस्ते" mean in English?',
            options: ['Thank you', 'Hello', 'Goodbye', 'Yes'],
            answer: 'Hello'
        },
        {
            question: 'How do you say "Thank you" in Hindi?',
            options: ['धन्यवाद', 'शुक्रिया', 'कृपया', 'माफ कीजिए'],
            answer: 'धन्यवाद'
        },
        {
            question: 'Which of the following is the Hindi word for "water"?',
            options: ['दूध', 'चाय', 'पानी', 'नारियल'],
            answer: 'पानी'
        },
        {
            question: 'How do you ask "What is your name?" in Hindi?',
            options: ['आपका नाम क्या है?', 'आप कैसे हैं?', 'कितना समय हुआ?', 'आप कहाँ रहते हैं?'],
            answer: 'आपका नाम क्या है?'
        }
        
    ]
    const English = [
        {
            question: 'What does "hello" mean in other languages?',
            options: ['Hola', 'Bonjour', 'Namaste', 'All of the above'],
            answer: 'All of the above'
        },
        {
            question: 'Which word is a synonym for "happy"?',
            options: ['Sad', 'Angry', 'Ecstatic', 'Miserable'],
            answer: 'Ecstatic'
        },
        {
            question: 'What is the plural of "child"?',
            options: ['Childs', 'Children', 'Childrens', 'Childs\''],
            answer: 'Children'
        },
        {
            question: 'Which of the following is a verb?',
            options: ['Apple', 'Beautiful', 'Eat', 'Careful'],
            answer: 'Eat'
        }
        
    ]
    const French = [
        {
            question: 'What does "Bonjour" mean in English?',
            options: ['Good morning', 'Good night', 'Goodbye', 'Thank you'],
            answer: 'Good morning'
        },
        {
            question: 'How do you say "Thank you" in French?',
            options: ['De rien', 'S\'il vous plaît', 'Excusez-moi', 'Merci'],
            answer: 'Merci'
        },
        {
            question: 'Which of the following is the French word for "cat"?',
            options: ['Chien', 'Lapin', 'Chat', 'Poisson'],
            answer: 'Chat'
        },
        {
            question: 'How do you ask "How are you?" in French?',
            options: ['Comment allez-vous ?', 'Où est-ce que vous habitez ?', 'Combien ça coûte ?', 'Quelle heure est-il ?'],
            answer: 'Comment allez-vous ?'
        }
        
    ]

    const questionArray = language === "Hindi" ? Hindi : language === "English" ? English : language === "French" ? French : Spanish
   

    const youtubeLinkArray = [
        {url:"https://www.youtube.com/watch?v=1lrz11BbqCA",language:"Hindi"},
        {url:"https://www.youtube.com/watch?v=SEO9YPzSH-0",language:"English"},
        {url:"https://www.youtube.com/watch?v=cctA8tkRY3M",language:"French"},
        {url:"https://www.youtube.com/watch?v=lZMMqMvY1d0",language:"Spanish"},
    ]
    


    const youtubeVideoUrl = youtubeLinkArray?.find(link => link?.language == language)?.url;
    const videoId = youtubeVideoUrl?.split('v=')[1].split('&')[0];
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
                setProgressValue(100)
                break;
            default:
                setProgressValue(0)
        }
    }
    useEffect(()=>{
        handleSetProgress()
    },[progressStep])

    const handleNext = () => {
        console.log('step', step)

        if(step<3){ 
            setStep(prev=>prev + 1);
            setProgressStep(prev=>prev + 1);
            
        }
        // handleSetProgress()
    }

    const handleResetStep = ()=>{
        setStep(1)
        setProgressStep(1)
        setCurrentQuestionIndex(0)
        setAnswers([])
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
                    <div className='d-flex justify-content-end'>
                    <Button variant="contained" onClick={handleNext} className='mt-5'>Next</Button>
                    </div>
            
            </>
        )
    }

    const ProgressReport = ()=>{
          
        const handlePrevQuestion = () => {
        
          
                setStep(prev=>prev - 1);
        };
        const calculateCorrectAnswerPercentage = () => {
            // Get the total number of questions
            const totalQuestions = questionArray.length;
            
            // Calculate the number of correct answers
            let correctAnswersCount = 0;
            for (let i = 0; i < totalQuestions; i++) {
                if (answers[i] === questionArray[i].answer) {
                    correctAnswersCount++;
                }
            }
            
            // Calculate the percentage of correct answers
            const percentage = (correctAnswersCount / totalQuestions) * 100;
            saveProgressToLocalStorage(language, percentage);
            return percentage;
        };

        const saveProgressToLocalStorage = (language, progressValue) => {
            const progressData = JSON.parse(localStorage.getItem('progressData')) || [];
            
            // Find existing progress entry for the language
            const existingProgress = progressData.find(item => item.language === language);
            
            if (existingProgress) {
                // Update the existing progress value for the language
                existingProgress.progress = progressValue;
            } else {
                // Add a new progress entry for the language
                progressData.push({ language, progress: progressValue });
            }
            
            // Save the updated progress data back to local storage
            localStorage.setItem('progressData', JSON.stringify(progressData));
        };
        
        return (
            <>
                <div>
                    <div className='d-flex justify-content-center mt-5'>
                        <h1 className='fs-3 mb-5 fw-semibold'>Progress Report</h1>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div>
                        <h4 className='fs-5'>{calculateCorrectAnswerPercentage() > 50 ? 'Congratulation' : 'Oops'} You Got <span className={`${calculateCorrectAnswerPercentage() > 50 ? 'text-primary fw-bolder' : 'text-danger fw-bolder'} '`}>{calculateCorrectAnswerPercentage()}%</span></h4>
                        </div>

                    </div>
                </div>
                {
                    calculateCorrectAnswerPercentage() > 50 ?(
                    <>
                        <div className='d-flex justify-content-start'>
                    <Button variant="contained" onClick={()=>{navigate('/')}} className='mt-5'>Go To Dashboard</Button>
                </div> 
                    </>):(
                        <>
                            <div className='d-flex justify-content-start'>
                    <Button variant="contained" onClick={handleResetStep} className='mt-5'>Test Again</Button>
                </div> 
                        </>
                    )
                }
                {/* <div className='d-flex justify-content-start'>
                    <Button variant="contained" onClick={handlePrevQuestion} className='mt-5'>Prev</Button>
                </div> */}
            </>
        )
    }



    const CourseQuiz = () => {
      
        
        const handleAnswerSelection = (selectedAnswer) => {
            // Update the answers state
            const updatedAnswers = [...answers];
            updatedAnswers[currentQuestionIndex] = selectedAnswer;
            setAnswers(updatedAnswers);
        };
       
    
        
        const handlePrevQuestion = () => {
        
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
            }else{
                setStep(prev=>prev - 1);
            }
        };
    
        const handleNextQuestion = () => {
            if (currentQuestionIndex < questionArray.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }else{
                setStep(prev=>prev + 1);
                setProgressStep(prev=>prev + 1);
            }
        };
    
        const currentQuestion = questionArray[currentQuestionIndex];
    
        return (
            <>
                <div className='d-flex justify-content-start ms-5 mt-5'>
                    <div>
                        <h1 className='fs-5 fw-semibold mb-4'>{currentQuestion?.question}</h1>
                        <ul>
                            {currentQuestion.options.map((option, index) => (
                                <Button
                                key={index}
                                // Add an onClick event handler to handle answer selection
                                onClick={() => handleAnswerSelection(option)}
                                className='me-3 rounded-3 mb-3 text-capitalize fw-semibold' 
                                variant={answers[currentQuestionIndex] === option ? 'contained' : 'outlined'}
                            >
                                {option}
                            </Button>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='d-flex justify-content-around'>
                    <Button variant="contained" onClick={handlePrevQuestion} className='mt-5'>Prev</Button>
                    <Button variant="contained" onClick={handleNextQuestion} className='mt-5'>Next</Button>
                </div>
            </>
        );
    };

    const showContent = () => {
        switch(step){
            case 1:
                return <CourseVideo/>
            case 2:
                return <CourseQuiz/>
            case 3:
                return <ProgressReport/>
            default:
                return <CourseVideo/>
        }
    }

  return (
    <>
              <Nav/>

        <div className='container pb-5'>
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
               <div className='d-flex justify-content-around'>
                
               </div>


            </div>

        </div>

        
        <div>
            {/* <PieChart/> */}
        </div>

    </>
  )
}





export default CourseLanguage