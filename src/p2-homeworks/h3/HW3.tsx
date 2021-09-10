import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
import './hw3.scss'
// types
export type UserType = {
    _id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([...users, { name: name, _id: v1() }])
    }
    return (
        <div className={'hw3 homeworks'}>
            <div className={'hw3__title title'}>
                homeworks 3
            </div>
            <GreetingContainer users={users} addUserCallback={addUserCallback} />
        </div>
    )
}

export default HW3
