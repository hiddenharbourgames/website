// Zählt einen Seitenaufruf bei GoatCounter: ohne Cookies, ohne Speicher im Browser (Datenschutz Nr. 4).
(function () {
  if (navigator.webdriver || location.hostname !== "hiddenharbourgames.com") return; // keine Bots, keine lokalen Vorschauen
  new Image().src = "https://hiddenharbourgames.goatcounter.com/count?p=" +
    encodeURIComponent(location.pathname) + "&rnd=" + Math.random().toString(36).slice(2);
})();
