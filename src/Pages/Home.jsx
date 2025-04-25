import { useState, useEffect} from 'react'
import Card from '../Components/Card'

const Home = () => {
    const [advice, setAdvice] = useState(null)
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallButton, setShowInstallButton] = useState(false);


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
        
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
        } else {
            console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
    };

  return (
    <>
        <div className='flex items-center justify-center h-[100vh] bg-[#191d23] '>
            {showInstallButton && (
            <div>
                <button onClick={handleInstallClick} className="install-button" style={{ position: 'fixed', bottom: '1rem', right: '1rem', padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    Install App
                </button>
                <Card advice={advice} fetchAdvice={fetchAdvice} />
            </div>
            )}
        </div>
    </>
  )
}

export default Home