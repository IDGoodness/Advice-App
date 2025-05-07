import { useState, useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [advice, setAdvice] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((json) => setAdvice(json))
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  useEffect(() => {
    fetchAdvice();

    // Listen for the 'beforeinstallprompt' event
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default mini-infobar
      setDeferredPrompt(event); // Save the event for later use
      setShowInstallButton(true); // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null); // Clear the deferred prompt
        setShowInstallButton(false); // Hide the install button
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh] bg-[#191d23]">
        <div className="">
          <Card advice={advice} fetchAdvice={fetchAdvice} />
          {showInstallButton && (
            <button
              onClick={handleInstallClick}
              className="mt-10 mx-auto px-4 py-2 bg-green-500 text-black rounded-md flex"
            >
              Install App
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
