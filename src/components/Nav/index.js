import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            });
          }
        }).catch(error => {
            console.log('Logout error');
        });
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ');
        console.log(this.props);
        
        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Button href = "/" variant="contained" color="grey">home</Button>

                                    <Button href = "/login" variant="contained" color="danger">login</Button>

                                    <Button href = "/signup" variant="contained" color="primary">sign up</Button>
                                </section>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <h1 className="App-title">Pethub</h1>
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar