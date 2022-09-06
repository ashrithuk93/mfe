import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: "co"
});

const App = () => {
    return (
        <BrowserRouter generateClassName={generateClassName}>
            <StylesProvider>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;
