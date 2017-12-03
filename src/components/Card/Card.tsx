import * as React from 'react';

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

export class Card extends React.PureComponent<ICardProps> {
  render() {
    const { created_at, teaser, title, userName, likes, views } = this.props;
    return(
      <div className="card" onClick={this.handleCardClick}>
        <LabledImage
          title={title}
          created_at={created_at}
          teaser={teaser}
        />
        <Extra views={views} likes={likes} userName={userName}/>
      </div>
    );
  }

  private handleCardClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.id);
    }
  }
}