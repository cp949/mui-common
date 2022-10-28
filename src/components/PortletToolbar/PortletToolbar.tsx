import { Box } from '@mui/material'
import React from 'react'

interface Props {
    // icon: ReactNode
    // title?: string
    // subtitle?: string
    children?: React.ReactNode
}

export default function PortletToolbar(props: Props) {
    const { children } = props
    return (
        <Box
            sx={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                display: 'flex',
            }}
        >
            {children}
        </Box>
    )
}
