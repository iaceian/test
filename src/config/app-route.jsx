import React from 'react';

import App from './../app.jsx';

import Archive from '../__pages__/archive/archive.js';
import Checkmate from '../__pages__/checkmate/checkmate.js';
import Contact from '../__pages__/contact/contact.js';
import ClassDetails from '../__pages__/events/class-details/class-details.js';
import Leg2Details from '../__pages__/events/leg2-details/leg2-details.js';
import Leg3Details from '../__pages__/events/leg3-details/leg3-details.js';
import Leg4Details from '../__pages__/events/leg4-details/leg4-details.js';
import Leg5Details from '../__pages__/events/leg5-details/leg5-details.js';
import PamaskongHandogDetails from '../__pages__/events/pamaskong-handog-details/pamaskong-handog-details.js';
import Tournaments from '../__pages__/tournaments/tournaments.js';
import Tournaments2 from '../__pages__/tournaments/tournaments2.js';
import Events from './../__pages__/events/events.js';



const AppRoute = [
{
    path: '*',
    element: <App />,
    children: [
        {
            path: '',
            element: <Events />
        },
        {
            path: 'events',
            element: <Events />
        },
        {
            path: 'events/class-details',
            element: <ClassDetails />
        },
        {
            path: 'events/leg2-details',
            element: <Leg2Details />
        },
        {
            path: 'events/leg3-details',
            element: <Leg3Details />
        },
        {
            path: 'events/leg4-details',
            element: <Leg4Details />
        },
        {
            path: 'events/leg5-details',
            element: <Leg5Details />
        },
        {
            path: 'events/pamaskong-handog-details',
            element: <PamaskongHandogDetails />
        },
        {
            path: 'checkmate',
            element: <Checkmate />
        },
        {
            path: 'contact',
            element: <Contact />
        },
        {
            path: 'archive',
            element: <Archive />
        },
        {
            path: 'tournaments',
            element: <Tournaments />
        },
        {
            path: 'tournaments2',
            element: <Tournaments2 />
        }
    ]
}
];


export default AppRoute;