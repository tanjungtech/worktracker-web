import React from 'react'
import { Stack } from '@mui/material'

import { MotionButton, LinkIconButton, ConfigurationButton } from '../../component/Layout'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import SearchIcon from '@mui/icons-material/Search'

const ButtonStyling = () => {
    return (
      <div className='flex'>
        <div className='block-wrapper'>
          <h3 className='subtitle'>Button</h3>
          <Stack spacing={2} direction="row" className='align-items-center' >
            <MotionButton title='Standard Button' />
            <MotionButton title='Outlined Button' type='outlined' />
            <LinkIconButton title='Link Icon Button Right' link={'https://www.motiontrade.id'} linkIcon={<ArrowRightAltIcon />} external iconPosition='right' />
            <LinkIconButton title='Link Icon Button Left' link='/dashboard' linkIcon={<ArrowRightAltIcon />} iconPosition='left' />
            <ConfigurationButton title='Configuration Button' iconElement={<SearchIcon />} />
          </Stack>
        </div>
      </div>
    )
}

export default ButtonStyling