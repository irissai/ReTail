import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarLeft() {
  const menu = [
    { name: 'alerts', path: '/alerts' },
    { name: 'box shawdow', path: '/box-shawdow' },
    { name: 'buttons', path: '/buttons' },
    { name: 'cards', path: '/cards' },
    { name: 'forms', path: '/forms' },
  ]

  return (
    <div className='min-h-screen border-r border-[#222333] text-md'>
      <ul>
        {menu.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-8 py-5 cursor-pointer hover:bg-[#2b1e7057] ${
                  isActive ? 'bg-[#ffffff14] font-bold text-[#ffffff]' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
