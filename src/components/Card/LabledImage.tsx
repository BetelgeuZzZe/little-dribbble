import * as React        from 'react';
import { stringifyDate } from '../../utils/utils';

interface ILabeledImageProps {
  created_at: Date;
  teaser:     string;
  title:      string;
}

export function LabledImage({created_at, teaser, title}: ILabeledImageProps) {
  return(
    <div className="card__image">
      <div className="card__image_label">
        {stringifyDate(created_at)}
      </div>
      <img src={teaser} alt="preview"/>
      <div className="card__hover_label">
        {title}
      </div>
    </div>
  );
}