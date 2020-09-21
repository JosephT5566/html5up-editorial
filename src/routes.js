import React from 'react';
import { mount, route } from 'navi';

const appName = 'Editorial';

const routes = mount({
    '/': route({
        title: `Home - ${appName}`,
        getView: () =>
            import(
                /*webpackChunkName: "Homepage"*/
                './views/Homepage'
            ),
    }),
    '/generic': route({
        title: `Generic - ${appName}`,
        getView: () =>
            import(
                /*webpackChunkName: "Generic"*/
                './views/Generic'
            ),
    }),
});

export default routes;
