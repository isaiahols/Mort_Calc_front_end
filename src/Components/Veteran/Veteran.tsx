import React, { useState, useEffect } from 'react'
import data from '../../Data/Data';

const Veteran = () => {
    const [vetType, updateVetType] = useState('Regular Military - 1st time')
    const [disability, updateDisability] = useState(false)
    const [childCare, updateChildCare] = useState('0')
    const [veteran, updateVeteran] = useState(true)

    const childCareValidation = (num: string): void => {
        console.log(num)
        let numOnly: (string[] | null) = num.match(/\d/gi)
        console.log(numOnly)
        console.log('fix child care validation so no 0 to start but 0 if nothing also, no more than 4 characters')

        updateChildCare(`${numOnly ? numOnly.join('') : ''}`)
        return
    }

    const updateData = () => {
        const vetUse: string = (vetType.indexOf('1') >= 0) ? 'first' : 'second+'
        const vetTypeShort = (vetType.indexOf('M') >= 0) ? 'Regular Military' : 'Reserves/Guard'
        const data = {
            childCareVA: childCare,
            vetType: vetTypeShort,
            vetUse: vetUse,
            vetDisability: disability,
        }
        
    }

    return (
        <div>
            <select value={vetType} onChange={(e) => updateVetType(e.target.value)}>
                {data.vetType.map((e: string, i: number) => <option key={i}>{e}</option>)}
            </select>
            <h3>Service Related Disability</h3>
            <div>
                <button onClick={() => updateDisability(true)}>Yes</button>
                <button onClick={() => updateDisability(false)}>No</button>
            </div>
            <h3>Child Care Expenses</h3>
            {/* Add a $ sign here in the input box */}
            <input
                type='text'
                value={childCare}
                // onClick={(e) => updateChildCare((childCare === '0') ? childCare : '')}
                onChange={(e) => childCareValidation(e.target.value)}
            />

            <button>Next</button>
            <button>Back</button>
            <h4>Not a veteran?</h4>
            <h4>skip to next step</h4>
        </div>
    )
}

export default Veteran
