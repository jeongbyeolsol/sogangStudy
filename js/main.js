const searchEls = document.querySelectorAll('.item');
const searchOutputEls = document.querySelectorAll('.item__contents');

searchEls.forEach((searchEl, index) => {
  searchEl.addEventListener('mouseover', function() {
    searchOutputEls[index].style.display = 'block';
  });

  searchEl.addEventListener('mouseout', function() {
    searchOutputEls[index].style.display = 'none';
  });
});
