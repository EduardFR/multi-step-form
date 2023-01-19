import Arcade from "../assets/Arcade.svg";
import Advanced from "../assets/Advanced.svg";
import Pro from "../assets/Pro.svg";

export const plans = [
  {
    name: "Arcade",
    color: "var(--color-Orange)",
    src: `${Arcade}`,
    abbreviations: {
      monthly: "mo",
      yearly: "yr",
    },
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    name: "Advanced",
    color: "var(--color-Pink)",
    src: `${Advanced}`,
    abbreviations: {
      monthly: "mo",
      yearly: "yr",
    },
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    name: "Pro",
    color: "var(--color-Purple)",
    src: `${Pro}`,
    abbreviations: {
      monthly: "mo",
      yearly: "yr",
    },
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];
