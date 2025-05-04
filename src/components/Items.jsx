export default function Items({ name, ispacked, finish }) {
  //   let value = "";
  //   if (ispacked) {
  //     if (finish) {
  //       value = <del>{name} ✅</del>;
  //     } else {
  //       value = name + "✅";
  //     }
  //   } else {
  //     value = name + "❌";
  //   }

  return (
    <>
      <li className="text-xl font-black ">
        {name} {ispacked > 0 && "✅"}
      </li>
      <li className="text-xl font-black ">
        {name} {ispacked > 0 || "❌"}
      </li>
    </>
  );
}
