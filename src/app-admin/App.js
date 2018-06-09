import React, { Component } from 'react';
import {adminLogin} from 'augle-admin-sdk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {getSomething} from './backend-service';
import '../admin.css';
class App extends Component {
  state= {
    perimeterId: "",
    loading: true
  }
  componentDidMount(){
    adminLogin().then((perimeterAppId)=>{
      ///getSomething()
    }).catch(()=>{
      this.setState({
        // contacts: allContacts.contacts || {},
        // noContactsMsg: allContacts.noContactMsg || "",
        loading: false,
        // perimeterAppId: perimeterAppId
        loginError: "Please login again"
      });
    });
  }
  render() {
    const {loading,loginError} = this.state;
    return <MuiThemeProvider>
      <div className="container">
      {!loading ? (loginError || "Admin UI"):"Loading please wait..."}
      </div>
        </MuiThemeProvider>;
  }
}

export default App;
