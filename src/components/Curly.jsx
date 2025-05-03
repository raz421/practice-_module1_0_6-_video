export default function Curly() {
  const obj = {
    name: "Meharaz",
    id: "221-15-5883",
    department: {
      name: "Cse",
      faculty: "FSIT",
    },
  };
  const Teacher = {
    addres: "Mirpur 2",
  };
  const value = "true";
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "blueviolet",
        fontSize: "20px",
      }}
      className="flex flex-col gap-2 m-6 p-2"
    >
      <h1>Suppose value come from Api</h1>
      <p>Name is {obj.name}</p>
      <p>Faculty name {obj.department.faculty}</p>
      <p>Department Name {obj.department.name}</p>
      <p>Teacher address {Teacher.addres}</p>
      <p>{`${value ? "YES" : "No"}`}</p>
    </div>
  );
}
