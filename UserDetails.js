import React, {Component} from 'react';

const GITHUB_USER_API = 'https://api.github.com/users/';
class UserDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            isFetching: false,
            userDetails: {}
        }
    }

    async componentDidMount(){
        this.setState({isFetching: true})
        const URL = GITHUB_USER_API + this.props.match.params.userLogin
        const res = await fetch(URL)
        const userDetails = await res.json()
        this.setState({isFetching: false, userDetails})
    }


    render(){
        if(this.state.isFetching){
            return(
                <h1>Fetching data, Please wait ...</h1>
            )
        }

        return(
            <div>
                <h1>{this.state.userDetails.name}</h1>
                <h2>{this.state.userDetails.company}</h2>
                <img src={this.state.userDetails.avatar_url} alt='User Profile Pic' style={{margin:"20px"}}/>
            </div>
        )
    }
}

export default UserDetails