(function (global) {
  var tiny = global.tiny = {
    callbacks: [],
    initialize(fn) {
      this.callbacks.push(fn);
      this.initialized && this.start();
    },
    start() {
      this.initialized = true;
      while (this.callbacks.length) {
        this.callbacks.shift()(tiny);
      }
    }
  };

  global.chrome.runtime.getBackgroundPage((background) => {
    tiny.options = background.tiny.options.get();
    tiny.optionsPage = {
      container(label) {
        var divElement = document.createElement('div'),
            labelElement = divElement.appendChild(document.createElement('label'));
        labelElement.appendChild(document.createElement('span')).appendChild(document.createTextNode(label));
        labelElement.appendChild(document.createTextNode(' '));
        document.body.appendChild(divElement);
        return labelElement;
      },
      text(label, onchange) {
        var inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.size = 36;
        inputElement.addEventListener('input', (event) => {
          onchange(event.target.value);
          background.tiny.options.set(tiny.options);
        });
        return this.container(label).appendChild(inputElement);
      }
    };
    tiny.start();
  });
}(this));
