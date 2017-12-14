import * as React from 'react';
import * as styles from './styles/Card.less';

import { LabledImage }     from './LabledImage';
import { Extra }           from './Extra';

export interface ICardProps {
  created_at: Date;
  userName:   string;
  teaser:     string;
  likes:      number;
  views:      number;
  title:      string;
  id:         string;

  onClick?(id: string): void;
}

export function Card(props: ICardProps) {
  const { created_at, teaser, title, userName, likes, views, id } = props;
  const onClick = props.onClick ? () => props.onClick!(id) : () => ({});
  return(
    <div className={styles.card} onClick={onClick}>
      <LabledImage
        title={title}
        created_at={created_at}
        teaser={teaser}
      />
      <Extra views={views} likes={likes} userName={userName}/>
    </div>
  );
}
