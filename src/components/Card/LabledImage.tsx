import * as React        from 'react';
import { stringifyDate } from '../../utils/utils';
import * as styles       from './styles/Card.less';

interface ILabeledImageProps {
  created_at: Date;
  teaser:     string;
  title:      string;
}

export function LabledImage({created_at, teaser, title}: ILabeledImageProps) {
  return(
    <div className={styles.image}>
      <div className={styles.image_label}>
        {stringifyDate(created_at)}
      </div>
      <img src={teaser} alt="preview"/>
      <div className={styles.hover_label}>
        {title}
      </div>
    </div>
  );
}