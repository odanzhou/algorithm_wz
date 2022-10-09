import { memo } from 'react';
import ALink from '@/components/link/ALink'
import type { NavType } from '@/components/link/ALink'

type NavListProps = {
  list: NavType[],
  className?: string,
}

/**
 * 导航列表
 */
const NavList = (props: NavListProps) => {
  const { list, className } = props
  return (
    <ul className={className}>
      {
        list.map(({ name, to }) => {
          return (
            <li key={to}>
              <ALink to={to} name={name} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default memo(NavList)