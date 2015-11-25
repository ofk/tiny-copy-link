(function (tiny, chrome) {
  tiny.options.data || (tiny.options.data = {
    pattern: '${title} ${url}'
  });

  function generateText(tab) {
    return tiny.options.get().pattern.replace(/\${(\w+)}/g, ($0, $1) => tab.hasOwnProperty($1) ? tab[$1] : $0);
  }

  function copyString(str) {
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = str;
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }

  chrome.browserAction.onClicked.addListener((tab) => {
    copyString(generateText(tab));
  });
}(this.tiny, this.chrome));
