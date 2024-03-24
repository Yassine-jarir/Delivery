"use client";

import { Link as ScrollLink } from "react-scroll";

export default function CardLink({ translation }) {
  return (
    <ScrollLink
      to="InteractiveMap"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className="bg-orange font-light text-white text-lg rounded-xl px-7 cursor-pointer hover:opacity-90 duration-300"
    >
      {translation}
    </ScrollLink>
  );
}
