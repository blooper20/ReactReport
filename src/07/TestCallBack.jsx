import { useEffect, useState, useCallback } from "react";

function TestCallBack() {
    const [number, setNumber] = useState(0);

    const someFunction = useCallback(() => {
        console.log(`number : ${number}`);
        return;
    }, []);

    useEffect(() => {
        console.log("function이 변경되었습니다.");
    }, [someFunction]);

    return (
        <div>
        <input 
        type="number" 
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button onClick={someFunction}>Call someFunc</button>
        </div>
    );
}

export default TestCallBack;