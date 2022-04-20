import Header from "./components/Header";
import Logos from "./components/Logos";

import imageMobile from "./images/image-hero-mobile.png";
import imageDesktop from "./images/image-hero-desktop.png";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Image */}

      <img className='md:hidden mb-[48px]' src={imageMobile} alt='' />
      <img className='hidden md:inline-block' src={imageDesktop} alt='' />

      <div className='flex flex-col items-center px-3 text-center'>
        <h1 className='text-4xl font-bold mb-[28px] font-epilogue'>
          Make remote work
        </h1>

        <p className='text-base mb-[24px] font-epilogue font-normal'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className='mb-[48px] h-[48px] w-[136px] bg-black text-white rounded-xl text-base font-normal font-epilogue hover:bg-white hover:text-black hover:border-2 hover:border-black'>
          Learn more
        </button>

        {/* Logos */}
        <Logos />
      </div>
    </div>
  );
}

export default App;
