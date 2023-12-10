// pages/search.tsx
import useSWR from 'swr';
import SearchBar from '../src/components/SearchBar';

const SearchPage: React.FC = () => {
  const { data: searchResults } = useSWR('https://dummyjson.com/users/search?q=query');

  return (
    <div>
      <h1>User Search</h1>
      <SearchBar searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
