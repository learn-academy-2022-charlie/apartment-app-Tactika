import React, { Component } from 'react'
import { Container, Card,CardGroup, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default class ApartmentIndex extends Component {
  render() {
    const { listings } = this.props
    console.log("Listings Props:", listings)
    return (
      <Container>
      <h3>Apartments</h3>
      <CardGroup>
        {listings && listings.map((property, index) =>{
          return (
            <Card key={index}>
              <CardImg
                alt={property.street}
                src={property.image}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {property.street}, {property.city}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Specs
                </CardSubtitle>
                <CardText>
                  <strong>Bedrooms:</strong> {property.bedrooms}<br/>
                  <strong>Bathrooms:</strong> {property.bathrooms}
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </CardGroup>
      </Container>

    )
  }
}
