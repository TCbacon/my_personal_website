
const StockScrollLinks = {};

StockScrollLinks.stockLinks = () => {
    let links = [
        { ticker: "SPY", state: { stock_name: "S&P500" } },
        { ticker: "TSLA", state: { stock_name: "Tesla" } },
        { ticker: "AMZN", state: { stock_name: "Amazon" } },
        { ticker: "AMC", state: { stock_name: "AMC Entertainment" } },
        { ticker: "BAC", state: { stock_name: "Bank of America" } },
        { ticker: "PLAY", state: { stock_name: "Dave & Buster's" } },
        { ticker: "CCL", state: { stock_name: "Carnival" } },
        { ticker: "SONY", state: { stock_name: "Sony" } },
        { ticker: "GOOG", state: { stock_name: "Google" } },
        { ticker: "U", state: { stock_name: "Unity" } }
    ]

    return links;
}

module.exports = StockScrollLinks;
