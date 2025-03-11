import React, { useEffect, useRef, useState } from 'react';
import './OrderSuccessful.css'; // Ensure this path is correct

const OrderSuccessful = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [hideCake, setHideCake] = useState(false); // State for hiding the cake
    const cakeRef = useRef(null);

    // Effect to trigger the message display after the animation ends
    useEffect(() => {
        const handleAnimationEnd = () => {
            setShowMessage(true); // Show the success message
            setHideCake(true); // Immediately hide the cake after showing the message
        };

        const cakeElement = cakeRef.current;
        if (cakeElement) {
            cakeElement.addEventListener('animationend', handleAnimationEnd);
        }

        return () => {
            if (cakeElement) {
                cakeElement.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, []);

    return (
        <div className="ani_container">
            {/* Hide cake if hideCake is true */}
            {!hideCake && (
                <div className="cake" ref={cakeRef}>
                    <div className="cake-layer"></div>
                    <div className="cake-layer"></div>
                    <div className="cake-layer"></div>
                </div>
            )}

            {showMessage && (
                <div className="message show">
                    <div className="emoji">✔️</div>
                    <div>Order Successful!</div>
                </div>
            )}
        </div>
    );
};

export default OrderSuccessful;