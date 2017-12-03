import * as React   from 'react';
import ShotsActions from '../../actions/ShotsActions';

export function Backdrop() {
  return (
    <div
      className="backdrop"
      onClick={ShotsActions.kickCard}
    />
  );
}