import React from 'react'

function DynamicComp() {
    let myName = 'Suvra';
    let fullName = () => {
        return 'Suvra Roy';
    }

    return <p>
        Hello this is {myName}. And my full name is {fullName()}
    </p>

}

export default DynamicComp;