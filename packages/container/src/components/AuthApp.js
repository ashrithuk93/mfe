import React, { useRef, useEffect } from 'react';
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigation } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if ( pathname !== nextPathname ) {
                    history.push(nextPathname);
                }
            },
            onSignIn: () => {
                onSignIn();
            }
        })

        history.listen(onParentNavigation);
        // history.listen((location) => { onParentNavigation(location) });
    }, [])

    return <div ref={ref} />
}

export default AuthApp;
