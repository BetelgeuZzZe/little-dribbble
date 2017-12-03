import * as React from 'react';

export function Flex({children}: {children: any}) {
 return(
   <div className="modal__flex">
     {children}
   </div>
 );
}

export function Row({children}: {children: any}) {
  return(
    <div className="modal__row">
      {children}
    </div>
  );
}