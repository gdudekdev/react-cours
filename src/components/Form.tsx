import { useState } from "react";

export default function Form({ setUsers, setPhoneNumbers, setNbUsers }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setPhoneNumbers((prev) => [...prev, phoneNumber]);
    setUsers((prev) => [...prev, username]);
    setNbUsers((prev) => prev + 1);
    setPhoneNumber("");
    setUsername("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="tel"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        placeholder="Enter your phone number"
        className="p-2 rounded-sm"
      />
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Enter your name"
        className="p-2 rounded-sm"
      />
      <input type="submit" value="Confirm" />
    </form>
  );
}
