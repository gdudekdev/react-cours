import "./App.css";
import CountryList from "./components/CountryList";
import Timer from "./components/Timer";
import UserList from "./components/UserList";

function App() {
  return (
    <>
    <div className="relative">
      <UserList />
    </div>
      <Timer />
    </>
  );
}

export default App;
