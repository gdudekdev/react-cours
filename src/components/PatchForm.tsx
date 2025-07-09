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
  const [isSearchCountry, setIsSearchCountry] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUsers = users.map((u, index) =>
      index === id ? { ...patchedUser } : u
    );
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    setIsPatchMode(false);
  }

  const handleChangeCountry = (e) => {
    const value = e.target.value;
    setPatchedUser((prev) => ({
      ...prev,
      country: value,
    }));

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
        onChange={(e) =>
          setPatchedUser((prev) => ({
            ...prev,
            user: e.target.value,
          }))
        }
        value={patchedUser.user}
        placeholder="Name"
        required
        className="block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
        className="block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
      <div className="relative w-full">
        <input
          type="text"
          value={patchedUser.country || ""}
          onChange={handleChangeCountry}
          placeholder="Country"
          className="block w-full ps-4 p-2.5 border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
        {isSearchCountry && filteredCountries.length > 0 && (
          <ul className="absolute top-full left-0 z-10 bg-white dark:bg-gray-700 border border-gray-300 max-h-40 overflow-y-auto w-full">
            {filteredCountries.map((c, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setPatchedUser((prev) => ({
                    ...prev,
                    country: c.name.common,
                  }));
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
        className="font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      />
    </form>
  );
}
