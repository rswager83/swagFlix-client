import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

import './index.scss';

export class MainView extends React.Component {

    render() {
        return (
            <div className='main-view'>
                <div>Predator</div>
                <div>Lethal Weapon</div>
                <div>48hrs</div>
            </div>
        );
    }
}

