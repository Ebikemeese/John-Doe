import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
    return (
        <group name="lights">
        <Environment resolution={256}>
            <group>
            <Lightformer
                form="circle"
                intensity={1}
                position={[-1, 0, -10]}
                scale={10}
                color="#495057"
            />
            <Lightformer
                form="circle"
                intensity={1}
                position={[-10, 2, 1]}
                scale={10}
                rotation={[0, Math.PI / 2, 0]} // ✅ fixed
            />
            <Lightformer
                form="circle"
                intensity={1}
                position={[10, 0, 1]}
                scale={10}
                rotation={[0, Math.PI / 2, 0]} // ✅ fixed
            />
            </group>
        </Environment>

        <spotLight
            position={[0, 0, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={1}
            
        />
        <spotLight
            position={[0, 0, -10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={1}
            
        />
        <spotLight
            position={[0, 0, 10]}
            angle={0.15}
            penumbra={1}
            decay={0.1}
            intensity={Math.PI * 3}
        />
        </group>
    );
};

export default Lights;
