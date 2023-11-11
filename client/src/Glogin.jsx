import {GoogleLogin} from 'react-google-login';

const clientId = "http://842523348082-nog8olqesbn8i8mutqgghdpo28g5r0pb.apps.googleusercontent.com"

function Glogin(){

    const onSuccess = (res) => {
        console.log("Login Success ! current user: ", res.pofileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res:", res);
    }

    return(
        <>
             <GoogleLogin
                    clientId = {clientId}
                    buttonText = "login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />

        </>
    )
}
export default Glogin;