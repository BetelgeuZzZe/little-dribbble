import * as React             from 'react';
import { Icons, IIConsProps } from './Icons';
import * as styles from './styles/TinyInfo.less';

export interface ITinyInfoProps {
  icons?: Array<IIConsProps>;
}

export class TinyInfo extends React.PureComponent<ITinyInfoProps> {

  render() {
    const { icons, children } = this.props;
    return(
      <div className="tiny_info">
        <div className={styles.icons_row}>
          {icons
            ? icons.map((icon, i) => <Icons key={i} {...icon}/>)
            : children
          }
        </div>
      </div>
    );
  }
}