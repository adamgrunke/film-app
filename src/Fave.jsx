import React from 'react';

const Fave = (props) => {

function handleClick(e) {
    e.stopPropagation()
    props.handleFaveToggle()
}

    return(
        <div onClick={handleClick} className='film-row-fave'>
            <p className='material-icons'>{'add_to_queue'}</p>
        </div>
    );
}

export default Fave;