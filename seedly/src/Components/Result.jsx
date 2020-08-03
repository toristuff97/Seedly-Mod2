import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

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