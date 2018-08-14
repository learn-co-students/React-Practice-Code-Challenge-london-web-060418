import React from 'react'

const MoreButton = (props) => {

    const {handleMoreSushis} = props;

    return <button onClick={handleMoreSushis}>
            More sushi!
          </button>
}

export default MoreButton
