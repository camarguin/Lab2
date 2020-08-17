import React, {Component} from 'react';
import { TestContext } from './Context/testContext';

class ChildComp4 extends Component {
    //this name MUST be "contextType"
    static contextType = TestContext;
    render(){
        console.log('consumer: ', this.context);
        return(
            <>
                <div>
                    This is ChildComp4, using Class Component: {this.context.students}
                    <br/>
                    <button onClick={()=> this.context.onSubmit("Hi there!")}>
                        Click
                    </button>
                </div>
            </>
        )
    }
}

export default ChildComp4;