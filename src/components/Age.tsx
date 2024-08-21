import { useState, useEffect } from "react";

const Age = () => {
  const [age, setAge] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      const time =
        (new Date().getTime() - new Date(1080550800000).getTime()) /
        (1000 * 60 * 60 * 24 * 365.25);
      setAge(time.toString().substring(0, 12));
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <time dateTime={age}>{age}</time>;
};

export default Age;
