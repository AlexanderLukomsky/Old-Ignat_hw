import React, { MouseEvent } from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (prior: FilterType) => void
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const setAll = (e: MouseEvent<HTMLButtonElement>) => { props.setFilter('all') } // need to fix
    const setHigh = (e: MouseEvent<HTMLButtonElement>) => { props.setFilter('high') }
    const setMiddle = (e: MouseEvent<HTMLButtonElement>) => { props.setFilter('middle') }
    const setLow = (e: MouseEvent<HTMLButtonElement>) => { props.setFilter('low') }

    return (
        <div className={'hw2__container'}>
            <div className={'hw2__list'}>
                {mappedAffairs}
            </div>
            <button className={'hw2__btn'} onClick={setAll}>All</button>
            <button className={'hw2__btn'} onClick={setHigh}>High</button>
            <button className={'hw2__btn'} onClick={setMiddle}>Middle</button>
            <button className={'hw2__btn'} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
