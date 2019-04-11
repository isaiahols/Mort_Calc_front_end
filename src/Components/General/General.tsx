import React, { useState, useEffect } from 'react'
import data from '../../Data/Data';



const General = () => {
    const [credit, updateCredit] = useState('720-739')
    const [state, updateState] = useState('Utah')
    const [county, updateCounty] = useState('Salt Lake')
    const [type, updateType] = useState('Conventional')
    const [years, updateYears] = useState('30')
    const [rate, updateRate] = useState(4.125)
    const [veteran, updateVeteran] = useState(false)

    // // *** Get and Set Rate from api *** // //

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
            <h3>Select State</h3>
            <select value={state} onChange={(e) => updateState(e.target.value)}>
                {data.state.map((e: string, i: number) => <option key={i}>{e}</option>)}
            </select>
            <h3>Select County</h3>
            <select value={county} onChange={(e) => updateCounty(e.target.value)}>
                {justCounty.map((e: string, i: number) => <option key={i}>{pascalCase(e)}</option>)}
            </select>
            <h3>Select Loan Type</h3>
            <select value={type} onChange={(e) => updateType(e.target.value)}>
                {data.type.map((e: string, i: number) => <option key={i}>{e}</option>)}
            </select>
            <h3>Select Credit Range</h3>
            <select value={credit} onChange={(e) => updateCredit(e.target.value)}>
                {data.credit.map((e: string, i: number) => <option key={i}>{e}</option>)}
            </select>
            <h3>Loan Length (years)</h3>
            <select
                value={years}
                onChange={(e) => updateYears(e.target.value)}
            >
                {data.years.map((e: number, i: number) => <option key={i}>{e}</option>)}
            </select>
            <h3>Loan Rate (default to current rate)</h3>
            <div>
                <datalist id="tickmarks">
                    <option value="2.5" label='2.5%' />
                    <option value="3" />
                    <option value="3.5" />
                    <option value="4" label='4%' />
                    <option value="4.5" />
                    <option value="5" />
                    <option value="5.5" />
                    <option value="6" label='6%' />
                </datalist>
                <input
                    type="range"
                    id="start"
                    name="rate"
                    list="tickmarks"
                    min="2.5"
                    max="6"
                    step="0.125"
                    value={rate}
                    onChange={(e) => updateRate(+e.target.value)}
                />
                <label>Rate of {rate}%</label>
            </div>
            <p>Are you a Veteran:</p>

            <div>
                <input
                    type="radio"
                    id="huey"
                    name="drone"
                    value="huey"
                    onChange={() => updateVeteran(false)}
                    checked={!veteran}
                />
                <label
                    htmlFor='huey'
                >No</label>
            </div>

            <div>
                <input
                    type="radio"
                    id="dewey"
                    name="drone"
                    value="dewey"
                    onChange={() => updateVeteran(true)}
                />
                <label
                    htmlFor='dewey'
                >Yes</label>
            </div>
            <button>Next</button>
        </div>
    )
}

export default General
