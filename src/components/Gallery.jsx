import { Profile as Cart } from "./Profile";
export default function Gallery() {
  return (
    <>
      <h1 className="text-bold text-2xl">Great Scientist</h1>
      <div className="flex gap-2 w-screen">
      <Cart />
      <Cart />
      <Cart />
      </div>
    </>
  );
}
