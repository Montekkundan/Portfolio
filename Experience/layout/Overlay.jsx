
  import useFlock from "../stores/useFlock.js";
  
  export default function Overlay() {
    const changeSpeed = useFlock((state) => state.changeSpeed);
    const speed = useFlock((state) => state.speed);
    const behavior = useFlock((state) => state.behavior);
    const nextBehavior = useFlock((state) => state.nextBehavior);
    const geometry = useFlock((state) => state.geometry);
    const nextGeometry = useFlock((state) => state.nextGeometry);
  
    return (
      <div className="absolute z-[100]  text-[white]">
        <div className="pl-[1vw] top-[5vw]">
          <h1 className="font-bold text-6xl  z-[200] ">Hello</h1>
          <p>hey there</p>
        </div>
        <div className="pl-[1vw] top-[5vw]">
          <div className="cursor-pointer" onClick={() => nextGeometry()}>{geometry}</div>
          <br />
          <div className="cursor-pointer" onClick={() => nextBehavior()}>{behavior}</div>
        </div>
        {/* <RightMiddle>
          <span>{speed}</span>
          <input
            type="range"
            min="0.5"
            max="2.4"
            value={speed}
            step="0.1"
            autoFocus
            onChange={(e) => changeSpeed(Number(e.target.value))}
          />
        </RightMiddle> */}
        <div className="w-[30ch] max-w-[40%] left-[5vw] bottom-[5vw]">
          <h1 className="text-6xl">hello</h1>
        </div>
        <div className="right-[5vw] bottom-[5vw]">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
  