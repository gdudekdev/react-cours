import "./App.css";
import Timer from "./components/Timer";
import UserList from "./components/UserList";

function App() {
  return (
    <>
    <div className="relative w-[50vw]">
      <UserList />
    </div>
      <Timer />
    </>
  );
}

export default App;
