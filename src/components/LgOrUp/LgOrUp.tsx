/* eslint-disable react/jsx-no-useless-fragment */
import { Theme, useMediaQuery } from '@mui/material'
import React from 'react'

type Props = {
    children?: React.ReactNode
}

export default function LgOrUp(props: Props) {
    const { children } = props
    const matched = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
    if (!matched || !children) return null

    return children
}
