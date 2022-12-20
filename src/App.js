import "./App.css";
import Fullname from "./component/profile/Fullname";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import Address from "./component/profile/Address";
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Fullname />
      <Address />
    </div>
  );
}

export default App;
