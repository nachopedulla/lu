import React, { useEffect, useState } from "react";
import Countdown from "../components/Countdown";

const CountdownWrapper = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => { setTimeout(() => setCurrentDate(new Date()), 1000) } )

    return (
        <Countdown params={{startDate: new Date(2021, 7, 7, 20, 0, 0), endDate: currentDate}}/>
    )
}

export default CountdownWrapper;