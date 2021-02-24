import { authorize } from 'passport';
import React from 'react';

const Home = (props) => {
    return (
        <div className = "wrapper" style = {{textAlign : 'center'}}>
            <a href = "/auth/google" id="google-button" class="btn btn-block btn-social btn-google" style = {{marginLeft : "40%" , marginTop : "15%", height : "70px" , width : "350px" , display : 'block'}}><i class="fa fa-google"></i> Sign in with Google</a>
        </div>

    )
}




export default Home;