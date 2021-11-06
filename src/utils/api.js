import { getEventByTime, getEventByRandom, getEventByYear } from '@spio-wyin/wyin-sdk-feed';

const api = {
  getHistoryEvents: async (time) => {
    const lang = 'pl';
    return getEventByTime(time, lang);
  },

  getHistoryRandomEvent: async () => {
    const lang = 'pl';
    return getEventByRandom(lang);
  },

  getHistoryYearEvent: async (year) => {
    const lang = 'pl';
    return getEventByYear(parseInt(year, 10), lang);
  },
};

export default api;
