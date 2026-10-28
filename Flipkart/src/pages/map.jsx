export const FruitName = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  return (
    <ul className="p-4 bg-gray-100 flex rounded-lg w-max gap-2 ">
      {fruits.map((fruits, index) => (
        <li
          key={index}
          className="p-2  bg-white rounded shadow-sm text-gray-700"
        >
          {fruits}
        </li>
      ))}
    </ul>
  );
};
