import { useState } from "react";

interface DogPhoto {
  message:"string",
  status: "string"

}

function App() {
  const [dogPhoto, setDogPhoto] = useState<DogPhoto>();

  const handleGetDogPhoto= async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody = await response.json();
    setDogPhoto(jsonBody);
  };

  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  if (dogPhoto) {
    return (
      <div>
        <h1>Dog Pictures</h1>
         <img src={dogPhoto.message} alt="Cute Doggy"/>
        <hr />
        <button onClick={handleGetDogPhoto}>Get another Doggy!</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog Pictures</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          Dog Picture from an API!
        </p>
        <button onClick={handleGetDogPhoto}>Get joke</button>
      </div>
    );
  }
}

export default App;
