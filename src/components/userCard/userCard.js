import "./userCard.css";
import { useState } from "react";
import { Audio } from "react-loader-spinner";

function UserCard({ name, email, address, latitude, longitude, phone }) {
  const [isToggled, setIsToggeled] = useState(false);

  function handleToggling() {
    setIsToggeled(!isToggled);
  }

  return (
    <div className="card_container">
      <div className="card_header">
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
      <div className="card_content">
        <h4>Address:</h4>
        <p className="card_content_address">{address}</p>
        <h4>Phone:{phone}</h4>
        <div className="card_content_buttons">
          {isToggled && <Audio width={50} height={50} color="#6e6e6e" />}
          {isToggled ? (
            <button onClick={handleToggling}> End Call </button>
          ) : (
            <button onClick={handleToggling}> Call </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default UserCard;
