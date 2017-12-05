import * as React           from 'react';

import { IShotsStoreState } from '../../stores/ShotsStore';
import { stringifyDate }    from '../../utils/utils';
import { TinyInfo }         from '../TinyInfo/TinyInfo';
import { Content }          from './Content';
import { Layout }           from './Layout';
import { Header }           from './Header';
import { Footer }           from './Footer';
import { Icons }            from '../TinyInfo/Icons';
import { Extra }            from './Extra';
import { Image }            from './Image';
import * as Grid            from './Grid';

interface IModalProps extends IShotsStoreState {
}

export class Modal extends React.PureComponent<IModalProps> {
  
  render() {
    const { teaser, created_at, likes, views, title, hidpi, description, ...footerProps } = this.props;
    return(
      <Layout>
        <Image src={window.innerWidth > 425 ? hidpi : teaser} />
        <Grid.Flex>
          <Grid.Row>
            <Extra>
              <TinyInfo>
                <Icons icon={''} content={stringifyDate(created_at)}/>
                <Icons icon={'heart'} content={likes}/>
                <Icons icon={'eye'} content={views}/>
              </TinyInfo>
            </Extra>
            <Header content={title}/>
            <Content content={description}/>
          </Grid.Row>
          <Grid.Row>
            <Footer
              {...footerProps}
            />
          </Grid.Row>
        </Grid.Flex>
      </Layout>
    );
  }
}