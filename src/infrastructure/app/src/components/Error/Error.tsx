import React, { ReactElement } from 'react'
import Box from '@mui/material/Box'
import { Alert } from '@mui/material'
import { errorBoxStyles } from './styles'

interface ErrorProps {
  message?: string
}

function Error({
  message = 'Oops something went wrong, try reloading the page again please :)',
}: ErrorProps): ReactElement {
  return (
    <Box sx={errorBoxStyles}>
      <Alert severity='error' data-testid='error-wrapper-testid'>
        {message}
      </Alert>
    </Box>
  )
}

export default Error
