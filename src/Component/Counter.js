import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : 10));
    };

    const decrementCount = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const resetCount = () => {
        setCount(0);
    };

    // Calculate the height of the background color based on the count
    const backgroundHeight = `${(count / 10) * 100}%`; // Adjust the multiplier as needed

    // Calculate the background color based on the count
    const backgroundColor = `rgba(0, 54, 255, 0.5)`; // Adjust the color and opacity

    return (
        <div
            style={{
                position: "relative",
                height: "250px",
                width: "300px",
                zIndex: 1,
                borderRadius: '4px',
                overflow: "hidden",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor,
                    backgroundImage: 'linear-gradient(300deg, #5078f2 10%, #efe9f4 90%)',
                    height: backgroundHeight,
                    transition: "height 0.5s ease",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <h1 style={{ zIndex: 2, }}>Count: {count}</h1>
            <div style={{ position: "relative", display: 'flex', zIndex: 2, gap: '7px' }}>
                <button className='count-btn' onClick={incrementCount}>+</button>
                <button className='count-btn' onClick={resetCount}>Reset</button>
                <button className='count-btn' onClick={decrementCount}>-</button>

            </div>
        </div>
    );
}


export default Counter