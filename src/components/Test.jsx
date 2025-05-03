export default function Test({ num }) {
  return (
    <>
      <h1 className="text-3xl">check odd even</h1>
      {num % 2 == 0 ? (
        <>
          <p className="text-2xl font-bold">this is even number</p>
        </>
      ) : (
        <p className="text-2xl font-bold">this is odd number</p>
      )}
    </>
  );
}
