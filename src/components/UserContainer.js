import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/user/userActions'

function UserContainer({userData , fetchUser}) {
  console.log(userData.data)
 useEffect(() => {
    fetchUser()
 },[]) 
  return userData.loading ? (
    <h2>loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
        <h2>User List</h2>
        <div>
            {userData && userData.data && userData.data?.map (users => <p>{users.name}</p>)}
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UserContainer)