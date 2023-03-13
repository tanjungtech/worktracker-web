
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TuneIcon from '@mui/icons-material/Tune'
import SortIcon from '@mui/icons-material/Sort'
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
// import { testTypeInterface } from '../../type/pageType'

import { MotionButton, ConfigurationButton, InputIconDefault } from '../../component/Layout'

const NavSection = () => {
    const [searchVal, setSearchVal] = useState('')
    let navigate = useNavigate()

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchVal(e.target.value)
    }

    const submitSearch = (e:React.SyntheticEvent) => {
        e.preventDefault()
        navigate(`?q=${searchVal}`)
    }
    return (
        <div className='section-content-navigation'>
            <div className='flex fullwidth justify-content-space-between'>
                <div className='flex-basis-40 inline-flex align-items-center'>
                    <h4 className='headerlabel nomargin'>Test (3  Ongoing)</h4>
                </div>
            <div className='flex-basis-60 inline-flex justify-content-flex-end align-items-center'>
                <div className='priority-list-item'>
                    <form onSubmit={ submitSearch }>
                        <InputIconDefault iconElement={ <SearchIcon /> } placeholder='Search Test' fullwidth size='small' borderType='circle' fullWidthExtended onChangeHandler={ onChangeHandler } />
                    </form>
                </div>
                <div className='button-list-item'>
                    <ConfigurationButton title='Filter' iconElement={<TuneIcon />} />
                </div>
                <div className='button-list-item'>
                    <ConfigurationButton title='Sort' iconElement={<SortIcon />} />
                </div>
                <div className='button-list-item'>
                    <MotionButton title='New Test' iconElement={<AddIcon />} size='small' />
                </div>
                </div>
            </div>
        </div>
    )
}

export default NavSection