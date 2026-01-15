(function() {
  function hideDeleteButton() {
    var pathname = window.location.pathname;

    // Hide delete in context menu (user list page)
    if (pathname.match(/\/users\/?$/)) {
      var deleteItem = document.querySelector('#context-menu > ul > li:nth-child(3)');
      if (deleteItem) {
        deleteItem.style.display = 'none';
      }
    }

    // Hide delete button on user edit page (/users/123/edit)
    if (pathname.match(/\/users\/\d+/)) {
      var deleteLink = document.querySelector('a.icon.icon-del');
      if (deleteLink) {
        deleteLink.style.display = 'none';
      }
    }
  }

  function init() {
    hideDeleteButton();
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
