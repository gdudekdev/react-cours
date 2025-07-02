import { useState } from "react";

export default function Form({ users,setUsers }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setUsers((prev) => [...prev, { user: username, phone: phoneNumber }]);
    setPhoneNumber("");
    setUsername("");
    localStorage.setItem("users", JSON.stringify([...users, {user: username, phone: phoneNumber}]))
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        placeholder="Phone number"
        required
        id="phone-input"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        
      />
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <input
        type="submit"
        value="Confirm"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
      />
    </form>
  );
}
