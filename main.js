function loadItems() {
  return fetch('data/hotitem.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
      <li class="item">
        <a href="#">
          <div class="itemBox">
            <img src="${item.image}" alt="${item.title}"/>
            <h3 class="name">${item.title}</h3>
            <h5 class="item_day">${item.Dday}</h5>
          </div>


          <div class="sub_txt">
            <p>시행기관 : ${item.licenseOrgan}</p>
            <span class="date">시행일 : ${item.esRegdt.slice(0, 10)}</span>
          </div>

          <div class="over_txt">
            <p><strong>유형:</strong> ${item.round}</p>
            <p><strong>접수기간:</strong> ${item.period}</p>
          </div>
        </a>
      </li>
    `;
}

loadItems().then((items) => {
  displayItems(items);
});

$('.gnb_menu_button').click(() => {
  $('#gnb__all').slideToggle();
});

const tophd = document.querySelector('#hd');
const hdgnbHeight = tophd.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > hdgnbHeight) {
    tophd.classList.add('gnb__fixed');
  } else {
    tophd.classList.remove('gnb__fixed');
  }
});
