export default function Info({ obj, age }) {
  return (
    <div>
      <h1 className="text-3xl font-bold"> i am from info</h1>
      <p className="text-3xl font-bold"> Name is {obj.name}</p>
      <p className="text-3xl font-bold"> Age is {age}</p>
    </div>
  );
}
