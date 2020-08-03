import React, { Component } from 'react'
import Result from './Result'


function PlantResults(props) {

    let plants = props.info.map((plant) => {
        console.log(plant);
        return <Result name={plant.common_name} image={plant.image_url} description={plant.description} />
    })
    return (
        <div>
            {plants}
        </div>
    )
}

export default PlantResults

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DELETE THIS COMPONENT IF POSSIBLE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~