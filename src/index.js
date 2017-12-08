var expenseTracker = new ExpenseTracker();
var submitBtn = document.querySelector('button');
var expenses = document.querySelector('.expenses');

function renderData() {
    expenses.innerHTML = '';

    expenseTracker.items.forEach(function (item) {
        renderItem(item);
    });

    renderTotal();
}

function formatCents(cents) {
    if (cents < 10) {
        return '0' + cents;
    } else {
        return cents;
    }
}

function formatPrice(price) {
    return Math.floor(price / 100) + '.' + formatCents(price % 100);
}

function renderTotal() {
    var lineContainerElem = document.createElement('div');
    expenses.appendChild(lineContainerElem);
    lineContainerElem.classList.add('line-container');

    var lineElem = document.createElement('div');
    lineContainerElem.appendChild(lineElem);
    lineElem.classList.add('line');

    var totalElem = document.createElement('div');
    expenses.appendChild(totalElem);
    totalElem.classList.add('total');

    var totalTitleElem = document.createElement('p');
    totalElem.appendChild(totalTitleElem);
    totalTitleElem.classList.add('total-title');
    totalTitleElem.innerHTML = 'Total:&emsp;';

    var totalAmountElem = document.createElement('p');
    totalElem.appendChild(totalAmountElem);
    totalAmountElem.classList.add('total-amount');
    totalAmountElem.innerText = '€' + formatPrice(expenseTracker.totalPrice());
}

function renderItem(item) {
    var expenseElem = document.createElement('div');
    expenses.appendChild(expenseElem);
    expenseElem.classList.add('expense');

    var expenseTitleElem = document.createElement('p');
    expenseElem.appendChild(expenseTitleElem);
    expenseTitleElem.classList.add('title');
    expenseTitleElem.innerText = item.title;

    var expenseAmountElem = document.createElement('p');
    expenseElem.appendChild(expenseAmountElem);
    expenseAmountElem.classList.add('amount');
    expenseAmountElem.innerText = '€' + formatPrice(item.price);

}

submitBtn.addEventListener('click', function (e) {
    var price = parseFloat(document.querySelector('#price_input').value);

    expenseTracker.addItem(new Item(
        document.querySelector('#title_input').value,
        Math.floor(price * 100)
    ));

    renderData();

    document.querySelector('#title_input').value = '';
    document.querySelector('#price_input').value = '';
});