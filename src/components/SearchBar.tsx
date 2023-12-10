// components/SearchBar.tsx
interface SearchBarProps {
  searchResults: any[]; // Replace 'any' with the actual type of your search results
}

const SearchBar: React.FC<SearchBarProps> = ({ searchResults }) => {
  return (
    <div>
      <h2>User Search</h2>
      {/* Add a search input field and display search results */}
      <input type="text" placeholder="Search users..." />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            {/* Display search result details */}
            <p>{result.name}</p>
            <p>{result.email}</p>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default SearchBar;
