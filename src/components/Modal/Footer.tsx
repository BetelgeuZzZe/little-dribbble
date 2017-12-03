import * as React from 'react';

interface IFooterProps {
  userName: string;
  location: string;
  avatar:   string;
  name:     string;
  bio:      string;
}

/**
 * Be aware, side-effects here, cause dribbble returning descriptions as html, we set it dangerously as is in content
 * @param props {IFooterProps}
 * @constructor
 */
export function Footer({avatar, userName, bio, location, name}: IFooterProps) {
  return(
    <div className="footer">
      <div className="footer__row">
        <div
          className="footer__avatar"
        >
          <img
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className="footer__name">
          {name}
        </div>
        <div className="footer__name--small">
          {userName}
        </div>
        <div className="footer__name--small-relaxed">
          {location}
        </div>
        <div className="footer__twitter_icon"/>
      </div>
      <div className="divider">
        <div className="divider__line"/>
      </div>
      <div className="footer__row">
        <div className="footer__content">
          <div dangerouslySetInnerHTML={{__html: bio}}/>
        </div>
      </div>
    </div>
  );
}