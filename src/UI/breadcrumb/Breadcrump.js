import React from 'react';
import './Breadcrump.css';

export default function Breadcrump(props) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{props.path}</li>
            </ol>
            <hr />
        </nav>
    )
}
