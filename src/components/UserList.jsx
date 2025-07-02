import { useState } from "react";
import User from "./User";
import Form from "./Form";

export default function UserList() {
  const [users, setUsers] = useState([
    "John Doe",
    "Jane Smith",
    "Alice Johnsson",
  ]);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [nbUsers, setNbUsers] = useState(users.length);


  return (
    <div className="flex flex-col gap-4 w-full justify-center">
      <div className="flex flex-col gap-4 fixed top-8 left-1/2 -translate-x-1/2">
        <h1 className="">{nbUsers} utilisateurs</h1>
        <Form setPhoneNumbers={setPhoneNumbers} />
      </div>
      <ul className="flex flex-col gap-4 justify-center items-center h-[40vh] w-full overflow-auto pt-10 p-8">
        {users.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <User
              phoneNumber={phoneNumbers[index]}
              setPhoneNumber={setPhoneNumbers}
              phoneNumbers={phoneNumbers}
              users={users}
              user={item}
              setUsers={setUsers}
              id={index}
              setNbUsers={setNbUsers}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
