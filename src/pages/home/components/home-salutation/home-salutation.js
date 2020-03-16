import React from "react";
import Salutation from "../../../../components/salutation";
import ToggleButton from "../../../../components/toggle-button";
import useToggle from "../../../../hooks/use-toggle";

export default function HomeSalutation() {
  const [isGreeting, setIsGreeting] = useToggle(true);
  return (
    <>
      <Salutation isGreeting={isGreeting}>Home</Salutation>
      <ToggleButton onClick={() => setIsGreeting()}>Toggle Home</ToggleButton>
    </>
  );
}
