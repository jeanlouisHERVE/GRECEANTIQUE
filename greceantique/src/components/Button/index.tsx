import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Button = ({label, type}) => {
    return (
        <Link to="sign-up">
            <button type={type} className="btn">{label}</button>
        </Link>
    )
}

export default Button