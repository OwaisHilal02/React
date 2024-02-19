import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_container">
      <div className="home_content">
        <h2>Welcome</h2>
        <Link to="/contacts">My Contacts</Link>
        <Link to="/about">About This Website</Link>
      </div>
    </div>
  );
}
export default Home;
