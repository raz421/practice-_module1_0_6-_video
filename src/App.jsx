import Avatar from "./components/Avatar";
import Info from "./components/Info";
import Profile from "./components/Profile";

function App() {
  const obj = {
    name: "meharaz",
    size: 43,
  };
  const age = 25;
  return (
    <>
      <Profile>
        <Avatar obj={obj} age={age} />
        <Info obj={obj} age={age} />
      </Profile>
    </>
  );
}

export default App;
