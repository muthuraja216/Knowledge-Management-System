import React,{useState,useEffect} from 'react'
import './Play.css';
import axios from 'axios'
function Play() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];
  const[post,setPost]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then(res=>setPost(res.data))
    .catch(err=>console.log(err))
})
const[popup,setPopup]=useState(false)
const[id1,setId1]=useState()
const[username1,setusername1]=useState('')
const[score1,setscore1]=useState()

const openpopup=(datas)=>{
    setPopup(true)
    setId1( datas.id)
    setusername1( datas.username)
    setscore1(datas.score)
}
let savestate = () =>{

    axios.post(`http://localhost:3001/score`,{
        
      "user" : sessionStorage.getItem("user"),
      "score" : score,
       
      })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
 

 
  return (
    <div className="App">
      <div className="quiz-page">
        <div className="quiz-container">
      <h1>Test your Iq</h1>

<h2>Score: {score}</h2>

{showResults ? (
  <div className="final-results">
    <h1>Final Results</h1>
    <h2>
      {score} out of {questions.length} correct - (
      {(score / questions.length) * 100}%)
    </h2>
    <button onClick={() => restartGame()}>Restart game</button>
    <button onClick={() => savestate()}>Save game</button>

  </div>
) : (
  <div className="question-card">
    <h2>
      Question: {currentQuestion + 1} out of {questions.length}
    </h2>
    <h3 className="question-text">{questions[currentQuestion].text}</h3>

    <ul>
      {questions[currentQuestion].options.map((option) => {
        return (
          <li
            key={option.id}
            onClick={() => optionClicked(option.isCorrect)}
          >
            {option.text}
          </li>
        );
      })}
    </ul>
  </div>
)}
        </div>
      </div>
    </div>
  );
}

export default Play;