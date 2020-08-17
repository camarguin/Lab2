import React, { useContext } from 'react';
import {TestContext} from './Context/testContext';

const ChildComp5 = () =>  {
    const someObject = useContext(TestContext);
    console.log(someObject);
    return(
        <>
            <div>This is using useContext: {someObject.students}</div>
        </>
    )

}

export default ChildComp5;