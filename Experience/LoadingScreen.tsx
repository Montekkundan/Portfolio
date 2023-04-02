import useProgressLoader from "./useProgessLoader";


interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const progress = useProgressLoader();
  return (
    <div style={{ position: 'fixed', backgroundColor: 'black', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'none' }}>
      <div style={{ backgroundColor: 'black', border: '2px solid white', padding: '2rem', borderRadius: '0.5rem', fontFamily: 'monospace', color: 'white' }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Montek OS [Version 10.0.19043.1266]</p>
        <p style={{ fontSize: '1.5rem' }}>Loading... {progress} %</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
