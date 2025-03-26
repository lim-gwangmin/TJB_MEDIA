import Cookies from 'js-cookie';

export function setFirstVisitCookie() {
  Cookies.set('hasVisited', 'true', { expires: 365 * 50 });
}

export function getFirstVisitCookie() {
  return Cookies.get('hasVisited');
}

export function removeFirstVisitCookie() {
  return Cookies.remove('hasVisited');
}
