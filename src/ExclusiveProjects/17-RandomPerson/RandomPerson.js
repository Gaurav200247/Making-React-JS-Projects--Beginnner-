import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";

const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const RandomPerson = () => {
  const [loading, setloading] = useState(false);
  const [title, settitle] = useState("name");
  const [Value, setValue] = useState("Random Person");
  const [Person, setPerson] = useState(null);

  const getdata = async () => {
    setloading(true);

    const resp = await fetch(url);
    const data = await resp.json();

    if (data.results) {
      const person = data.results[0];

      const { first, last } = person.name;
      const { large } = person.picture;
      const { password } = person.login;
      const { country } = person.location;
      const email = person.email;
      const { age } = person.dob;
      const phone = person.phone;

      const newData = {
        name: `${first} ${last}`,
        email,
        country,
        age,
        phone,
        password,
        img: large,
      };
      setPerson(newData);
      settitle("name");
      setValue(newData.name);
    } else {
      setPerson(null);
    }
    setloading(false);
  };

  useEffect(() => {
    getdata();
  }, []);

  const ShowValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      settitle(newValue);
      setValue(Person[newValue]);
    }
  };

  return (
    <div className="random-person">
      {/* image-conatiner starts */}
      <div className="image-container">
        <img
          className="image"
          src={(Person && Person.img) || defaultImage}
          alt="img"
        />
      </div>
      {/* image-conatiner ends */}

      {/* title starts*/}
      <div className="title-container">
        <span className="title">My {title} is : </span>
        <h4 className="value">{Value}</h4>
      </div>
      {/* title ends */}

      {/* hover-board-starts */}
      <div className="hover-board">
        <FaUser
          className="icon"
          onMouseOver={(e) => ShowValue(e)}
          data-label="name"
        />
        <FaEnvelopeOpen
          className="icon"
          onMouseOver={(e) => ShowValue(e)}
          data-label="email"
        />{" "}
        <FaCalendarTimes
          className="icon"
          onMouseOver={(e) => ShowValue(e)}
          data-label="age"
        />{" "}
        <FaMap
          className="icon"
          onMouseOver={(e) => ShowValue(e)}
          data-label="country"
        />{" "}
        <FaPhone
          className="icon"
          onMouseOver={(e) => ShowValue(e)}
          data-label="phone"
        />{" "}
        <FaLock
          className="icon"
          onMouseOver={(e) => ShowValue(e)}
          data-label="password"
        />
      </div>

      {/* hover-board-ends */}
      <div>
        <button className="btn btn-primary change-btn" onClick={getdata}>
          {loading ? "Loading..." : "Random Person"}
        </button>
      </div>
    </div>
  );
};

export default RandomPerson;
