import { API_KEY } from './appConstants';

export const SERVER_ENDPOINT = 'https://newsapi.org/v2';
export const NEWS_LIST = `${SERVER_ENDPOINT}/everything?apiKey=${API_KEY}&domains=bbc.co.uk`;
