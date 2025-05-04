export default function Avatar({ person, age }) {
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.id}</h1>
      <h1>{person.designation.size}</h1>
      <p>{age}</p>
    </div>
  );
}
