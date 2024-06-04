// import React from 'react';

function Text(props) {
    const Componenttype = props.textType;
    return (
        <Componenttype>
            {props.content}
        </Componenttype>
    );
}

export default Text;
