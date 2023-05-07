import * as React from 'react'
import { TableBody, TableBodyProps } from '@mui/material'
import clsx from 'clsx'

interface Props extends TableBodyProps {
  loading?: boolean
  stripe?: boolean
}

export function CustomTableBody(props: Props) {
  const { sx, className, loading, stripe, ...otherProps } = props

  return (
    <TableBody
      className={clsx('CustomTableBody-root', className, {
        'CustomTableBody-stripe': !!stripe,
        'CustomTableBody-loading': !!loading,
      })}
      sx={[
        {
          '&.CustomTableBody-loading': {
            opacity: 0.5,
          },
          '&.CustomTableBody-stripe': {
            '& .MuiTableRow-root:nth-of-type(even)': {
              backgroundColor: (theme) => theme.palette.action.hover,
            },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx ?? false]),
      ]}
      {...otherProps}
    />
  )
}
