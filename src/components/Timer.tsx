import { useEffect, useState } from "react";

export default function Timer() {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="absolute top-0.5 left-0.5 text-2xl ">{new Date(date).toLocaleTimeString()}</div>;
}
