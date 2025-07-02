export default function User({ users, setUsers, id }) {
  function deleteUser() {
    setUsers(users.filter((item, i) => i != id));
    const saved = JSON.parse(localStorage.getItem('users')); 
    localStorage.setItem('users', JSON.stringify(saved.filter((item,i)=> i!=id)));
  }
  return (
    <>
      <td className="px-6 py-4">{users[id].user}</td>
      <td className="px-6 py-4">{users[id].phone}</td>
      <td className="px-6 py-4">
        <button onClick={() => deleteUser()}>Supprimer</button>
      </td>
    </>
  );
}
