import React from "react";
import { useGlobalstate } from "./Context";

const SetupForm = () => {
  const { HandleSubmit, Quiz, HandleChange, IncomingError } = useGlobalstate();
  return (
    <div className="form-container">
      {/* heading starts */}
      <h1 className="form-heading" onClick={() => window.location.reload()}>
        Quiz App
      </h1>
      {/* heading ends */}

      {/* form starts */}
      <form onSubmit={HandleSubmit}>
        {/* ------------------------------------------- */}
        <div className="form-row">
          <label htmlFor="num_questions">No. of Questions : </label>
          <input
            id="num_questions"
            className="form-control"
            type={"number"}
            name="amount"
            value={Quiz.amount}
            onChange={HandleChange}
            placeholder="10"
          />
        </div>
        {/* ------------------------------------------- */}

        {/* ------------------------------------------- */}

        <div className="form-row">
          <label htmlFor="category">Category : </label>
          <select
            id="category"
            name="category"
            value={Quiz.category}
            onChange={HandleChange}
          >
            <option value={"sports"}>Sports</option>
            <option value={"anime_and_manga"}>Anime and Manga</option>
            <option value={"cartoon_and_animation"}>
              Cartoon and Animation
            </option>
            <option value={"movies"}>Movies</option>
            <option value={"general_knowledge"}>General Knowledge</option>
            <option value={"science_and_nature"}>Science and Nature</option>
            <option value={"computers"}>Computers</option>
            <option value={"maths"}>Maths</option>
            <option value={"mythology"}>Mythology</option>
          </select>
        </div>
        {/* ------------------------------------------- */}

        {/* ------------------------------------------- */}
        <div className="form-row">
          <label
            htmlFor="difficulty"
            name="difficulty"
            value={Quiz.difficulty}
            onChange={HandleChange}
          >
            Select Difficulty :{" "}
          </label>
          <select id="difficulty">
            <option value={"easy"}>Easy</option>
            <option value={"medium"}>Medium</option>
            <option value={"hard"}>Hard</option>
          </select>
        </div>
        {/* ------------------------------------------- */}
        {/* form btn starts */}
        <div className="submit-btn-container">
          {" "}
          <button type="submit" className="btn btn-warning submit-btn">
            Start
          </button>
        </div>
        {/* form btn ends */}
      </form>
      {/* form ends */}
      {/* ------------------------------------------- */}
      {/* error alert starts */}
      <div className="error-alert">
        {IncomingError ? (
          <p className="error">
            Can't Generate Questions, Please Try Different Options
          </p>
        ) : null}
      </div>
      {/* error alert ends */}
    </div>
  );
};

export default SetupForm;
