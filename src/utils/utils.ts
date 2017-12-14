import { IShot } from '../reducers/shots';

export function getShots(page: number = 0) {
  return new Promise(((resolve, reject) => {
    return fetch(url('shots', page))
      .then((response) => response.json())
      .then(body => resolve(serialize(body)))
      .catch(reject);
  }));
}

export function stringifyDate(date: Date) {
  return `${format(date.getDay())}.${format(date.getMonth())}.${date.getFullYear()}`;
}

function format(n: number): string {
  return n < 10 ? `0${n}` : n.toString(10);
}

function url(endpoint: string, page: number = 0): string {
  const accessToken = '41aa339daf148fa0a6545363aaa1e4c3d8c38ccbc172b3cf854494a42ed07e34';
  const origin = 'https://api.dribbble.com/v1/';
  return `${origin}${endpoint}?access_token=${accessToken}&per_page=30&page=${page}`;
}

// tslint:disable-next-line
function serialize(responses: Array<any>): Array<IShot> {
  return responses.map(({user, images, likes_count, views_count, created_at, title, id, description}) => {
    const {username, location, name, avatar_url, bio} = user;
    const {teaser, hidpi} = images;
    return {
      userName: username,
      avatar: avatar_url,
      likes: likes_count,
      views: views_count,
      created_at: new Date(created_at),
      location,
      name,
      bio,
      teaser,
      hidpi,
      title,
      description,
      id
    };
  });
}

export function assign<T, P>(state: T) {
  return function(newPart: Partial<P>) {
    return Object.assign({}, state, newPart);
  };
}