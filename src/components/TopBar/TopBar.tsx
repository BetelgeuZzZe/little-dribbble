import * as React from 'react';
const items = [
  'Shots',
  'Designers',
  'Blog',
  'Podcast',
  'Meetups',
  'Jobs',
  'Hiring'
];
export class TopBar extends React.PureComponent  {
  render() {
    return(
      <div className="topbar">
        <div className="topbar__logo">
          <img src="/logo.png" alt=""/>
        </div>
        <div className="topbar__desktop">
          {items.map((item) => (
            <div key={item} className="topbar__item">
              {item}
            </div>
          ))}
        </div>
        <div className="topbar__menu">
          <img src="/menu.png" alt=""/>
        </div>
      </div>
    );
  }
}