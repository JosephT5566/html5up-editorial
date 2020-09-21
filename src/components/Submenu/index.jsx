import React, { useState } from 'react';

export default function Submenu({ label, children }) {
    const [className, setClassName] = useState('');

    const onClickTogglePanel = () => {
        if (className === '') {
            setClassName('active');
        } else if (className !== '') {
            setClassName('');
        }
    };

    return (
        <>
            <span className={`opener ${className}`} onClick={onClickTogglePanel}>
                {label}
            </span>
            {children}
        </>
    );
}
