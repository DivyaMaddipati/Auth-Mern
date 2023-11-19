import {GoogleLogout} from 'react-google-login';

const clientId = "842523348082-nog8olqesbn8i8mutqgghdpo28g5r0pb.apps.googleusercontent.com";

function Glogout(){

    const onSuccess = () => {
        console.log("Log out Successfull!");
    }

    return(
        <>
            <GoogleLogout
                clientId = {clientId}
                buttonText={"Logout"}
                onLogoutSuccess = {onSuccess}
            />
        </>
    )
}
export default Glogout;
