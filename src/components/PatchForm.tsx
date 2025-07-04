import { useState } from "react";

export default function PatchForm({
  id,
  user,
  users,
  setUsers,
  setIsPatchMode,
  countries,
}) {
  const [patchedUser, setPatchedUser] = useState(user);

  function handleSubmit(e) {
    e.preventDefault();
    const newUsers = users.map((u, index) =>
      index === id ? { ...patchedUser } : u
    );
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    setPatchedUser({});
    setIsPatchMode((prev) => !prev);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-[60vw]">
      <input
        type="text"
        onChange={(e) =>
          setPatchedUser((prev) => ({
            ...prev,
            user: e.target.value,
          }))
        }
        value={patchedUser.user}
        placeholder="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <input
        type="text"
        onChange={(e) =>
          setPatchedUser((prev) => ({
            ...prev,
            phone: e.target.value,
          }))
        }
        value={patchedUser.phone}
        placeholder="Phone number"
        required
        id="phone-input"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <select
        name="country"
        id="country"
        value={patchedUser.country || ""}
        onChange={(e) =>
          setPatchedUser((prev) => ({
            ...prev,
            country: e.target.value,
          }))
        }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {countries.map((country, idx) => (
          <option key={idx} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      <input
        type="submit"
        value="Confirm"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      />
    </form>
  );
}
