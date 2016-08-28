import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };

    this._inputChange = this._inputChange.bind(this);
  }

  componentDidMount(){
    console.log('Привет мир!')
  }

  _inputChange(event){
    let value = event.target.value;
    this.setState({search: value});
  }



  render() {
    return(
      <div>
        <input type="text" name="search" onChange={this._inputChange} value={this.state.search}/>
        <p>{this.state.search}</p>
      </div>
    )
  }
}

ReactDOM.render(<Search/>, document.getElementById('world'));
