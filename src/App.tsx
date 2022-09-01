import plu1 from "../assets/plu1.jpg";
import plu4767 from "../assets/plu4767.jpg";
import "./global.css";

function App() {
  return (
    <div className='App'>
      <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        WOOLWORTHS PLU FILE LINKS:
      </h1>
      <div className='gap-100'>
        <button
          onClick={() =>
            (window.location.href =
              "https://birdey.com.au/content/dam/emergency-documents/bakeryMethodsheets/what_good_looks_like/plu1.jpg")
          }
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          <div className='text-lg'>PLU - 1</div>
          <img style={{ height: 200 }} src={plu1} />
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "https://birdey.com.au/content/dam/emergency-documents/bakeryMethodsheets/what_good_looks_like/plu4767.jpg")
          }
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          <div className='text-lg'>PLU - 4767</div>
          <img style={{ height: 200 }} src={plu4767} />
        </button>
      </div>
    </div>
  );
}

export default App;
