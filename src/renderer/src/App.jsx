import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <ul>
          <NavLink to="/222180551">Aniefa</NavLink>
          <li>tes</li>
          <li>tes</li>
          <li>tes</li>
        </ul>
      </div>
      <div style={{ flex: 7 }}>
        <Outlet />
      </div>
    </div>
  )
}
