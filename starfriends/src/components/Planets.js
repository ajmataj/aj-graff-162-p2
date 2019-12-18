import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function People({ data }) {
    return (
        <>
            <h1>Planets</h1>
            <Grid columns={3}>
                {data.map((planets, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planets.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Rotation Period</strong>
                                        <p>{planets.rotation_period}</p>
                                        <strong>Population</strong>
                                        <p>{planets.population}</p>
                                        <strong>Climate</strong>
                                        <p>{planets.climate}</p>
                                        <strong>Terrain</strong>
                                        <p>{planets.terrain}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}
