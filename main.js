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
            <span>${item.title}</span>
            <span>${item.licenseOrgan}</span>
            <span>${item.esRegdt.slice(0, 10)}</span<
        </li>
    `;
}

loadItems().then((items) => {
  console.log(items);
  displayItems(items);
});
