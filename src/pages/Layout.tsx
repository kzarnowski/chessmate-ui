import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div style={{
            paddingInline: 20
        }}>
            <h1>ChessMate</h1>
            <Outlet />
        </div>
    )
}