(function(){

  const OLDWIKI_REGEX = /^hypixel-skyblock\.(wikia|fandom)\.com$/i;

  chrome.webNavigation.onBeforeNavigate.addListener
  (

    function(info)
    {

      const url = new URL(info.url);
      const isOldWiki = OLDWIKI_REGEX.test(url.host);
      if (!isOldWiki)
      {

            return;

      }

      // Make new URL
      const redirectUrl = `https://wiki.hypixel.net${url.pathname.replace(/^\/wiki\//i,"/")}`;

      // Redirect
      chrome.tabs.update(info.tabId,{url:redirectUrl});

    }

  );

})();