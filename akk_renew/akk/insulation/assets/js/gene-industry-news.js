document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('gi-news') || typeof Vue === 'undefined') {
    return;
  }

  const scriptUrl = document.currentScript?.src ?? new URL('gene-industry-news.js', document.baseURI).href;
  const insulationRootUrl = new URL('../../', scriptUrl);
  const newsDataUrl = new URL('assets/json/gene-industry-news.json', insulationRootUrl);

  new Vue({
    el: '#gi-news',
    data: {
      items: null
    },
    async mounted() {
      const response = await fetch(newsDataUrl, {
        credentials: 'same-origin'
      });
      const json = await response.json();
      this.items = json.slice(0, 3);
    },
    methods: {
      returnKey(obj) {
        return obj.tag + obj.date + obj.text + obj.link;
      },
      checkBlank(icon) {
        if (icon === 'pdf' || icon === 'blank') {
          return '_blank';
        }
        return null;
      }
    }
  });
});
