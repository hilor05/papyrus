import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const GITHUB_USER_LIST_API = 'https://api.github.com/users?since=135';
class UserList extends Component {
    constructor(props){
        super(props)

        this.state = {
            userList: [],
            isFetching: false
        }
    }

    async componentDidMount(){
        this.setState({isFetching: true})
        const res = await fetch(GITHUB_USER_LIST_API)
        const userList = await res.json()
        this.setState({userList, isFetching: false})
    }

    render(){
        if(this.state.isFetching){
            return(
                <div>
                    <h1>Fetching user list, Please wait...</h1>
                </div>
            )
        }


        return(
            <div>
                <ul style={{textAlign: 'left'}}>
                    {this.state.userList.map(user=>(
                        <li key={user.id}>
                            <Link to={`/user/${user.login}`}>
                                {user.login}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default UserList