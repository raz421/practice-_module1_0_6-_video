import Items from "./Items";

export default function ProductList() {
  return (
    <div className="m-4">
      <h1 className="text-xl font-bold">
        There are couple of products here.
        <br />
        some of availabel and some of not
      </h1>
      <ul>
        <Items ispacked={null} name={"Coffy"} finish={true} />
        <Items ispacked={4} name={"Teaspoon"} finish={false} />
        <Items ispacked={undefined} name={"Apple"} finish={false} />
      </ul>
    </div>
  );
}
