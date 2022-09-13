import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    const onParentNavigation = ({ pathname: newPathname }) => {
        const pathname = history.location;

        if (pathname !== newPathname) {
            history.push(newPathname);
        }
    }

    return { onParentNavigation }
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#_marketing-dev-root");

    if (el) {
        mount(el, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };