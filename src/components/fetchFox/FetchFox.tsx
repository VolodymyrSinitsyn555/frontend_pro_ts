import React, { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import { log } from "console";

interface IFoxData {
  image: string;
  // link: string;
}

export default function FetchFox(): JSX.Element {
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchFox = async (): Promise<void> => {
    setLoading(true);
    const res = await fetch("https://randomfox.ca/floof/");
    const data: IFoxData = await res.json();
    setTimeout(() => {
      setImage(data.image);
      setLoading(false);
    }, 1000);
  };

  // useEffect(() => {
  //   fetchFox();
  // }, []);
  useEffect(() => {
    console.log("mounting");
    fetchFox();
  }, []);

  useEffect(() => {
    console.log("updating");
    // alert("the image is updating");
  }, [image]);

  return (
    <div className="lesson-container wrapper">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <img height={200} src={image} alt="Random fox" />
          <MyButton func={fetchFox} text={"Change fox"} />
        </>
      )}
    </div>
  );
}
