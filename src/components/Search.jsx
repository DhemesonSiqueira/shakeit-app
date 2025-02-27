import search from "../assets/search.svg";

function Search ({searchTerm, setSearchTerm}) {
  return (
    <div className="search">
      <div>
        <img src={search} alt="Search" />

        <input
          type="text"
          placeholder="Search through thousands of drinks"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;