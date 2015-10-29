localStorage.pattern || (localStorage.pattern = '${title} ${url}');

var inputForm = document.querySelector('input[name="pattern"]');
inputForm.value = localStorage.pattern;
inputForm.addEventListener('input', function (evt) {
  localStorage.pattern = evt.target.value;
}, false);
