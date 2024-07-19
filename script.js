'use strict';

// Simply Bank App

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransaction = transactions => {
  containerTransactions.innerHTML = '';

  transactions.forEach(function (trans, index) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';

    const transactionRpw = `

    <div class="transactions__row">
          <div class="transactions__type transactions__type--${transType}">
            ${index + 1} ${transType}
          </div>
          
          <div class="transactions__value">${trans}</div>
        </div>
`;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRpw);
  });
};

displayTransaction(account1.transactions);

// console.log(containerTransactions.innerHTML);

const createNicknames = function (accs) {
  accs.forEach(function (acc) {
    acc.nickname = acc.userName
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createNicknames(accounts);

const displayBalance = transaction => {
  const balance = transaction.reduce((acc, cur) => acc + cur, 0);

  labelBalance.textContent = `${balance}$`;
};

displayBalance(account1.transactions);

const displayTotal1 = transactions => {
  const depositesTotal = transactions
    .filter(tran => tran < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${depositesTotal}$`;

  const withdrawalTotal = transactions
    .filter(tran => tran > 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `${withdrawalTotal}$`;

  const interestTotal = transactions
    .filter(per => per > 0)
    .map(depos => (depos * 1.1) / 100)
    .filter((interest, index, arr) => {
      console.log(arr);
      return interest >= 5;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interestTotal}$`;
};

displayTotal1(account1.transactions);

// const deposit = transaction => {
//   const deposite = transaction
//     .filter(tran => tran > 0)
//     .reduce((acc, cur) => acc + cur, 0);

//   labelSumIn.textContent = `${deposite}$`;
// };

// deposit(account1.transactions);

// const percentBalance = transaction => {
//   const percent = transaction
//     .filter(per => per < 0)
//     .map(per => per * 0.01)
//     .reduce((acc, cur) => acc + cur, 0);

//   labelSumInterest.textContent = `${Math.round(percent)}%`;
// };

// percentBalance(account1.transactions);
//9//159
