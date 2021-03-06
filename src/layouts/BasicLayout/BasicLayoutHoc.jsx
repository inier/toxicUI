import React, { Component } from 'react';

const BasicLayoutHoc = (WrappedComponent) => {
    class Container extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        componentDidMount() {}

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    return Container;
};

export default BasicLayoutHoc;
