// Upper search bar for finding tasks

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h2 className="text-lg font-bold">Dashboard</h2>
      <input
        type="text"
        placeholder="Search Task..."
        className="border rounded-md px-3 py-2 w-96"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        13 March 2021
      </button>
    </div>
  );
};

export default SearchBar;
