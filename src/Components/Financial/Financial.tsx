import React, { useState, useEffect } from 'react'

const Financial = () => {
    const [income, updateIncome] = useState('0')
    const [debt, updateDebt] = useState('0')
    const [alimony, updateAlimony] = useState('0')
    const [childSupport, updateChildSupport] = useState('0')

    // // *** Note *** // //
    // Validation will be moved to logic file for testing
    // could make multiple validations (one for each )
    const validation = (input: number, type: string) => {
        // should set to 0 if nothing in input
        // should remove 0 at start of number
        // should allow for no more than 10 characters
    }

    return (
        <div>
            <h3>Gross Monthly Income</h3>
            <input
                type='text'
                value={income}
                onChange={(e) => updateIncome(e.target.value)}
            />
            <h3>Consumer Debt that reflects on Credit</h3>
            <input
                type='text'
                value={debt}
                onChange={(e) => updateDebt(e.target.value)}
            />
            <h3>Alimony</h3>
            <input
                type='text'
                value={alimony}
                onChange={(e) => updateAlimony(e.target.value)}
            />
            <h3>Child Support</h3>
            <input
                type='text'
                value={childSupport}
                onChange={(e) => updateChildSupport(e.target.value)}
            />
    <button>b</button><button>Calculate Mortgage</button>
        </div>
    )
}

export default Financial
