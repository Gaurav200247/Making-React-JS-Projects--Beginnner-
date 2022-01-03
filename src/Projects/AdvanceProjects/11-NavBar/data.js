import React from "react";
import { BsInstagram, BsFacebook, BsDiscord, BsYoutube } from "react-icons/bs";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/achievements",
    text: "Achievements",
  },
  {
    id: 3,
    url: "/ourprojects",
    text: "Our Projects",
  },
  {
    id: 4,
    url: "/notes&tuts",
    text: "Notes & Tutorials",
  },
  {
    id: 5,
    url: "/about",
    text: "About Us",
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
];
