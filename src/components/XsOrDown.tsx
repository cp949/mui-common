import { Theme, useMediaQuery } from '@mui/material'
import * as React from 'react'

type Props = {
    children?: React.ReactNode | React.ReactNode[]
}

export function XsOrDown(props: Props) {
    const { children } = props
    const matched = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    if (!matched || !children) return null
    return <>{children}</>
}
