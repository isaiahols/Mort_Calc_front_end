import React, { useState, useEffect } from 'react'
import data from '../../Data/Data';



const General = () => {
    const [credit, updateCredit] = useState('720-739')
    const [state, updateState] = useState('Utah')
    const [county, updateCounty] = useState('Salt Lake')
    const [type, updateType] = useState('Conventional')
    const [years, updateYears] = useState('30')
    const [rate, updateRate] = useState('4.125')


    const filteredCounty: string[] = data.county.filter((e) => e.slice(0, e.indexOf(' ')) === state)
    const justCounty: string[] = filteredCounty.map((e) => e.slice(e.indexOf('- ') + 1))
    const pascalCase = (word: string): string => {
        let pascal: string[] = word.split(' ')
        pascal = pascal.map(e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase())
        return pascal.join(' ')
    }

    // const addPercent = (r: string): string => `${r}%`

    // const handleRateChange = (r: string): void => updateRate(r.slice(0, r.indexOf('%')))

    return (
        <div>
            <select value={state} onChange={(e) => updateState(e.target.value)}>
                {data.state.map((e: string, i: number) => <option key={i}>{e}</option>)}
            </select>
            <select value={county} onChange={(e) => updateCounty(e.target.value)}>
                {justCounty.map((e: string, i: number) => <option key={i}>{pascalCase(e)}</option>)}
            </select>
            <select value={type} onChange={(e) => updateType(e.target.value)}>
                {data.type.map((e: string, i: number) => <option key={i}>{e}</option>)}
            </select>
            <select value={credit} onChange={(e) => updateCredit(e.target.value)}>
                {data.credit.map((e: string, i: number) => <option key={i}>{e}</option>)}
            </select>
            <select
                value={years}
                onChange={(e) => updateYears(e.target.value)}
            >
                {data.years.map((e: number, i: number) => <option key={i}>{e}</option>)}
            </select>
            {/* <input
                type="text"
                placeholder={addPercent(rate)}
                value={addPercent(rate)}
                onChange={(e) => handleRateChange(e.target.value)}
            /> */}
            <div>
                <input
                    type="range"
                    id="start"
                    name="rate"
                    min="2.5"
                    max="6"
                    step="0.125"
                    value={rate}
                    onChange={(e) => updateRate(e.target.value)}
                />
                <label>Rate of {rate}%</label>
            </div>
        </div>
    )
}

export default General
