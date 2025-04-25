import { useState, useEffect} from 'react'
import Card from '../Components/card'

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
    <Card
      advice={advice}
      fetchAdvice={fetchAdvice}
    />
    </>
  )
}

export default Home