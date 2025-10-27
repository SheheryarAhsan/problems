class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        else {
            this._balance = amount;
        }
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            throw new Error("Insufficient funds");
        }
        else {
            this._balance -= amount;
        }
    }
}

const account = new BankAccount(100);
console.log(account.balance);
account.deposit(50);
console.log(account.balance);
account.withdraw(30);
console.log(account.balance);
console.log(account.balance = -50);