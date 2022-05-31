import React from 'react';

export default function Button({ name, title, handleFunction }) {
    console.log(handleFunction);
    return (
        <button onClick={handleFunction} className={`${name}  buttonCommon`}>
            {title}
        </button>
    );
}
