import { Theme, useMediaQuery } from '@mui/material'
import React from 'react'

type Props = {
    children?: React.ReactNode
}
export default function SmOrUp(props: Props) {
    const { children } = props
    const matched = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))
    if (!matched || !children) return null
    if (!matched || !children) return null
    return children
}
