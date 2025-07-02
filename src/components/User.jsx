export default function User({
  users,
  setUsers,
  id,
  setNbUsers,
  user,
  phoneNumber,
  phoneNumbers,
  setPhoneNumber,
}) {
  function deleteUser() {
    setUsers(users.filter((item, i) => i != id));
    setPhoneNumber(phoneNumbers.filter((item, i) => i != id));
    setNbUsers((prev) => prev - 1);
  }
  return (
    <>
      <p>{user}</p>
      <p>{phoneNumber}</p>
      <button onClick={() => deleteUser()}>Supprimer</button>
    </>
  );
}
