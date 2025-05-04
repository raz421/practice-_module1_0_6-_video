export default function Items({ name, ispacked }) {
  //   if (ispacked) {
  //     return <li className="text-xl font-black ">{name} ✅</li>;
  //   }
  //   return <li className="text-xl font-black ">{name} ❌</li>;

  //   here are repeatative code spotted.li tag write twice  with same class,wich is not good
  // the rule of Programminng DRY(Don't Repeat yourself)
  //   here the soluation
  return (
    <div>
      <li className="text-xl font-black ">
        {ispacked ? name + "✅" : name + "❌"}
      </li>
    </div>

    //there are another problem arise
  );
}
