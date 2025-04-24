import { useState, useEffect} from 'react'
import Card from '../Components/card'

const Home = () => {

      const [advice, setAdvice] = useState({})
    
      useEffect(() => {
          fetch('https://api.adviceslip.com/advice')
              .then(response => response.json())
              .then(json => setAdvice(json))
              .catch(error => {
                  console.error('Error fetching advice:', error)
              })
      }, [])

  return (
    <div className='flex items-center justify-center h-[100vh] bg-[#191d23] '>
    <Card
    advice={advice}
    />
    </div>
  )
}

export default Home