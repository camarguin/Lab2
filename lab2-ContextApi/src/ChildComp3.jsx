import React from 'react';
import {TestContext} from './Context/testContext';
import ChildComp4 from './ChildComp4';
import ChildComp5 from './ChildComp5';

const ChildComp3 = () => {
    return(
        <TestContext.Consumer>
            {value => {
                return(
                    <>
                        <div>This is the consumer, receiving data: {value.students}</div>
                        <ChildComp4 />
                        <ChildComp5 />
                    </>
                )
            }}
        </TestContext.Consumer>
    )
}

export default ChildComp3;