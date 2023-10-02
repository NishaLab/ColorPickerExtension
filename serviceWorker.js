var count = 0

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  count = count + 1;
  console.log(`here the count: ${count}`)
  var tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url.includes("https://www.google.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./contentGoogle.js"]
    });
  }
})
