import * as React from 'react';
import * as styles from './styles/TopBar.less';

const items = [
  'Shots',
  'Designers',
  'Blog',
  'Podcast',
  'Meetups',
  'Jobs',
  'Hiring'
];

export class TopBar extends React.PureComponent  {
  render() {
    return(
      <div className={styles.topbar}>
        <div className={styles.logo}>
          <img src="/logo.png" alt=""/>
        </div>
        <div className={styles.full_menu}>
          {items.map((item) => (
            <div key={item} className={styles.item}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.menu}>
          <img src="/menu.png" alt=""/>
        </div>
      </div>
    );
  }
}