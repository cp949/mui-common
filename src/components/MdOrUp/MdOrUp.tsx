import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type Props = {
    children?: React.ReactNode
}
export default function MdOrUp(props: Props) {
    const { children } = props
    const theme = useTheme()
    const matched = useMediaQuery(theme.breakpoints.up('md'))
    if (!matched || !children) return null

    // eslint-disable react/jsx-no-useless-fragment
    return <>{children}</>
}
