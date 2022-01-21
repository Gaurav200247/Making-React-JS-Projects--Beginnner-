import React from "react";
import { useGlobalstate } from "./Context";
import Footer from "./Footer";
import Loading from "./Loading";
import Modal from "./Modal";
import SetupForm from "./SetupForm";

const App = () => {
  const {
    loading,
    waiting,
    questions,
    index,
    NextQuestion,
    CheckAnswer,
    correct,
  } = useGlobalstate();
  if (waiting) {
    return (
      <>
        <SetupForm />
        <Footer />
      </>
    );
  }
  if (loading) {
    return <Loading />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];

  let answers = [...incorrect_answers];
  const temp_index = Math.floor(Math.random() * 4);
  console.log("correct answer is : " + (temp_index + 1));
  if (temp_index === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[temp_index]);
    answers[temp_index] = correct_answer;
  }
  return (
    <div>
      <Modal />
      {/* quiz-container starts */}
      <div className="quiz">
        {/* status-container starts */}
        <div className="status-container">
          <span className="status">
            Correct Answers : {correct}/{index + 1}
          </span>
        </div>
        {/* status-container ends */}

        {/* question-container starts */}
        <div className="question-container">
          <h2
            className="question"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>
        {/* question-container ends */}

        {/* answer-container starts */}
        <div className="answers-container">
          {answers.map((item, index) => {
            return (
              <button
                key={index}
                className="btn answer-btn"
                onClick={() => CheckAnswer(correct_answer === item)}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </div>
        {/* answer-container ends */}
        <div className="next-btn-container">
          <button className="btn next-btn" onClick={() => NextQuestion()}>
            Next Question
          </button>
        </div>
      </div>
      {/* quiz-container ends */}
    </div>
  );
};

export default App;
