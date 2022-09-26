import { memo } from 'react';
import { Link } from 'umi';

type NavType = {
  name: string,
  to: string
}

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
              {to?.startsWith('http') ? <a href={to} target="_blank">{name}</a> : <Link to={to}>{name}</Link>}
            </li>
          )
        })
      }
    </ul>
  )
}

export default memo(NavList)