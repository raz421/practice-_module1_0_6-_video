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
        <Items ispacked={true} name={"Coffy"} finish={true} />
        <Items ispacked={true} name={"Teaspoon"} finish={false} />
        <Items ispacked={false} name={"Apple"} finish={false} />
      </ul>
    </div>
  );
}
