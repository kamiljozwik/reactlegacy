import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import './styles/main.less';
import ComponentForLegacy from './ComponentForLegacy';

interface IConfig {
    selector: string;
}

interface IArgs {
    prop1: string;
    prop2: string;
}

export default {
    settingsScreen: {
        createComponent: {
            // use this method on legacy system to generate React element and mount it in DOM:
            new: (config: IConfig) => {
                return {
                    render: (args: IArgs) => {
                        ReactDOM.render(
                            <ComponentForLegacy prop1={args.prop1} prop2={args.prop2}/>,
                            document.querySelector(config.selector),
                        );
                    },
                };
            },
            // use this method to return React component:
            react: (args: IArgs) => <ComponentForLegacy prop1={args.prop1} prop2={args.prop2}/>,
        },
    },
    // add more screens here...
};
