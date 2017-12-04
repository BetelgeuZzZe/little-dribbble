import * as React   from 'react';
import { TinyInfo } from '../TinyInfo/TinyInfo';
import { Icons }    from '../TinyInfo/Icons';
import * as styles  from './styles/Card.less';

interface IExtraProps {
  userName: string;
  likes:    number;
  views:    number;
}

export function Extra({userName, likes, views}: IExtraProps) {
  return(
    <div className={styles.info_handler}>
      <div className={styles.name}>
        {userName}
      </div>
      <TinyInfo>
        <Icons icon={'heart'} content={likes}/>
        <Icons icon={'eye'} content={views}/>
      </TinyInfo>
    </div>
  );
}