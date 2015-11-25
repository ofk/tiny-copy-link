this.tiny.initialize((tiny) => {
  tiny.optionsPage.text('Pattern:', (value) => {
    tiny.options.pattern = value;
  }).value = tiny.options.pattern;
});
