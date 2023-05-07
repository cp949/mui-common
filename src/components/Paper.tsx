import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material'
import clsx from 'clsx'
import React from 'react'

type Props = {
    squared?: boolean
    outlined?: boolean
} & MuiPaperProps

export function Paper(props: Props) {
    const { className, sx, squared, outlined, children, ...rest } = props
    return (
        <MuiPaper
            {...rest}
            className={clsx('Paper-root', className)}
            sx={[
                {
                    borderRadius: squared ? 0 : 1,
                    border: outlined ? '1px solid #ddd' : 'none',
                },
                ...(Array.isArray(sx) ? sx : [sx ?? false]),
            ]}
        >
            {children}
        </MuiPaper>
    )
}
