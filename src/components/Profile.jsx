import Avatar from "./Avatar";

export default function Profile() {
  const name = "Meharaz";
  const age = 25;
  const favrt = "football";
  const skill = "development";
  return <Avatar name={name} age={age} favrt={favrt} skill={skill} />;
}
