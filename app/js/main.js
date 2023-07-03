
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


var acc = document.getElementsByClassName("faq__accardion-btn");
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
  const dropDownListBorderBottom = dropDownWrapper.querySelector('.dropdown__list-border-bottom');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    dropDownListBorderBottom.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerHTML = this.innerHTML;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownListBorderBottom.classList.remove('dropdown__list--visible');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownListBorderBottom.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownListBorderBottom.classList.remove('dropdown__list--visible');
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
  let bodyBlock = $("#body");

  menuToggle.on("click", function (event) {
    event.preventDefault();
    menuToggle.toggleClass("active");
    menuWrapper.toggleClass("show");
    bodyBlock.toggleClass("no-scroll");
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
$(function () {
  let dropDownList1 = $(".dropdown__list-item--1");
  let dropDownList2 = $(".dropdown__list-item--2");
  let dropDownList3 = $(".dropdown__list-item--3");
  let dropDownList4 = $(".dropdown__list-item--4");
  let dropDownList5 = $(".dropdown__list-item--5");
  let dropDownList6 = $(".dropdown__list-item--6");
  let dropDownList7 = $(".dropdown__list-item--7");

  dropDownList1.on("click", function (event) {
    event.preventDefault();
    dropDownList1.addClass("dropdown__list-item--active");
    dropDownList2.removeClass("dropdown__list-item--active");
    dropDownList3.removeClass("dropdown__list-item--active");
    dropDownList4.removeClass("dropdown__list-item--active");
    dropDownList5.removeClass("dropdown__list-item--active");
    dropDownList6.removeClass("dropdown__list-item--active");
    dropDownList7.removeClass("dropdown__list-item--active");
  });
  dropDownList2.on("click", function (event) {
    event.preventDefault();
    dropDownList2.addClass("dropdown__list-item--active");
    dropDownList3.removeClass("dropdown__list-item--active");
    dropDownList4.removeClass("dropdown__list-item--active");
    dropDownList5.removeClass("dropdown__list-item--active");
    dropDownList6.removeClass("dropdown__list-item--active");
    dropDownList7.removeClass("dropdown__list-item--active");
    dropDownList1.removeClass("dropdown__list-item--active");
  });
  dropDownList3.on("click", function (event) {
    event.preventDefault();
    dropDownList3.addClass("dropdown__list-item--active");
    dropDownList4.removeClass("dropdown__list-item--active");
    dropDownList5.removeClass("dropdown__list-item--active");
    dropDownList6.removeClass("dropdown__list-item--active");
    dropDownList7.removeClass("dropdown__list-item--active");
    dropDownList1.removeClass("dropdown__list-item--active");
    dropDownList2.removeClass("dropdown__list-item--active");
  });
  dropDownList4.on("click", function (event) {
    event.preventDefault();
    dropDownList4.addClass("dropdown__list-item--active");
    dropDownList5.removeClass("dropdown__list-item--active");
    dropDownList6.removeClass("dropdown__list-item--active");
    dropDownList7.removeClass("dropdown__list-item--active");
    dropDownList1.removeClass("dropdown__list-item--active");
    dropDownList2.removeClass("dropdown__list-item--active");
    dropDownList3.removeClass("dropdown__list-item--active");
  });
  dropDownList5.on("click", function (event) {
    event.preventDefault();
    dropDownList4.removeClass("dropdown__list-item--active");
    dropDownList5.addClass("dropdown__list-item--active");
    dropDownList6.removeClass("dropdown__list-item--active");
    dropDownList7.removeClass("dropdown__list-item--active");
    dropDownList1.removeClass("dropdown__list-item--active");
    dropDownList2.removeClass("dropdown__list-item--active");
    dropDownList3.removeClass("dropdown__list-item--active");
  });
  dropDownList6.on("click", function (event) {
    event.preventDefault();
    dropDownList4.removeClass("dropdown__list-item--active");
    dropDownList5.removeClass("dropdown__list-item--active");
    dropDownList6.addClass("dropdown__list-item--active");
    dropDownList7.removeClass("dropdown__list-item--active");
    dropDownList1.removeClass("dropdown__list-item--active");
    dropDownList2.removeClass("dropdown__list-item--active");
    dropDownList3.removeClass("dropdown__list-item--active");
  });
  dropDownList7.on("click", function (event) {
    event.preventDefault();
    dropDownList4.removeClass("dropdown__list-item--active");
    dropDownList5.removeClass("dropdown__list-item--active");
    dropDownList6.removeClass("dropdown__list-item--active");
    dropDownList7.addClass("dropdown__list-item--active");
    dropDownList1.removeClass("dropdown__list-item--active");
    dropDownList2.removeClass("dropdown__list-item--active");
    dropDownList3.removeClass("dropdown__list-item--active");
  });
})

Chart.defaults.elements.line.borderWidth = 2;
Chart.defaults.elements.line.tension = 0.4;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(92, 177, 255, 1)';
Chart.defaults.plugins.tooltip.titleAlign = 'center';
let xScaleConfig = {
  color: '$black',
  border: {
    color: 'rgba(236, 241, 250, 1)'
  },
  grid: {
    color: 'rgba(236, 241, 250, 0)',
  },
  ticks: {
    color: '$black',
    font: {
      family: "'Raleway', sans-serif",
      size: 18,
      weight: 300,
    }
  },
};
let yScaleConfig = {
  color: '$black',
  min: 0,
  max: 8,
  border: {
    color: 'rgba(236, 241, 250, 0)',
    dash: [8, 8],
  },
  grid: {
    color: 'rgba(236, 241, 250, 1)',
  },
  ticks: {
    color: '$black',
    font: {
      family: "'Rawline', sans-serif",
      size: 22,
      weight: 300,
    },
  },
};

const getOrCreateTooltip = (chart) => {
  let tooltipEL = chart.canvas.parentNode.querySelector('div');
  if (!tooltipEL) {
    tooltipEL = document.createElement('DIV');
    tooltipEL.classList.add('tooltipDesign');
    tooltipUL = document.createElement('UL');
    tooltipUL.classList.add('tooltipul');

    tooltipEL.appendChild(tooltipUL);
    chart.canvas.parentNode.appendChild(tooltipEL);
    console.log(chart.canvas);
  }
  return tooltipEL;
};

const externalTooltipHandler = (context) => {
  const { chart, tooltip } = context;
  const tooltipEL = getOrCreateTooltip(chart);

  if (tooltip.opacity === 0) {
    tooltipEL.style.opacity = 0;
    return;
  };

  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map(b => b.lines);
    const tooltipLI = document.createElement('LI');

    titleLines.forEach(title => {
      tooltipUL.appendChild(tooltipLI);

      const tooltipSPAN = document.createElement('SPAN');
      tooltipLI.appendChild(tooltipSPAN);

      const tooltipTitle = document.createTextNode(title);
      tooltipSPAN.appendChild(tooltipTitle);
    });

    const tooltipBodyP = document.createElement('P');
    bodyLines.forEach((body, i) => {
      const displayBlockSpan = document.createElement('SPAN');
      displayBlockSpan.classList.add('displayBlockSpan');
      const colors = tooltip.labelColors[i];
      const colorSquare = document.createElement('SPAN');
      colorSquare.classList.add('colorSquare');
      colorSquare.style.background = colors.borderColor;
      colorSquare.style.border = colors.borderColor;

      const textLabel = document.createTextNode(body);
      // console.log(textLabel);

      // displayBlockSpan.appendChild(colorSquare);
      displayBlockSpan.appendChild(textLabel);
      tooltipBodyP.appendChild(displayBlockSpan);
    });

    const ULnode = tooltipEL.querySelector('ul');

    while (ULnode.firstChild) {
      ULnode.firstChild.remove();
    }

    ULnode.appendChild(tooltipLI);
    tooltipLI.appendChild(tooltipBodyP);
    tooltipEL.style.opacity = 1;

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;
    tooltipEL.style.left = positionX + tooltip.caretX + 'px';
    tooltipEL.style.top = positionY + tooltip.caretY + 'px';
    tooltipEL.style.font = tooltip.options.bodyFont.string;
    tooltipEL.style.padding = tooltip.options.padding + 'px' + tooltip.options.padding + 'px';
  };
};

// const ctx1book = [3, 2, 4, 1, 3, 1, 6];
// const ctx1article = [3, 7, 2, 6, 1, 4, 1];
let ctx1 = document.querySelector('#myChart1').getContext('2d');
let myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Радио',
      data: [3, 2, 4, 1, 3, 1, 6],
      // data: ctx1book,
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBorderColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Подкасты',
      data: [3, 7, 2, 6, 1, 4, 1],
      // data: ctx1article,
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBorderColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    responsive: true,
    pointStyle: true,
    pointBackgroundColor: [
      '#fff',
    ],
    pointBorderWidth: 0,
    hoverBorderWidth: 5,
    radius: 0,
    hoverRadius: 6,
    hitRadius: 30,
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
        callbacks: {
          title: function () {
            return '';
          },
          // label: function(context) {
          //   console.log(context);
          //   return `${context[0].label} Day: ${data[context[0].dataIndex]}`;
          // },
          // label: function(context) {
          //   let label = context.dataset.label || '';

          //   if (label) {
          //       label += ': ';
          //   }
          //   if (context.parsed.y !== null) {
          //       label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
          //   }
          //   return label;
          // }
        },
      },
    },
    scales: {
      x: xScaleConfig,
      y: yScaleConfig,
    },
  },
});
let ctx2 = document.querySelector('#myChart2').getContext('2d');
let myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Видео',
      data: [4, 2, 3, 5, 4, 2, 3],
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBorderColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Фильмы',
      data: [5, 4, 3, 3, 4, 5, 2],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBorderColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    responsive: true,
    pointStyle: true,
    pointBackgroundColor: [
      '#fff',
    ],
    pointBorderWidth: 0,
    hoverBorderWidth: 5,
    radius: 0,
    hoverRadius: 6,
    hitRadius: 30,
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
        callbacks: {
          title: function () {
            return '';
          },
        },
      },
    },
    scales: {
      x: xScaleConfig,
      y: yScaleConfig,
    },
  },
});
let ctx3 = document.querySelector('#myChart3').getContext('2d');
let myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Книги',
      data: [6.9, 2, 1, 1.6, 2, 1, 6],
      fill: true,
      backgroundColor: [
        'rgba(90, 127, 238, 0.5)'
      ],
      borderColor: [
        '#5728DB',
      ],
      pointBorderColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Статьи',
      data: [6.9, 8, 4, 6, 0.7, 4, 0],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBorderColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    responsive: true,
    pointStyle: true,
    pointBackgroundColor: [
      '#fff',
    ],
    pointBorderWidth: 0,
    hoverBorderWidth: 5,
    radius: 0,
    hoverRadius: 6,
    hitRadius: 30,
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
        callbacks: {
          title: function () {
            return '';
          },
        },
      },
    },
    scales: {
      x: xScaleConfig,
      y: yScaleConfig,
    },
  },
});
let ctx4 = document.querySelector('#myChart4').getContext('2d');
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
      pointBorderColor: [
        '#5728DB',
      ],
    },
    {
      label: 'Клуб',
      data: [3, 2, 1, 1, 3, 2, 3],
      fill: true,
      backgroundColor: [
        'rgba(92, 177, 255, 0.5'
      ],
      borderColor: [
        '#5CB1FF',
      ],
      pointBorderColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    responsive: true,
    pointStyle: true,
    pointBackgroundColor: [
      '#fff',
    ],
    pointBorderWidth: 0,
    hoverBorderWidth: 5,
    radius: 0,
    hoverRadius: 6,
    hitRadius: 30,
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
        callbacks: {
          title: function () {
            return '';
          },
        },
      },
    },
    scales: {
      x: xScaleConfig,
      y: yScaleConfig,
    },
  },
});
let ctx5 = document.querySelector('#myChart5').getContext('2d');
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
      pointBorderColor: [
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
      pointBorderColor: [
        '#5CB1FF',
      ],
    }],
  },
  options: {
    responsive: true,
    pointStyle: true,
    pointBackgroundColor: [
      '#fff',
    ],
    pointBorderWidth: 0,
    hoverBorderWidth: 5,
    radius: 0,
    hoverRadius: 6,
    hitRadius: 30,
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler,
        callbacks: {
          title: function () {
            return '';
          },
        },
      },
    },
    scales: {
      x: xScaleConfig,
      y: yScaleConfig,
    },
  },
});