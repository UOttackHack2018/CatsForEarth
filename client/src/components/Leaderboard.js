import React, { Component } from 'react';
import Requests from '../Requests/requests';
import '../styles/Leaderboard.css';

class Leaderboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        let req = new Requests();
        req.get('http://10.196.10.220:3001/users/leaderboard', (response) => {
            console.log(response);
            this.setState({users: response});
        })

    }

    renderLeaderboard() {
        const {users} = this.state;
        users.map((user,i) => {
            console.log(i)
            return (
                <tr>
                    <th scope="row">1</th>
                    <td>{users[i].username}</td>
                    <td>{users[i].points}</td>
                </tr>
            )
        })
        
    }

    render() {
        const {users} = this.state;
        return (
            <div className="green-container">
                <div className="green-inner-container">
                    <h1>LEADERBOARD</h1>
                    <div className="activity-inner-container">
                        <div className="an-activity">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Points</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user,i) => {
                                            console.log(i)
                                            return (
                                                <tr key={`${users[i].username}${i}`}>
                                                    <th scope="row">{i+1}</th>
                                                    <td>{users[i].username}</td>
                                                    <td>{users[i].points}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard;