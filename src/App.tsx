import { QuestionCard } from "./components/QuestionCard";

function App() {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="app">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Begin Quiz
      </button>
      <p className="score">Score: </p>
      <p>Loading questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
