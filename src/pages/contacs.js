import UserCard from "../components/userCard/userCard";
import users from "../content/user.json";

function Contacts() {
  return (
    <div className="contacts_container">
      <div className="contacts_cards">
        {users.map((user) => {
          return (
            <UserCard
              name={user.name}
              email={user.email}
              address={user.address}
              longitude={user.longitude}
              latitude={user.latitude}
              phone={user.phone}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;
