import React, { useState, useEffect } from 'react'
import Counter from './Component/Counter'
import ContactForm from './Component/ContactForm'
import UserDataForm from './Component/UserDataForm'
import TextEditor from './Component/TextEditor'

export const USER_DATA_STORAGE_KEY = "initUserData"

const HomeContainer = () => {
    const [userDataState, setUserDataState] = useState(null);

    useEffect(() => {
        let x = localStorage.getItem(USER_DATA_STORAGE_KEY);
        if (!x) {
            let initUserData = {
                uuid: crypto.randomUUID(),
                name: "",
                email: "",
                phone: "",
                address: "",
                showUserDataJson: false
            };

            localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(initUserData));
            console.log(JSON.stringify(initUserData));
            setUserDataState(initUserData);
        } else {
            setStateValue(JSON.parse(x));
        }
    }, []);

    function setStateValue(userData) {
        let newData = { ...userDataState, ...userData };
        localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(newData));
        setUserDataState(newData);
    }

    return (
        <div style={{
            display: 'grid',
            columnGap: 3,
            rowGap: 3,
            gridTemplateColumns: 'repeat(2, 1fr)',
            margin: 10,
            overflow: "hidden",
        }}>
            <Counter />
            <TextEditor />
            {/* <TextEditor key={crypto.randomUUID()}/> */}
            <ContactForm state={userDataState} setState={setStateValue} />
            {userDataState && <UserDataForm state={userDataState} setState={setStateValue} />}
        </div>
    )
}

export default HomeContainer