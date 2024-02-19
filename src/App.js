import "./App.css";
import UserCard from "./components/userCard/userCard";
import users from "./content/user.json";

function App() {
  return users.map((user) => {
    return (
      <UserCard
        name={user.name}
        email={user.email}
        address={user.address}
        phone={user.phone}
      />
    );
  });
}

export default App;
