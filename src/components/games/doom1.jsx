// em um arquivo separado, por exemplo, Doom1.js
import React, {useRef, useEffect, useState} from "react";
import { DosPlayer as Instance, DosPlayerFactoryTyp as Dos } from "js-dos";
// import "./js-dos/js-dos";
// import "./js-dos/js-dos.css"


const Doom1 = (props) => {
      const rootRef = useRef<HTMLDivElement>(null);

    const [dos, setDos] = useState<Instance | null>(null);

    useEffect(() => {
        if (rootRef === null || rootRef.current === null) {
            return;
        }

        const root = rootRef.current;
        const instance = Dos(root);

        setDos(instance);

        return () => {
            instance.stop();
        };
    }, [rootRef]);

    useEffect(() => {
        if (dos !== null) {
            dos.run(props.bundleUrl); // ci is returned
        }
    }, [dos, props.bundleUrl]);

    return <div ref={rootRef} style={{ width: "100%", height: "100%" }}>
    </div>;
};

export default Doom1;
