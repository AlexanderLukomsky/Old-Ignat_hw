import React, { useState } from 'react'
import Affairs from './Affairs'
import './hw2.scss'
// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(p => p.priority === 'high')
    if (filter === 'middle') return affairs.filter(p => p.priority === 'middle')
    if (filter === 'low') return affairs.filter(p => p.priority === 'low')
    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={'hw2 homeworks'}>
            <div className={'hw2__title  title'}>
                homeworks 2
            </div>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default HW2
