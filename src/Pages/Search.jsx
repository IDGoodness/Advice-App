import { useState } from 'react';

const Search = () => {
  const [searchItem, setSearchItem] = useState('');
  const [advice, setAdvice] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    if (searchItem.trim() === '') {
      setMessage('Please enter a search term.');
      setAdvice([]);
      return;
    }
  
    fetch(`https://api.adviceslip.com/advice/search/${searchItem}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.slips) {
          setAdvice(json.slips);
          setMessage(`${json.slips.length} result(s) found.`);
        } else {
          setAdvice([]);
          setMessage('No results found. Please try a different keyword.'); 
        }
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
        setMessage('Something went wrong. Please try again.');
      });
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-fit py-10 bg-gray-100 px-4">
      <h1 className="text-3xl font-bold underline text-center mb-4">Search for Advice</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Type a keyword..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="border border-gray-300 p-2 rounded w-64"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <p className="text-center mb-4">{message}</p>

      <div className="space-y-3 text-center">
        {advice.map((item) => (
          <p key={item.id} className="bg-white p-3 rounded shadow max-w-md mx-auto">
            {item.advice}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Search;
