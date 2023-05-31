
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
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

$(function () {
  var grafik = mixitup('.grafik__tabs-items', {
    animation: {
      duration: 700,
      effects: 'fade scale(0.41)',
      easing: 'ease-in-out',
    },
    load: {
      filter: '.grafik-1',
    }
  });
})

$(function () {
  $('.club__content').slick({
    pagination: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

$(function () {
  let listenBlock = $("#listenBlock");
  let listenToggle = $("#listenToggle");

  listenToggle.on("click", function (event) {
    event.preventDefault();
    listenBlock.toggleClass("show");
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

let ctx = document.querySelector('#myChart').getContext('2d');
ctx.canvas.parentNode.style.width = '696px';
ctx.canvas.parentNode.style.height = '278px';
let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    datasets: [{
      label: 'book',
      data: [6, 2, 1, 1, 2, 1, 6],
      backgroundColor: [
        '#5728DB'
      ],
      borderColor: [
        '#5728DB',
        '#5728DB',
        '#5728DB',
        '#5728DB',
        '#5728DB',
        '#5728DB',
        '#5728DB',
      ],
      borderWidth: 4
    },
    {
      label: 'articles',
      data: [6, 8, 4, 6, 1, 4, 0],
      backgroundColor: [
        '#5CB1FF'
      ],
      borderColor: [
        '#5CB1FF',
        '#5CB1FF',
        '#5CB1FF',
        '#5CB1FF',
        '#5CB1FF',
        '#5CB1FF',
        '#5CB1FF',
      ],
      borderWidth: 4
    }]
  },
  options: {
    maintainAspectRatio: false,
  }
});
