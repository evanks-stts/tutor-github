import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <ul>
          <li>
            <NavLink to="/214116317">Evan Ks</NavLink>
          </li>
          <li>
            <NavLink to="/222180563" style={{ textDecoration: 'none', color: 'palevioletred' }}>
              Febyy
            </NavLink>
          </li>
          <li>
            <NavLink to="/222180551">Aniefa</NavLink>
          </li>
        </ul>
      </div>
      <div style={{ flex: 7 }}>
        <Outlet />
      </div>
    </div>
  )
}
