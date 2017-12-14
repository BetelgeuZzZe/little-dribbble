import * as React from 'react';

import { InfinityScroll } from './InfinityScroll';
import { Grid, Column }   from '../Grid';
import { IShot }          from '../../reducers/shots';
import Card               from '../Card';

export interface IShotsProps {
  shots: Array<IShot>;
  onCardClick: (id: string) => void;
  onScroll: (page: number) => void;
  page: number;
}

export function Shots({shots, onCardClick, onScroll, page}: IShotsProps) {
  return(
    <InfinityScroll onScroll={onScroll} page={page}>
      <Grid>
        {shots.map(card => (
          <Column key={card.id}>
            <Card {...card} onClick={onCardClick}/>
          </Column>
        ))}
      </Grid>
    </InfinityScroll>
  );
}