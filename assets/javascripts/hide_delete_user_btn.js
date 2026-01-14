(function() {
  // Check if on users page (flexible matching)
  if (!window.location.pathname.match(/\/users\/?$/)) return;

  function hideDeleteButton() {
    var deleteItem = document.querySelector('#context-menu > ul > li:nth-child(3)');
    if (deleteItem) {
      deleteItem.style.display = 'none';
    }
  }

  function init() {
    var observer = new MutationObserver(function() {
      hideDeleteButton();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
