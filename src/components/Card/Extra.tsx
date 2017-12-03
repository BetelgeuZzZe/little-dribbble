import * as React   from 'react';
import { TinyInfo } from '../TinyInfo/TinyInfo';
import { Icons }    from '../TinyInfo/Icons';

interface IExtraProps {
  userName: string;
  likes:    number;
  views:    number;
}

export function Extra({userName, likes, views}: IExtraProps) {
  return(
    <div className="card__info_handler">
      <div className="card__name">
        {userName}
      </div>
      <TinyInfo>
        <Icons icon={'heart'} content={likes}/>
        <Icons icon={'eye'} content={views}/>
      </TinyInfo>
    </div>
  );
}