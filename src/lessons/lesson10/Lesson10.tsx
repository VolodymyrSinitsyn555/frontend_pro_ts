import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
// import styles from "./lesson10.module.css";
import CatGallery from "../../components/CatGallery/CatGallery";

interface CatFact {
  fact: string;
  imageUrl: string;
}

export default function Lesson10(): JSX.Element {
  const [facts, setFacts] = useState<CatFact[]>([]);

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = async () => {
    const factResponse = await fetch("https://catfact.ninja/fact");
    const factData = await factResponse.json();

    const imageResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const imageData = await imageResponse.json();
    const newFact: CatFact = {
      fact: factData.fact,
      imageUrl: imageData[0].url,
    };
    setFacts((prevFacts) => [...prevFacts, newFact]);
  };

  const deleteFact = () => {
    setFacts([]);
  };

  return (
    <div>
      <MyButton func={fetchFact} text={"GET MORE INFO"} />
      {facts.length > 0 && (
        <CatGallery facts={facts} />
      )}
      {facts.length > 0 && <MyButton func={deleteFact} text={"DELETE DATA"} />}
    </div>
  );
}
