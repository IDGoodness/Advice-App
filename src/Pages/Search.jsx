import { useState } from 'react';
import {Link} from 'react-router-dom'
import divider_mobile from '../assets/pattern-divider-mobile.svg'
import divider_desktop from '../assets/pattern-divider-desktop.svg'


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
          setMessage(`${json.slips.length} result${json.slips.length <= 1 ? '' : 's'} found.`);
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
    <div className='bg-[#2f343c] relative flex-col rounded-md flex  items-center justify-between p-10 shadow w-[90%] min-h-[50%] max-w-[500px]  h-[350px] max-h-[400px]'>

    <Link to={'/'}
        className='absolute top-[-23px] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center transition duration-300 ease-in-out  hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.5)] active:scale-95'>
            <span className="material-icons-round text-[#14181f] transition duration-300 hover:scale-110">home</span>
    </Link>

      <div className='flex items-center bg-white rounded px-1 justify-between  h-[30px]  mt-[5px] w-[60%]'>
        <input 
        type="text" 
        value={searchItem} 
        placeholder='Type a keyword...' 
        onChange={(e) => setSearchItem(e.target.value)}
        className='w-[90%] h-[100%]  focus:outline-none px-2 text-[15px] font-bold bg-white' />
        <span 
        class="material-icons-round  transition text-green-500 cursor-default  duration-200 hover:"
        onClick={handleSearch}
        >search</span>
      </div>

       <div className='  h-[200px] w-full flex flex-col justify-around max-h-[250px]  '>
        <p className='text-center text-[13px]   text-green-500'>{message}</p>
       <div className=" h-[60%] flex flex-col justify-center p-10 text-center  items-center overflow-y-auto">
       {advice.map((item) => (
      <p key={item.id} className="font-bold text-[15px] py-2 border-b-1 border-gray-300 text-white">
        {item.advice}
      </p>
    ))}
       </div>
       </div>

    <div className="divider_mobile">
        <img src={divider_mobile} className='sm:hidden' alt="" />
        <img src={divider_desktop} className='hidden sm:block' alt="" />
    </div>
</div>
  )
}

export default Search;


    // <div className="flex flex-col items-center justify-center min-h-fit py-10 bg-gray-100 px-4">
    
    //   <h1 className="text-3xl font-bold underline text-center mb-4">Search for Advice</h1>

    //   <div className="flex gap-2 mb-4">
    //     <input
    //       type="text"
    //       placeholder="Type a keyword..."
    //       value={searchItem}
    //       
    //       className="border border-gray-300 p-2 rounded w-64"
    //     />
    //     <button
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //       
    //     >
    //       Search
    //     </button>
    //   </div>

    //   <p className="text-center mb-4">{message}</p>

    //   <div className="space-y-3 text-center">
    //   </div>
    // </div>
