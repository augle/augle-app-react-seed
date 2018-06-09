import React, { Component } from 'react';
import './App.css';
import {getSometing} from './backend-service';
function  showMessage(msg){
  return <div className="row">
    <div className="col-auto">{msg||"No home services found in this perimter"}</div>
  </div>;
}
class App extends Component {
  state={
    loading: true,
  }
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    getSometing(window.Augle.getPerimeterId()).then((data)=>{
      this.setState({loading:false});
    })
  }
  render() {
    const {loading} = this.state;
    return <div>{!loading ? <div className="">Hello world</div>: showMessage("Loading...")}</div>
  }
}

export default App;
