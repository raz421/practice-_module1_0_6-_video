import Avatar from "./Avatar";

export default function Profile() {
  return (
    <Avatar
      person={{
        name: "Meharaz",
        id: "5883",
        designation: {
          size: 34,
        },
      }}
      age={25}
    />
  );
}
