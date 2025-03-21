import { useDate } from "../../context/DateContext";

const SearchBar = () => {
  const { selectedDate } = useDate();

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h2 className="text-lg font-bold">Dashboard</h2>
      <input
        type="text"
        placeholder="Search Task..."
        className="border rounded-md px-3 py-2 w-96"
      />
      {/* <p className="text-gray-500 text-sm">{selectedDate.toDateString()}</p> */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {selectedDate.toDateString()}
      </button>
    </div>
  );
};

export default SearchBar;
