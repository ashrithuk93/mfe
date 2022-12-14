import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: "au"
});

const App = ({ history, onSignIn }) => {
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Switch>
                        <Route path="/auth/signin">
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </div>
            </StylesProvider> 
        </Router>
    )
}

export default App;
