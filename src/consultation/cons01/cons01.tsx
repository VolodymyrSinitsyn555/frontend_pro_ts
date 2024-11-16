import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./cons01.css";

function Consultation_05() {
  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const getRandomJoke = async () => {
    setJoke(undefined);
    setError(undefined);
    const response = await fetch(RANDOM_JOKE_URL, {
      //по умолчанию используется метод GET, поэтому его можно не прописывать во втором аргументе fetch
      method: "GET",
      // GET, POST, PUT, DELETE - основные методы HTTP запросов
    });

    const result = await response.json();
    if (response.ok) {
      //* тут пишем логику по УСПЕШНО пришедшим данным
      setJoke(`${result.setup}  ${result.punchline} `);
    } else {
      // тут пишем логигу если пришла ОШИБКА
      setError("Some Network Error");
    }
  };

  return (
    <div className="cons04Wrapper">
      <div className="card">
        <div className="jokesContainer">
          {joke && <p className="text">{joke}</p>}
          {error && <p className="text">{error}</p>}
        </div>
        <MyButton text="Get random Joke" func={getRandomJoke} />
      </div>
    </div>
  );
}

export default Consultation_05;
