import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
    componentDidMount(){
        console.log('Привет мир!!!')
    }

    render() {
        return <h1>Wow World</h1>
    }
}

ReactDOM.render(<World/>, document.getElementById('world'));