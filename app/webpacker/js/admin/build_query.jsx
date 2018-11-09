import { buildMessageQuery } from './components/messages';
import { buildPageQuery } from './components/pages';
import { buildSiteQuery } from './components/sites';

export default () => (fetchType, resource, params) => {
  switch (resource) {
    case 'messages': return buildMessageQuery(fetchType, params);
    case 'pages': return buildPageQuery(fetchType, params);
    case 'sites': return buildSiteQuery(fetchType, params);
    default: throw new Error(`Unkown resource ${resource}`);
  }
};