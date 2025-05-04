export default function Avatar({ obj, age }) {
  return (
    <div>
      <h1 className="text-3xl font-bold"> i am from profile</h1>
      <p className="font-bold text-xl">Name is {obj.name}</p>
      <p className="font-bold text-xl">Age is {age}</p>
    </div>
  );
}
