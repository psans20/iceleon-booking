import React from 'react';
import Hex from './Hex';

export default function Loader({ display }) {
    return (
        <div className={`h-screen fixed w-full ${display ? 'h-0' : 'z-50'}`}>
            <Hex display={display} />
        </div>
    );
}
