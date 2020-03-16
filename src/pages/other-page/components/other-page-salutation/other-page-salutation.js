import React from "react";
import Salutation from "../../../../components/salutation";
import ToggleButton from "../../../../components/toggle-button";
import useToggle from "../../../../hooks/use-toggle";

export default function OtherPageSalutation() {
  const [isGreeting, setIsGreeting] = useToggle(true);
  return (
    <>
      <Salutation isGreeting={isGreeting}>Other Page</Salutation>
      <ToggleButton onClick={() => setIsGreeting()}>
        Toggle Other Page
      </ToggleButton>
    </>
  );
}
