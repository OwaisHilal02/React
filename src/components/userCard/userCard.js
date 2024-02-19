import "./userCard.css";
import { useState } from "react";
import { Audio } from "react-loader-spinner";

function UserCard({ name, email, address, phone }) {
  const [isToggled, setIsToggled] = useState(false);
  function handleToggle() {
    setIsToggled(!isToggled);
  }

  return (
    <div className="cards_container">
      <div className="cards">
        <div className="header">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
        <div className="content">
          <h4>Address:</h4>
          <p>{address}</p>
          <p>Phone: {phone}</p>
          <div className="button">
            {isToggled && <Audio height={25} width={25} color="#666" />}
            {!isToggled ? (
              <button onClick={handleToggle}> Call</button>
            ) : (
              <button onClick={handleToggle}>End Call</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
