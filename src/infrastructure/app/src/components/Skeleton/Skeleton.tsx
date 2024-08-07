import { Box, Skeleton as SkeletonMui } from '@mui/material'
import React, { ReactElement } from 'react'

function Skeleton(): ReactElement {
  return (
    <Box sx={{ width: '100%' }} data-testid='skeleton-wrapper'>
      <SkeletonMui height='150px' />
      <SkeletonMui height='150px' />
      <SkeletonMui height='150px' />
    </Box>
  )
}

export default Skeleton
