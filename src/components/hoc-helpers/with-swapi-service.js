import React from 'react'


import {  SwapiConsumer } from '../swapi-context';

const withSwapiService = (mapMethodstoProps) => (View) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapi) => {
                        const serviceProps = mapMethodstoProps(swapi);
                        return <View {...props} {...serviceProps} />
                    }
                }
            </SwapiConsumer>
        );
    }
}

export default withSwapiService;