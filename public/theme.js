(function () {
  var KEY = 'theme';
  var modes = ['system', 'light', 'dark'];
  var root = document.documentElement;

  function get() {
    try {
      var v = localStorage.getItem(KEY);
      return modes.indexOf(v) >= 0 ? v : 'system';
    } catch (e) {
      return 'system';
    }
  }

  function apply(t) {
    if (t === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', t);
  }

  function render() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var label = btn.querySelector('[data-theme-label]');
    if (label) label.textContent = get();
  }

  function set(t) {
    try {
      localStorage.setItem(KEY, t);
    } catch (e) {}
    apply(t);
    render();
  }

  apply(get());

  document.addEventListener('DOMContentLoaded', function () {
    render();
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var i = modes.indexOf(get());
      set(modes[(i + 1) % modes.length]);
    });
  });
})();
