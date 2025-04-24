import { useState, useEffect} from 'react'

const Home = () => {

      const [advice, setAdvice] = useState(null)

      const fetchAdvice = () => {
          fetch('https://api.adviceslip.com/advice')
              .then(response => response.json())
              .then(json => setAdvice(json))
              .catch(error => {
                  console.error('Error fetching advice:', error)
              })
      }
  
      useEffect(() => {
          fetchAdvice();
      }, []);

  return (
    <>
        <div>
            <h1 className='text-3xl font-bold underline text-center'>Advice</h1>
            {advice ? (
              <div className='text-center'>
                <p>{advice.slip.advice}</p>
              </div>
            ) : (
            <p className='text-center'>Loading...</p>
        )}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' onClick={fetchAdvice}>Get New Advice</button>
        </div>
    
    </>
  )
}

export default Home