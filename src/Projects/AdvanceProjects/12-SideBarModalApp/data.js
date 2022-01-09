import React from "react";
import { BsInstagram, BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { RiTeamFill } from "react-icons/ri";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/achievements",
    text: "Achievements",
    icon: <GiPodiumWinner />,
  },
  {
    id: 3,
    url: "/ourprojects",
    text: "Our Projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  {
    id: 4,
    url: "/notes&tuts",
    text: "Notes & Tutorials",
    icon: <FiFileText />,
  },
  {
    id: 5,
    url: "/about",
    text: "About Us",
    icon: <RiTeamFill />,
  },
];

export const social = [
  {
    id: 1,
    name: "facebook",
    url: "https://www.facebook.com",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    name: "youtube",
    url: "https://www.youtube.com",
    icon: <BsYoutube />,
  },
  {
    id: 3,
    name: "discord",
    url: "https://www.discord.com",
    icon: <BsDiscord />,
  },
  {
    id: 4,
    name: "instagram",
    url: "https://www.instagram.com",
    icon: <BsInstagram />,
  },
  {
    id: 5,
    name: "linkedin",
    url: "https://www.linkedin.com",
    icon: <ImLinkedin2 />,
  },
];
