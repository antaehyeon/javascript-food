
function requestData(params) {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(evt, res) {
    if (this.readyState == 4 && this.status == 200) {
      const response = evt.target.response;
      params.callback(response);
    }
  };

  xhttp.open("GET", params.url, true);
  xhttp.send();
}

window.addEventListener('DOMContentLoaded', () => {
  (new Carousel({
    dotStyle: 'big',
    selector: '.carousel--main'
  })).init();

  (new Carousel({
    dotStyle: 'small',
    selector: '.carousel--new-items'
  })).init();

  (new Carousel({
    dotStyle: 'small',
    selector: '.carousel--notices'
  })).init();
  
  const bestsellerTab = new TabMenu({
    buttons: '.bestseller > .container > .tab-buttons',
    contents: '.bestseller > .container > .tab-contents'
  });

  const BASE_URL = 'http://crong.codesquad.kr:8080/woowa/';

  requestData({
    url: BASE_URL + 'best',
    callback: bestsellerTab.init.bind(bestsellerTab)
  });
});
