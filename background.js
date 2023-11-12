(function()
{

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

      const redirectToMainPage = url.pathname.includes("/Hypixel_SkyBlock_Wiki");

      // Make the new URL
      const redirectUrl = redirectToMainPage ? `https://wiki.hypixel.net/Main_Page` : `https://wiki.hypixel.net${url.pathname.replace(/^\/wiki\//i,"/")}`;

      // Redirect
      chrome.tabs.update(info.tabId, {url:redirectUrl});

    }

  );

})();
