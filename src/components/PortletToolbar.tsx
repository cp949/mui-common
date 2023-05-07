import * as React from 'react'

interface Props {
    icon: React.ReactNode
    title?: string
    subtitle?: string
    children?: React.ReactNode | React.ReactNode[]
}

export function PortletToolbar(props: Props) {
    const { children } = props
    return (
        <div
            className="PortletToolbar-root"
            style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                display: 'flex',
            }}
        >
            {children}
        </div>
    )
}
