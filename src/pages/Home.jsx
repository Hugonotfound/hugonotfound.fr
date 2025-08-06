import Navbar from "../components/Navbar.jsx";
import Type from "../components/Type.jsx";
import Wallpaper from "../components/wallpaper/Wallpaper.jsx";

function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-[-1]">
          <Wallpaper />
        </div>
        <Navbar />
        <div className="relative min-h-screen font-montserrat flex justify-center items-center flex-col">
          <div className="flex gap-16 min-h-screen">
            <div className="flex flex-col justify-center min-w-md">
              <p className="text-white text-3xl font-bold mb-4 tracking-wider">
                Salut ! je suis Hugo
              </p>

              <span className="text-white text-3xl font-bold mb-4 tracking-wider">
                <Type />
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="-250 -250 500 500"
                  preserveAspectRatio="xMidYMid meet"
                  className=""
                >
                  <path
                    d="M113.9 -132C145.7 -82 168.3 -41 165.5 -2.8C162.7 35.4 134.4 70.7 102.5 98C70.7 125.4 35.4 144.7 -16.3 161C-67.9 177.2 -135.8 190.4 -163.6 163.1C-191.4 135.8 -179.2 67.9 -172.9 6.4C-166.5 -55.2 -166 -110.3 -138.1 -160.3C-110.3 -210.3 -55.2 -255.2 -7.1 -248.1C41 -241 82 -182 113.9 -132"
                    fill="#FFFF"
                    style={{ transition: "0.3s" }}
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-100 bg-gray-200">
            <div>
              <div className="w-3xs h-3xs rounded-md bg-red-500 p-10">
                <p className="text-2xl">test</p>

              </div>
              {/* <svg
                width="100px"
                height="100px"
                viewBox="-250 -250 500 500"
                preserveAspectRatio="xMidYMid meet"
                className=""
              >
                <path
                  d="M113.9 -132C145.7 -82 168.3 -41 165.5 -2.8C162.7 35.4 134.4 70.7 102.5 98C70.7 125.4 35.4 144.7 -16.3 161C-67.9 177.2 -135.8 190.4 -163.6 163.1C-191.4 135.8 -179.2 67.9 -172.9 6.4C-166.5 -55.2 -166 -110.3 -138.1 -160.3C-110.3 -210.3 -55.2 -255.2 -7.1 -248.1C41 -241 82 -182 113.9 -132"
                  fill="#000"
                  style={{ transition: "0.3s" }}
                ></path>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
