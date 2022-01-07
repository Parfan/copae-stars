import React, { useRef } from "react";
import GoBackButton from "../../components/GoBackButton";
import shufflePlayers from "../../utils/shuffleplayers";

function League() {
  const value = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const playersArray = value.current?.value.split("\n").filter(val => val !== '');
    console.log(shufflePlayers(playersArray || []));
  }

  return (
    <main>
      <GoBackButton />
      <form onSubmit={handleSubmit}>
        <textarea ref={value} placeholder="Type the name of players, one each line." />
        <button type="submit">submit</button>
      </form>
    </main>
  )
}

export default League
