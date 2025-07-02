import Navbar from "../components/Navbar.jsx";
import Type from "../components/Type.jsx";


function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-10 min-h-screen bg-topography font-montserrat flex justify-center items-center flex-col">
        <div className="flex gap-16 min-h-screen">
          <div className="flex flex-col justify-center min-w-md">
            <p className="text-white text-3xl font-bold mb-4 tracking-wider">
              Salut ! je suis Hugo
            </p>
            <span className="text-white text-3xl font-bold mb-4 tracking-wider">
              <Type />
            </span>
          </div>
          {/* <div className="flex flex-col justify-center">
            <h1 className="text-white">Text 2</h1>
          </div> */}
        </div>
        <div className="">
          <p className="text-white">
            Texte de test
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
