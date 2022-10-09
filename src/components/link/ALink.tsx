import { memo } from 'react';
import { Link } from 'umi';

export type NavType = {
  name: string,
  to: string
}

/**
 * 导航列表
 */
const ALink = (props: NavType) => {
  const { name, to } = props
  return to?.startsWith('http') ? <a href={to} target="_blank">{name}</a> : <Link to={to}>{name}</Link>
}

export default memo(ALink)