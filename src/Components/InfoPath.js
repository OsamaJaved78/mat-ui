import React, { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats';
import Rough from './Rough';


export default function InfoPath({ currentScreen }) {

    if (currentScreen === 0)
        return <GlobalStats />

    else if (currentScreen === 1)
        return <Rough />
    else return <GlobalStats/>

}
