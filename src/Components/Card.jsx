import divider_mobile from '../assets/pattern-divider-mobile.svg'
import divider_desktop from '../assets/pattern-divider-desktop.svg'
import die from '../assets/icon-dice.svg'

const Card = ({ advice, fetchAdvice }) => {
    if (advice && advice.slip && advice.slip.advice) {
        console.log(advice.slip.advice);
    }    
    return (
    <div className='bg-[#2f343c] relative flex-col rounded-md flex items-center justify-evenly p-10 shadow w-[90%] min-h-[50%] max-w-[500px] max-h-[400px]'>
        <p className='text-[12px] tracking-widest text-[#53ffaa] text'>ADVICE #{}</p>
            {advice && advice.slip && advice.slip.advice ? (
                <p className='text-[white] text-[15px] sm:text-[25px] font-bold  flex flex-wrap justify-center items-center w-[100%] h-[60%] text-center '>
                    {advice.slip.advice}
                </p>
            ): (
                <p className='text-[white] text-[25px] font-bold flex flex-wrap justify-center items-center w-[100%] text-center h-[60%]'>
                    Loading...
                </p>
            )             
             }
        <div className="divider_mobile">
            <img src={divider_mobile} className='sm:hidden' alt="" />
            <img src={divider_desktop} className='hidden sm:block' alt="" />
        </div>
        <button onClick={fetchAdvice} 
            className='absolute bottom-[-23px] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center transition duration-300 ease-in-out hover:rotate-180 hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.5)] active:scale-95'>
             <img src={die}  alt="" />
        </button>
    </div>
  )
}

export default Card

