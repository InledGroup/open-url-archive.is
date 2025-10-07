chrome.action.onClicked.addListener((tab) => {
  if (tab.url && (tab.url.startsWith('http://') || tab.url.startsWith('https://'))) {
    const archiveUrl = 'https://archive.is/' + tab.url;
    chrome.tabs.create({ url: archiveUrl });
  }
});
