import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-green ba shadow-5 dib pa3 br-pill ma3 grow bw3 '>
            <img src={`https://robohash.org/set_set5/${id}?150x150`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
// set_set5
export default Card; 