import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <ul>
          <NavLink to={"/222180560"}>Kedrick A</NavLink>
        </ul>
      </div>
      <div style={{ flex: 7 }}>
        <Outlet />
      </div>
    </div>
  )
}
