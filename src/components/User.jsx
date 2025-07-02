export default function User({
  users,
  setUsers,
  setNbUsers,
  id, 
  user,
}) {
  function deleteUser() {
    setUsers(users.filter((item, i) => i != id));
    setNbUsers((prev) => prev - 1);
  }
  console.log(user);
  return (
    <>
      <p>{user.user}</p>
      <p>{user.phone}</p>
      <button onClick={() => deleteUser()}>Supprimer</button>
    </>
  );
}
