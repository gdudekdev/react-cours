import { useState } from "react";

export default function Form({ users, setUsers, countries }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [isSearchCountry, setIsSearchCountry] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

  function handleSubmit(e) {
    e.preventDefault();
    const update = [
      ...users,
      { user: username, phone: phoneNumber, country: country },
    ];
    setUsers(update);
    setPhoneNumber("");
    setUsername("");
    setCountry("");
    setFilteredCountries([]);
    setIsSearchCountry(false);
    localStorage.setItem("users", JSON.stringify(update));
  }

  const handleChangeCountry = (e) => {
    const value = e.target.value;
    setCountry(value);
    if (value === "") {
      setFilteredCountries([]);
      setIsSearchCountry(false);
    } else {
      const filtered = countries.filter((c) =>
        c.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountries(filtered);
      setIsSearchCountry(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Name"
        required
        className="border-gray-300 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        placeholder="Phone number"
        required
        id="phone-input"
        aria-describedby="helper-text-explanation"
        className="block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="relative w-full">
        <input
          type="text"
          value={country}
          onChange={handleChangeCountry}
          placeholder="Country"
          className="block w-full ps-4 p-2.5 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        {isSearchCountry && filteredCountries.length > 0 && (
          <ul className="absolute top-full left-0 z-10 bg-white dark:bg-gray-700 border border-gray-300 max-h-40 overflow-y-auto w-full">
            {filteredCountries.map((c, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setCountry(c.name.common);
                  setIsSearchCountry(false);
                  setFilteredCountries([]);
                }}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2"
              >
                {c.name.common}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="submit"
        value="Confirm"
        className="rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      />
    </form>
  );
}
