import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
// I planned for this component to be the display component for each result on the NewPlant page, but I don't think it does what I wanted it to do.
const Result = (props) => {
    return (
        <div className="plant-result">
            <Card>
                <CardImg>{props.image_url}</CardImg>
                <CardBody>
                    <CardTitle>{props.common_name}</CardTitle>
                    <CardSubtitle>{props.description}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Result;