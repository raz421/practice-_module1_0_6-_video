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
      {/* use nullish coalacu=ing oparator */}
      <li className="text-xl font-black ">
        {name} {ispacked ?? "❌"}
      </li>
    </>
  );
}
