function TopscrollTo() {
  if (window.scrollY != 0) {
    setTimeout(function() {
      window.scrollTo(0, window.scrollY - 300);
      TopscrollTo();
    }, 20);
  }
}
