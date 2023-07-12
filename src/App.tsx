import { useState } from "react";

interface DogPhoto {
  message:"string",
  status: "string"

}

function App() {
  const [dogPhoto, setDogPhoto] = useState<DogPhoto | undefined>();;
  const [storeDogPhoto, setStoreDogPhoto] = useState<DogPhoto[]>([]);

  const handleGetDogPhoto= async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random");
    const jsonBody = await response.json();
    setDogPhoto(jsonBody);
  };
 
  const handleStoreDogPhoto = () => {
    if(dogPhoto){
      setStoreDogPhoto([
      ...storeDogPhoto,
       dogPhoto,
    ]);
    }
    
  };

  if (dogPhoto) {
    return (
      <div>
        <h1>Dog Pictures</h1>
         <img src={dogPhoto.message} alt="Cute Doggy"/>
        <hr />
        <button onClick={handleGetDogPhoto}>Get another Doggy!</button>
        <br />
        <button onClick={handleStoreDogPhoto}>Save Doggy Pic!</button>
        <br />
        <br />
        <h2>Saved Doggy Pics</h2>
        {storeDogPhoto.map((photo, index) => (
          <img src={photo.message} key={index} alt="saved daggy"/>
        ))}
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
        <button onClick={handleGetDogPhoto}>Get Doggy!</button>
        <br />
        <button onClick={handleStoreDogPhoto}>Save Doggy Pic!</button>
      </div>
    );
  }
}

export default App;
