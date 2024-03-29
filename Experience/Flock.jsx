
import MovementAI from "./ai/MovementAI";




import { Canvas } from "@react-three/fiber";
import PropTypes from "prop-types";
import { useYuka } from "./ai/useYuka";
import * as THREE from "three";
import { Vehicle } from "yuka";
import useFlock, { geometries } from "./stores/useFlock";

const normalMaterial = new THREE.MeshNormalMaterial({ flatShading: true });

function Cone({ speed = 1.2 }) {
    const [ref] = useYuka({
        type: Vehicle,
        name: "vehicle",
        speed,
        position: [
            THREE.MathUtils.randFloat(-6, -4),
            THREE.MathUtils.randFloatSpread(1),
            THREE.MathUtils.randFloat(4, 2),
        ],
        rotation: [Math.random() * Math.PI, 0, Math.random() * Math.PI],
    });

    const geometry = useFlock((state) => state.geometry);

    return (
        <mesh
            ref={ref}
            geometry={geometries[geometry]}
            material={normalMaterial}
        />
    );
}

Cone.propTypes = {
    speed: PropTypes.number,
};

function Flock({ count = 200, depth = 60 }) {
    const speed = useFlock((state) => state.speed);

    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.01,
                far: depth + 15,
                position: [0, 6, 0],
            }}
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
        >
            <MovementAI>
                {Array.from({ length: count }, (_, i) => (
                    <Cone key={i} index={1} speed={speed} />
                ))}
            </MovementAI>

        </Canvas>
    );
}

Flock.propTypes = {
    speed: PropTypes.number,
    count: PropTypes.number,
    depth: PropTypes.number,
};

export default Flock;
