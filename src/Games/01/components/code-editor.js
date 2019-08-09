import React, { useState } from "react";
import LevelOne from './levels/one';

function CodeEditor() {
    const [level, setLevel] = useState(1);

    const moveToNextLevel = () => {
        setLevel(level + 1);
    }

    return (
        <div>
            {/* //render component conditionly 
            // if one == one show one */}
            <LevelOne moveToNextLevel={moveToNextLevel} />
        </div>
    );
}

export default CodeEditor;