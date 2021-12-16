import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
//import DaycareForm from './DaycareForm';
//import ParentForm from './ParentForm';

export default function Registration() {

    return (
        <div className="signupOptions">
            <Button as="a" href="/ParentForm">Parent</Button>
            <Button as="a" href="/DaycareForm">Daycare</Button>
        </div>


    )
}
