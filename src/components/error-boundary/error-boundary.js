import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundary extends Component {
    state = {
        isError: false
    };

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
        this.setState({isError: true});
    }

    render() {
        if(this.state.isError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}