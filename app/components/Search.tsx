import React from "react";

type SearchProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <div className="relative bg-primary text-primaryText">
      <input
        className="peer h-10 w-60 rounded-lg border border-secondary bg-transparent px-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondary sm:w-56"
        type="text"
        name="place"
        id="place"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <label
        className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-primaryText peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-secondary"
        htmlFor="place"
      >
        Search
      </label>
    </div>
  );
};

export default Search;
