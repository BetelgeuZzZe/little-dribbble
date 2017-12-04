import * as React from 'react';
import * as styles from './styles/Footer.less';

interface IFooterProps {
  userName: string;
  location: string;
  avatar:   string;
  name:     string;
  bio:      string;
}

/**
 * Be aware, side-effects here, cause dribbble returning descriptions as html, we set it dangerously as is in content
 * @param props {IFooterProps}
 * @constructor
 */
export function Footer({avatar, userName, bio, location, name}: IFooterProps) {
  return(
    <div className={styles.footer}>
      <div className={styles.row}>
        <div
          className={styles.avatar}
        >
          <img
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.name_small}>
          {userName}
        </div>
        <div className={styles.name_small_relaxed}>
          {location}
        </div>
        <div className={styles.twitter_icon}/>
      </div>
      <div className={styles.divider}>
        <div className={styles.divider_line}/>
      </div>
      <div className={styles.row}>
        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{__html: bio}}/>
        </div>
      </div>
    </div>
  );
}