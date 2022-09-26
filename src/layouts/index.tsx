import { Outlet } from 'umi';
import NavList from './NavList'
import styles from './index.less';

const navList = [
  {
    name: 'Home',
    to: '/',
  }, {
    name: 'Docs',
    to: '/docs',
  }, {
    name: 'Array',
    to: '/array',
  },
]

const otherNavList = [
  {
    name: 'Github',
    to: 'https://github.com/odanzhou/algorithm_wz',
  }, {
    name: 'Umi',
    to: 'https://github.com/umijs/umi',
  },
]

export default function Layout() {
  return (
    <div className={styles.navs}>
      <div className={styles.nav_container}>
        <NavList list={navList} />
        <NavList list={otherNavList} />
      </div>
      <Outlet />
    </div>
  );
}
