// import React from 'react';
// import PropTypes from 'prop-types';
import "./style.scss";

function Input({ type, name, value, placeholder, onChange, className }) {
    return (
        <div className={`input-container ${className}`}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="input-field"
            />
        </div>
    );
}

// Input.propTypes = {
//     type: PropTypes.string,
//     name: PropTypes.string,
//     value: PropTypes.string,
//     placeholder: PropTypes.string,
//     onChange: PropTypes.func,
//     className: PropTypes.string,
// };

// Input.defaultProps = {
//     type: 'text',
//     name: '',
//     value: '',
//     placeholder: '',
//     onChange: () => {},
//     className: '',
// };

export default Input;
