// this function poper 

$('#myModal').modal(options)


// start section filter 

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });

  });
});
// end section filter 

// atart code nav bar 
const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  560: {
      items: 2
  },
  960: {
      items: 3
  }
}

$(document).ready(function () {

  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  /** click event on toggle menu */
  $toggleCollapse.click(function () {
      $nav.toggleClass('collapse');
  })
    // click to scroll top
  $('.move-up span').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
  })



});
// end code navbar 