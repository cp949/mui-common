import { Box, SxProps } from '@mui/material'
import * as React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    sx?: SxProps
    noDivider?: boolean
}

export const PortletFooter = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { noDivider, sx, className, children, ...rest } = props
    return (
        <Box
            {...rest}
            className={className ? `PortletFooter-root ${className}` : 'PortletFooter-root'}
            ref={ref}
            sx={[
                {
                    py: 1,
                    px: 2,
                    borderTop: noDivider ? 'none' : '1px solid #E0E4EE',
                    borderBottomLeftRadius: '2px',
                    borderBottomRightRadius: '2px',
                },
                ...(Array.isArray(sx) ? sx : [sx ?? false]),
            ]}
        >
            {children}
        </Box>
    )
})

PortletFooter.displayName = 'PortletFooter'
