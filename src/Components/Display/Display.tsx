import React, { useState, useEffect } from "react";
import General from '../General/General';
import Veteran from '../Veteran/Veteran';
import Financial from '../Financial/Financial';
import Result from '../Result/Result';
import axios from "axios";
import baseUrl from '../../../config'


const Display = () => {
    const [rate, updateRate] = useState('4')
    const defaultVetData = {
        "childCareVA": 0,
        "vetType": "Regular Military",
        "vetUse": "first",
        "vetDisability": false,
    }

    const [vetData, updateVetData] = useState(defaultVetData)

    const getRate = () => {
        axios.get(`${baseUrl}/rate`)
            .then((res) => {
                console.log(res)
                updateRate(res.data)
                return res.data
            })
    }

    useEffect(() => {
        getRate()
        // const newRate = getRate()
        // updateRate(newRate)
    }, [])

    const calculate = () => {
        const data = {

        }

        let type: string
        type = ''

        axios.post(`${baseUrl}/${type}/${rate}`)
    }

    const navigate = () => {

    }


    return (
        <div>
            <General />
            <hr />
            <Veteran />
            <hr />
            <Financial />
        </div>
    )
}

export default Display
