import React from 'react';
import './Breadcrump.css';

export default function Breadcrump(props) {
    return (
        <nav aria-label="breadcrumb" style={{ width: '100%', marginBottom: '30px' }}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{props.path}</li>
            </ol>
            <hr />
        </nav>
    )
}
