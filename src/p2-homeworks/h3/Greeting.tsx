import React, { ChangeEvent } from 'react'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = !error ? 'hw3__input' : 'hw3__input hw3__error-input'

    return (
        <div className={'hw3__container'}>
            <input value={name} onChange={setNameCallback} className={inputClass} />
            <span className={'hw3__error'}>{error}</span>
            <button onClick={addUser}>add</button>
            <span className={'hw3__counter'}>
                {totalUsers}</span>
        </div>
    )
}

export default Greeting
