import { useState } from "react";

function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    function handleValueChange(){
        setValue(target.value);
    }

    return [value, handleValueChange, setValue];
}

export default useInput;