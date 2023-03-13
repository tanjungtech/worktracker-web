import { InputIconDefault } from '../../component/Layout'

import SearchIcon from '@mui/icons-material/Search'

const InputStyling = () => {
    return (
      <div className='flex'>
        <div className='block-wrapper'>
          <h3 className='subtitle'>Input</h3>
          <>
            <InputIconDefault iconElement={ <SearchIcon /> } placeholder='Left Icon' size='small' borderType='circle' fullwidth />
          </>
        </div>
      </div>
    )
}

export default InputStyling