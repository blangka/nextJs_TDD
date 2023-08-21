"use client"

import FormTable from "@/components/formTable/FormTable";
import {useState} from "react";
import {useRecoilValue} from "recoil";
import {userState} from "@/stores/common";
import {ageFromString} from "@/utils/convert";

const UserInfoContainer = () => {
    const header = ['이름', '나이'];

    const user = useRecoilValue(userState);

    const [showUserInfo, setShowUserInfo] = useState(false);

    const handleClick = (value: boolean) => {
        setShowUserInfo(value);
    };


    return <div>
        <button onClick={() => handleClick(true)}>누굴 까요?</button>
        {showUserInfo && <FormTable header={header} data={[[user.name, user.age]]} onClick={() => handleClick(false)}/>}
        {showUserInfo && <h1>{ageFromString(user.age)}</h1>}
    </div>;
}

export default UserInfoContainer;
