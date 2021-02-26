import React from 'react';
import { useStrict } from 'mobx';
import RouterConfig from './router';
import { Provider } from 'mobx-react';
import GuideListStore from './guideList/guideListStore';


useStrict(true);
export default class App extends React.Component {
    render() {
        const stores = {
            GuideListStore
        };
        return (
            <Provider {...stores} ><RouterConfig /></Provider>
        )
    }
}