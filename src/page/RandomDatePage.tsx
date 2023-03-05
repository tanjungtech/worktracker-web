import React, { useState } from 'react'
import { Paper, Button } from '@mui/material'
import { dateIdStdFormat, setYearByNumber, generateDateArray } from '../libraries/dateLibraries'

const RandomDatePage = () => {
  const currentDate: Date = new Date()
  const baseDate: Date = setYearByNumber(currentDate, -6)

  const [ dateObject, setDateObject ] = useState<Date[]>([])
  const [ datePhase, setDatePhase ] = useState<number>(0)
  const [ selectedRandomDate, setSelectedRandomDate ] = useState<Date>(new Date(0))

  const generateDateOptions = (e: any) => {
    e.preventDefault()
    setDatePhase(1)
    const dateArray = generateDateArray(baseDate, currentDate, false, true)
    setDateObject(dateArray)
  }

  const setRandomDate = (e: any) => {
    e.preventDefault()
    if (dateObject.length > 0) {
      let randomIndex = Math.floor((Math.random() * dateObject.length) + 1)
      setSelectedRandomDate(dateObject[randomIndex])
    }
  }

  const buttonHandlerLayout = (phase: number) => {
    if (phase === 0) {
      return (
        <div style={{ margin: '2em 0' }} >
          <Button onClick={ generateDateOptions } variant={'contained'} sx={{ textTransform: 'none', fontWeight: '400' }} >Prepare Date Options</Button>
        </div>
      )
    } else {
      return (
        <div style={{ margin: '2em 0' }} >
          <Button onClick={ setRandomDate } variant={'contained'} sx={{ textTransform: 'none', fontWeight: '400' }} >Generate Date Option</Button>
        </div>
      )
    }
  }

  return (
    <div>
      <Paper elevation={3} sx={{ padding: '.8em 3.4em' }}>
        <div className='header-page-wrapper'>
          <h2 className='page-title-default-format'>Random Date Page</h2>
        </div>
        <div className='content-page-wrapper'>
          <div>
            Start from <span className='randomdate-from-marker'>{ dateIdStdFormat(baseDate) }</span> to <span className='randomdate-to-marker'>{ dateIdStdFormat(currentDate) }</span>
          </div>
          { buttonHandlerLayout(datePhase) }
          { selectedRandomDate > baseDate && selectedRandomDate < currentDate &&
            <div>
              { dateIdStdFormat(selectedRandomDate) }
            </div>
          }
        </div>
      </Paper>
    </div>
  )
}

export default RandomDatePage