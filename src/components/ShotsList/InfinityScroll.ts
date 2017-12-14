import * as React from 'react';

interface IInfinityScrollProps {
  onScroll: (page: number) => void;
  page: number;
}

export class InfinityScroll extends React.Component<IInfinityScrollProps> {
  componentDidMount() {
    this.props.onScroll(this.props.page);
    window.addEventListener('scroll', this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listener);
  }

  render() {
    return this.props.children;
  }

  private listener = () => {
    if (document.body.scrollHeight === window.scrollY + window.innerHeight) {
      this.props.onScroll(this.props.page);
    }
  }
}