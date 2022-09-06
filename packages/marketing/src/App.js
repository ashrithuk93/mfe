import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
    productionPrefix: "ma"
});

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </div>
            </StylesProvider> 
        </BrowserRouter>
    )
}

export default App;
