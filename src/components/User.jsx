export default function User({ users, setUsers, setNbUsers, id, user }) {
  function deleteUser() {
    setUsers(users.filter((item, i) => i != id));
    setNbUsers((prev) => prev - 1);
  }
  console.log(user);
  return (
    <>
      <td className="px-6 py-4">{user.user}</td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="px-6 py-4">
        <button onClick={() => deleteUser()}>Supprimer</button>
      </td>
    </>
  );
}
