import { Stack } from '@mui/material'

export default function FontStyling() {
  return (
    <div className='flex'>
      <div className='block-wrapper'>
        <h3 className='subtitle'>Font Styling</h3>
        <Stack spacing={2} direction="row" className='align-items-baseline' >
          <h1 className='title'>Title</h1>
          <h3 className='subtitle'>Subtitle</h3>
          <h4 className='headerlabel'>Header Label</h4>
          <h6 className='minifiedheaderlabel'>Minified Header Label</h6>
        </Stack>
      </div>
    </div>
  )
}