import "./Wallpaper.css";

function Wallpaper() {
  return (
    <div className="absolute gooey-wrapper">
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
        <div
          className="pointer-events-none w-full"
          // style={{
          //   position: "absolute",
          //   left: 0,
          //   right: 0,
          //   bottom: -4,
          //   height: "32px",
          //   background:
          //     "linear-gradient(180deg, rgba(255,255,255,0) 0%, #e2e8f0 100%)",
          //   zIndex: 1,
          // }}
        ></div>
      </div>
    </div>
  );
}

export default Wallpaper;
