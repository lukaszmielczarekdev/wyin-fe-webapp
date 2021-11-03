import * as wyinSDK from '@spio-wyin/wyin-sdk-feed';

const api = {
  getHistoryEvents: async (time) => {
    const lang = 'pl';
    return wyinSDK.getEventByTime(time, lang);
  },

  getHistoryRandomEvent: async () => {
    const lang = 'pl';
    return wyinSDK.getEventByRandom(lang);
  },

  getHistoryYearEvent: async (year) => {
    const lang = 'pl';
    return wyinSDK.getEventByYear(parseInt(year, 10), lang);
  },
};

export default api;
