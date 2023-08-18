"use client";

import React from 'react';

import {RecoilRoot} from 'recoil';

interface IProps {
    children: React.ReactNode;
}

const RecoilProvider = ({children}: IProps) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
