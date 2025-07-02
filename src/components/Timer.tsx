import { useEffect, useState } from "react";

export default function Timer() {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{new Date(date).toLocaleTimeString()}</div>;
}
