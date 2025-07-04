import { useEffect, useState } from "react";
import User from "./User";
import Form from "./Form";
import Search from "./Search";
import PatchForm from "./PatchForm";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isPatchMode, setIsPatchMode] = useState(false);
  const [userToPatch, setUserToPatch] = useState({id : -1, user : {user : "", phone :""}});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users"));
    if (stored) {
      setUsers(stored);
    }
  }, []);
  const patchUser = (user) => {
    setIsPatchMode(true);
    setUserToPatch(user);
  };
  const filteredUsers = users.filter(
    (user) =>
      user.user.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="relative overflow-x-auto">
      <div className="flex flex-col gap-4 fixed top-8 left-1/2 -translate-x-1/2">
        <h2 className="text-4xl font-bold dark:text-white">
          {users.length} utilisateurs
        </h2>
        <Search search={search} setSearch={setSearch} />
        {isPatchMode ? (
          <PatchForm
            id={userToPatch.id}
            user={userToPatch.data}
            setUsers={setUsers}
            users={users}
            setIsPatchMode={setIsPatchMode}
          />
        ) : (
          <Form setUsers={setUsers} users={users}  />
        )}

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nom d'utilisateur
              </th>
              <th scope="col" className="px-6 py-3">
                N° de téléphone
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <User users={filteredUsers} setUsers={setUsers} id={index} patchUser={patchUser} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
