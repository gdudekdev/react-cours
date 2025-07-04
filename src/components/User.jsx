export default function User({ users, setUsers, id, patchUser }) {
  function deleteUser() {
    const toSave = users.filter((item, i) => i != id);
    setUsers(toSave);
    localStorage.setItem("users", JSON.stringify(toSave));
  }

  return (
    <>
      <td className="px-6 py-4">{users[id].user}</td>
      <td className="px-6 py-4">{users[id].phone}</td>
      <td className="px-6 py-4">{users[id].country}</td>
      <td className="px-6 py-4 flex gap-1">
        <button onClick={()=>patchUser({ id: id, data: users[id] })}>
          Modifier
        </button>
        <button onClick={() => deleteUser()}>Supprimer</button>
      </td>
    </>
  );
}
