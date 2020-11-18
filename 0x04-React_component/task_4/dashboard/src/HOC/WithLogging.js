import React, { Component } from 'react';

function WithLogging(comp) {

    return class extends Component {
        constructor(props) {
            super(props);
            this.displayName = `WithLogging(${comp.displayName || 'Component'})`;
        }

        componentDidMount() {
            console.log(`Component ${comp.displayName || 'Component' } is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${comp.displayName || 'Component'}is going to unmount`);
        }

        render() {
            return <comp {...this.props} />
        }
    }
}

export default WithLogging;