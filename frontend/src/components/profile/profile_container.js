import { connect } from "react-redux"
import Profile from "./profile";


const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

//may need to export logout action
export default connect(mSTP)(Profile)