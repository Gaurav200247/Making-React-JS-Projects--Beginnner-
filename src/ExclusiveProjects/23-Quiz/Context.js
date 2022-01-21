import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const table = {
  sports: 21,
  anime_and_manga: 31,
  cartoon_and_animation: 32,
  movies: 11,
  general_knowledge: 9,
  science_and_nature: 17,
  computers: 18,
  maths: 19,
  mythology: 20,
};

const mainUrl = "https://opentdb.com/api.php?";

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [IncomingError, setIncomingError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [Quiz, setQuiz] = useState({
    amount: 3,
    category: "anime_and_manga",
    difficulty: "easy",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    setWaiting(false);
    // try catch
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        // console.log("inside if waiting should be false");
        setQuestions(data.results);
        setLoading(false);
        setWaiting(false);
      } else {
        // console.log("inside else waiting should be true");
        setWaiting(true);
        setLoading(false);
        setIncomingError(true);
      }
    } catch (error) {
      // console.log("inside catch waiting should be true");
      console.log(error);
      setIncomingError(true);
      setLoading(false);
      setWaiting(true);
    }
  };
  const OpenModal = () => {
    setIsModalOpen(true);
    setIncomingError(false);
    console.log(isModalOpen);
  };
  const CloseModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };

  const NextQuestion = () => {
    console.log(index);
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1;
      if (newIndex > questions.length - 1) {
        OpenModal();
        return 0;
      } else {
        return newIndex;
      }
    });
  };

  const CheckAnswer = (value) => {
    if (value) {
      setCorrect((oldstate) => oldstate + 1);
    }
    NextQuestion();
  };

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...Quiz, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const { amount, category, difficulty } = Quiz;

    const url = `${mainUrl}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
    // console.log(url);
    fetchData(url);
  };

  console.log(IncomingError);

  return (
    <AppContext.Provider
      value={{
        HandleSubmit,
        HandleChange,
        NextQuestion,
        CheckAnswer,
        CloseModal,
        correct,
        isModalOpen,
        loading,
        IncomingError,
        waiting,
        Quiz,
        questions,
        index,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalstate = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
