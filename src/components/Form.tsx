import { use, useState } from "react";

export default function Form({ setPhoneNumbers }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPhoneNumbers((prev) => [...prev, phoneNumber]);
    setPhoneNumber("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="tel"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        placeholder="Enter your phone number"
      />
      <input type="submit" value="Confirm" />
    </form>
  );
}
