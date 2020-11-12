import { React, useContext, useEffect } from 'react';
import Store from '../Store/Store';
import axios from 'axios';
import Keys from '../config.keys';
const UserProfilePage = () => {

    const [userData, setUserData] = useContext(Store);
    const isAuth = false;
    useEffect(() => {
        const getUserDetails = async () => {
            console.log(userData);
            try {
                const url = Keys.BASE_API + '/user';
                var res = await axios.put(url, {
                    headers: {
                        'authorization': userData.token,

                    }
                });
                console.log(res);


            }
            catch (e) {
                console.log(e);
            }
        };
        getUserDetails();
    });
    return (
        <div>

            {
                isAuth ? <div> Yepppe you are logined</div> : <div>You are not logined </div>
            }
            User Profile Page
        </div>
    )
};
export { UserProfilePage };