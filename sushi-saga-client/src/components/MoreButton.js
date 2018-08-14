import React from 'react'

const MoreButton = ({ getSushi, setEaten }) => {
    return (<button onClick={() => {getSushi(); /*setEaten()*/}}>
            More sushi!
          </button>
        )
}

export default MoreButton
