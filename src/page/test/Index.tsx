import React from 'react'

import TuneIcon from '@mui/icons-material/Tune'
import SortIcon from '@mui/icons-material/Sort'
import AddIcon from '@mui/icons-material/Add'

import { MotionButton, ConfigurationButton } from '../../component/Layout'

const Index = () => {
    return (
        <div>
          <div className='flex'>
            <div className='block-wrapper flex fullwidth justify-content-space-between'>
              <div className='flex-basis-40 inline-flex align-items-center'>
                <h4 className='headerlabel nomargin'>Test (3 Awaiting)</h4>
              </div>
              <div className='flex-basis-60 inline-flex justify-content-flex-end align-items-center'>
                <div>Search</div>
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
        </div>
    )
}

export default Index