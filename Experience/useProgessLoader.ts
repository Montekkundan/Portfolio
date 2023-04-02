import { useProgress } from '@react-three/drei';

const useProgressLoader = () => {
  const { progress } = useProgress();
  return progress.toFixed(0);
};

export default useProgressLoader;
