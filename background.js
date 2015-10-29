localStorage.pattern || (localStorage.pattern = '${title} ${url}');

function generateText(tab) {
  return localStorage.pattern.replace(/\${(\w+)}/g, function ($0, $1) {
    return tab.hasOwnProperty($1) ? tab[$1] : $0;
  });
}

function copyString(str) {
  var textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = str;
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

chrome.browserAction.onClicked.addListener(function (tab) {
  copyString(generateText(tab));
});
