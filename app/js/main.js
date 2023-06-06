
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

$('.input-file input[type=file]').on('change', function () {
  let file = this.files[0];
  $(this).closest('.input-file').find('.input-file-text').html(file.name);
});

$(function () {
  var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0],
    $playVideo = $(".video-control__play"),
    $pauseVideo = $(".video-control__pause");

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $playVideo.addClass('hidden');
      $pauseVideo.addClass('visible');
      $videoContainer.addClass('video-is-playing');
      $video.setAttribute("controls", "controls");
    } else {
      $video.pause();
      $playVideo.removeClass('hidden');
      $pauseVideo.removeClass('visible');
      $videoContainer.removeClass('video-is-playing');
    }
  });
});


var acc = document.getElementsByClassName("faq__accardion-items");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});

$(function () {
  var mixer = mixitup('.lesson__progress', {
    animation: {
      duration: 700,
      effects: 'fade scale(0.41)',
      easing: 'ease-in-out',
    },
    load: {
      filter: '.week',
    }
  });
});

// $(function () {
//   var grafik = mixitup('.grafik__tabs-items', {
//     animation: {
//       duration: 700,
//       effects: 'fade scale(0.41)',
//       easing: 'ease-in-out',
//     },
//     load: {
//       filter: '.grafik-1',
//     }
//   });
// })


// $(function () {
//   $('.club__content').slick({
//     pagination: false,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1600,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         }
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
// })

$(function () {
  let listenBlock = $("#listenBlock");
  let listenToggle = $("#listenToggle");

  listenToggle.on("click", function (event) {
    event.preventDefault();
    listenBlock.toggleClass("show");
  });
});



$(function () {
  let menuWrapper = $("#menu__wrapper");
  let menuToggle = $("#menu__toggle");
  const body = document.body;

  menuToggle.on("click", function (event) {
    event.preventDefault();
    menuToggle.toggleClass("active");
    menuWrapper.toggleClass("show");
    body.toggleClass('no-scroll');
  });

});

// Radio button play/pause
$(function () {
  let close = $(".radio__player-close");
  let radioBtn = $(".radio__item-button");
  let radioPlayer = $(".radio__player");
  let radioPlayerBtn = $(".radio__player-button");

  radioBtn.on("click", function (event) {
    event.preventDefault();
    radioBtn.toggleClass("active");
    radioPlayer.toggleClass("active");
  });

  radioPlayerBtn.on("click", function (event) {
    event.preventDefault();
    radioPlayerBtn.toggleClass("active");
  });


  close.on("click", function (event) {
    event.preventDefault();
    radioBtn.toggleClass("active");
    radioPlayer.toggleClass("active");
  });
})

$(function () {
  let viewList = $(".items__view-item--list");
  let viewTable = $(".items__view-item--table");
  let viewContent = $(".lessons__item");
  let viewContentHomework = $(".homework__item");

  viewList.on("click", function (event) {
    event.preventDefault();
    viewTable.removeClass("items__view-item--active");
    viewList.addClass("items__view-item--active");
    viewContent.removeClass("items__view-item--table");
    viewContent.addClass("items__view-item--list");
    viewContentHomework.removeClass("items__view-item--table");
    viewContentHomework.addClass("items__view-item--list");
  });
  viewTable.on("click", function (event) {
    event.preventDefault();
    viewList.removeClass("items__view-item--active");
    viewTable.addClass("items__view-item--active");
    viewContent.removeClass("items__view-item--list");
    viewContent.addClass("items__view-item--table");
    viewContentHomework.removeClass("items__view-item--list");
    viewContentHomework.addClass("items__view-item--table");
  });
})
$(function () {
  let grafikBtn1 = $(".grafik-btn-1");
  let grafik1 = $(".grafik-1");
  let grafikBtn2 = $(".grafik-btn-2");
  let grafik2 = $(".grafik-2");
  let grafikBtn3 = $(".grafik-btn-3");
  let grafik3 = $(".grafik-3");
  let grafikBtn4 = $(".grafik-btn-4");
  let grafik4 = $(".grafik-4");
  let grafikBtn5 = $(".grafik-btn-5");
  let grafik5 = $(".grafik-5");

  grafikBtn1.on("click", function (event) {
    event.preventDefault();
    grafik1.addClass("grafik-show");
    grafikBtn1.addClass("grafik-btn-active");
    grafik2.removeClass("grafik-show");
    grafikBtn2.removeClass("grafik-btn-active");
    grafik3.removeClass("grafik-show");
    grafikBtn3.removeClass("grafik-btn-active");
    grafik4.removeClass("grafik-show");
    grafikBtn4.removeClass("grafik-btn-active");
    grafik5.removeClass("grafik-show");
    grafikBtn5.removeClass("grafik-btn-active");
  });
  grafikBtn2.on("click", function (event) {
    event.preventDefault();
    grafik1.removeClass("grafik-show");
    grafikBtn1.removeClass("grafik-btn-active");
    grafik2.addClass("grafik-show");
    grafikBtn2.addClass("grafik-btn-active");
    grafik3.removeClass("grafik-show");
    grafikBtn3.removeClass("grafik-btn-active");
    grafik4.removeClass("grafik-show");
    grafikBtn4.removeClass("grafik-btn-active");
    grafik5.removeClass("grafik-show");
    grafikBtn5.removeClass("grafik-btn-active");
  });
  grafikBtn3.on("click", function (event) {
    event.preventDefault();
    grafik1.removeClass("grafik-show");
    grafikBtn1.removeClass("grafik-btn-active");
    grafik2.removeClass("grafik-show");
    grafikBtn2.removeClass("grafik-btn-active");
    grafik3.addClass("grafik-show");
    grafikBtn3.addClass("grafik-btn-active");
    grafik4.removeClass("grafik-show");
    grafikBtn4.removeClass("grafik-btn-active");
    grafik5.removeClass("grafik-show");
    grafikBtn5.removeClass("grafik-btn-active");
  });
  grafikBtn4.on("click", function (event) {
    event.preventDefault();
    grafik1.removeClass("grafik-show");
    grafikBtn1.removeClass("grafik-btn-active");
    grafik2.removeClass("grafik-show");
    grafikBtn2.removeClass("grafik-btn-active");
    grafik3.removeClass("grafik-show");
    grafikBtn3.removeClass("grafik-btn-active");
    grafik4.addClass("grafik-show");
    grafikBtn4.addClass("grafik-btn-active");
    grafik5.removeClass("grafik-show");
    grafikBtn5.removeClass("grafik-btn-active");
  });
  grafikBtn5.on("click", function (event) {
    event.preventDefault();
    grafik1.removeClass("grafik-show");
    grafikBtn1.removeClass("grafik-btn-active");
    grafik2.removeClass("grafik-show");
    grafikBtn2.removeClass("grafik-btn-active");
    grafik3.removeClass("grafik-show");
    grafikBtn3.removeClass("grafik-btn-active");
    grafik4.removeClass("grafik-show");
    grafikBtn4.removeClass("grafik-btn-active");
    grafik5.addClass("grafik-show");
    grafikBtn5.addClass("grafik-btn-active");
  });
})

let ctx1 = document.querySelector('#myChart1').getContext('2d');
Chart.defaults.elements.line.borderWidth = 2;
Chart.defaults.elements.line.tension = 0.3;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(92, 177, 255, 1)';
Chart.defaults.plugins.tooltip.titleAlign = 'center';
let xScaleConfig = {
  color: '$black',
  border: {
    color: 'rgba(236, 241, 250, 1)'
  },
  grid: {
    color: 'rgba(236, 241, 250, 0)'
  }
};
let yScaleConfig = {
  color: '$black',
  border: {
    color: 'rgba(236, 241, 250, 0)'
  },
};
let myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Книги',
      data: [3, 2, 4, 1, 3, 1, 6],
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBackgroundColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Статьи',
      data: [3, 7, 2, 6, 1, 4, 1],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBackgroundColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    pointStyle: true,
    hitRadius: 30,
    scales: {
      x: xScaleConfig,
      y: yScaleConfig
    },
  },
});
let ctx2 = document.querySelector('#myChart2').getContext('2d');
Chart.defaults.elements.line.borderWidth = 2;
Chart.defaults.elements.line.tension = 0.3;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(92, 177, 255, 1)';
Chart.defaults.plugins.tooltip.titleAlign = 'center';
let myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Книги',
      data: [4, 5, 3, 7, 1, 5, 2],
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBackgroundColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Статьи',
      data: [3, 2, 3, 1, 5, 3, 2],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBackgroundColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    pointStyle: true,
    hitRadius: 30,
    scales: {
      x: xScaleConfig,
      y: yScaleConfig
    },
  },
});
let ctx3 = document.querySelector('#myChart3').getContext('2d');
Chart.defaults.elements.line.borderWidth = 2;
Chart.defaults.elements.line.tension = 0.3;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(92, 177, 255, 1)';
Chart.defaults.plugins.tooltip.titleAlign = 'center';
let myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Книги',
      data: [4, 2, 3, 2, 2, 1, 6],
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBackgroundColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Статьи',
      data: [6, 7, 4, 5, 1, 4, 1],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBackgroundColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    pointStyle: true,
    hitRadius: 30,
    scales: {
      x: xScaleConfig,
      y: yScaleConfig
    },
  },
});
let ctx4 = document.querySelector('#myChart4').getContext('2d');
Chart.defaults.elements.line.borderWidth = 2;
Chart.defaults.elements.line.tension = 0.3;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(92, 177, 255, 1)';
Chart.defaults.plugins.tooltip.titleAlign = 'center';
let myChart4 = new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Книги',
      data: [4, 5, 4, 6, 1, 3, 1],
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBackgroundColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Статьи',
      data: [3, 2, 1, 1, 3, 2, 3],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBackgroundColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    pointStyle: true,
    hitRadius: 30,
    scales: {
      x: xScaleConfig,
      y: yScaleConfig
    },
  },
});
let ctx5 = document.querySelector('#myChart5').getContext('2d');
Chart.defaults.elements.line.borderWidth = 2;
Chart.defaults.elements.line.tension = 0.3;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(92, 177, 255, 1)';
Chart.defaults.plugins.tooltip.titleAlign = 'center';
let myChart5 = new Chart(ctx5, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Книги',
      data: [4, 3, 1, 2, 3, 1, 6],
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBackgroundColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Статьи',
      data: [6, 7, 4, 6, 1, 4, 1],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBackgroundColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    pointStyle: true,
    hitRadius: 30,
    scales: {
      x: xScaleConfig,
      y: yScaleConfig
    },
  },
});