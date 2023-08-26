import ProfilePage from "./pages/profile/profilePage.jsx";
import { Data } from "./data.js";


function App() {

  return (
    <>
      <div>
        <ProfilePage users={Data} />
      </div>
    </>
  )
}

export default App
