const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list_item_active'));
        btn.classList.add('design-list__item_active');

        tabsContentElems.forEach(content => {
            content.classList.toggle('hidden', content.dataset.tabsField !== btn.dataset.tabsHandler);
        });
    });
}
