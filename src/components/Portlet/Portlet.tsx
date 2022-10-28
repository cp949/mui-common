import { Paper, PaperProps } from '@mui/material'
import React from 'react'

type Props = Omit<PaperProps, 'elevation' | 'component' | 'nonce'>

const Portlet = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { sx, className, children, ...restProps } = props
    return (
        <Paper
            {...restProps}
            elevation={0}
            ref={ref}
            component="div"
            className={className ? `Portlet-root ${className}` : 'Portlet-root'}
            sx={[
                {
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #ddd',
                },
                ...(Array.isArray(sx) ? sx : [sx ?? false]),
            ]}
        >
            {children}
        </Paper>
    )
})

Portlet.displayName = 'Portlet'
export default Portlet
