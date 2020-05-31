import React, { useState, useEffect, useMemo, useCallback } from "react";
import Button from "../../../components/Button";

// Destructring 
// Chay 1 lan dau tien duy nhat, Truoc khi render

const LifeCycleDemo = () => {
    // Tuong ung voi Constructor
    useMemo(() => {
        console.log("useMemo run <-> constructor");
    }, []);

    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Smith'
    });

    // useEffect(() => {
    //     // DidMount & DidUpdate
    //     console.log("useEffect run");

    //     return () => {
    //         // componentWillUnmout <=> Component sẽ bị remove khỏi cấu trúc DOM 
    //     }
    // });
    useEffect(() => {
        console.log("Lang nghe su thay doi cua hai state counter va visible");
    }, [counter, visible])

    useEffect(() => {
        // DidMount - Chay 1 lan duy nhat sau khi render lan dau tien
        console.log("useEffect run - empty deps")
    }, [])

    useEffect(() => {
        console.log("Lang nghe su thay doi cua counter");
    }, [counter]);

    useEffect(() => {
        console.log("Lang nghe su thay doi cua visible");
    }, [visible]);

    // Khong duoc lam dung.
    const fullName = useMemo(() => {
        return user.firstName + ' ' + user.lastName
    }, [user]);

    const handleIncreaseCounter = useCallback(() => {
        setCounter(counter + 1);
    }, [counter])

    return (
        <div className="container">
            <h1>Play Ground - Life Cycle - React Hooks {fullName}</h1>
            <button onClick={handleIncreaseCounter} >Counter Add</button>
            <p>{counter}</p>


            <button onClick={() => {
                setVisible(false);
            }}>Hide button</button>
            {
                visible && <Button />
            }
        </div>
    )
}

export default LifeCycleDemo;