// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    if (currency <= 0) {
        return {};
    }

    const coins = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };

    let orderedCoins = Object.keys(coins).map(c => {
        return {
            symbol: c,
            value: coins[c]
        };
}).sort((coin1, coin2) => coin2.value - coin1.value);

    let res = {};

    for (let i = 0; i < orderedCoins.length; i++) {
        let amount = Math.floor(currency / orderedCoins[i].value);

        if (amount) {
            currency -= amount * orderedCoins[i].value;
            res[orderedCoins[i].symbol] = amount;
        }
    }

    return res;
}
