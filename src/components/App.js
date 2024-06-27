import React, {useEffect, useState} from "react";

function App(){
    const [dogPhoto, setDogPhoto] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data)
            setDogPhoto(data.message);
            //console.log(dogPhoto)
            setIsLoaded(true);
        });
    }, []);

  // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <p>Loading...</p>;

  return <img alt="A Random Dog" src={dogPhoto}></img>;
}

export default App;