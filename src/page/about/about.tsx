import React, { FC, useContext, useEffect } from 'react';

import { AuthContext } from '../../@core/_context/authContext';
const About: FC = () => {
    const auth: any = useContext(AuthContext)
    // console.warn('auth--->' + auth.isAuth)


    // const [formText, setFormText] = useState('');
    const handerClick = () => {
        auth.setAuth(!auth.isAuth)
        // console.warn('auth--->' + auth.isAuth)
    }
    useEffect(() => {
        console.log('context here: ', auth.isAuth);

    }, [auth.isAuth])
    return (
        <div>
            Abuo
            <button onClick={handerClick}>改变</button>
            auth.isAuth:{auth.isAuth ? 123123 : 44444444444}
        </div>
    )
}

export default About
