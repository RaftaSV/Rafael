import React from 'react';
import Index from 'pages/index';
import { ROUTES } from 'config';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="/">
                    <Route path={ROUTES.HOME.absolutePath} element={<Index />} />
                </Route>
            </ReactRoutes>
        </BrowserRouter>
    );
};

export default Routes;
