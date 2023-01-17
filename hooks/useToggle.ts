"use client";
import { useState } from "react";

export default function useToggle(initialValue = false): [boolean, () => void] {
  const [isToggled, setToggle] = useState(initialValue);

  const toggle = () => setToggle(!isToggled);

  return [isToggled, toggle];
}
