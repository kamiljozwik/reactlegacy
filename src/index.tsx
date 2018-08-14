import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import ComponentForLegacy from './ComponentForLegacy';

interface IConfig {
    selector: string
}

interface IArgs {
    prop1: string,
    prop2: string
}

export default {
    settingsScreen: {
        createComponent: {
            new: (config: IConfig) => {
                return {
                    render: (args: IArgs) => {
                        ReactDOM.render(
                            <ComponentForLegacy prop1={args.prop1} prop2={args.prop2}/>,
                            document.querySelector(config.selector)
                        );
                    }
                }
            },
            react: (args: IArgs) => <ComponentForLegacy prop1={args.prop1} prop2={args.prop2}/>,
        }
    }
}
