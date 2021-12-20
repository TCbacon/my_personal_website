import React from 'react';
import Plot from 'react-plotly.js';
import { Wrapper, Title, PlotStyle, TableStyle, OptionsLink, BottomOptionStrategies, ErrorTitle, ScrollButton } from './Stock.styles';
import { isPersistedState } from "../../SessionStorageHelper";
import { DeviceSize } from "../../Responsive";
import { Link } from 'react-router-dom';
import './HorizontalStocks.css';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbol: "",
            price: 0,
            stock_list: [],
            error_msg: "",
            isLoading: true,
            plotWidth: window.innerWidth <= DeviceSize.tablet ? 320 : 670,
            plotHeight: window.innerWidth <= DeviceSize.tablet ? 250 : 440,
            isMobileStock: false,
            ispaused: "Pause"
        }

        this.resize = this.resize.bind(this);
        this.stockScrollHandler = this.stockScrollHandler.bind(this);
    }


    componentDidMount() {

        this.fetchStock();
        window.addEventListener("resize", this.resize);
        this.setState({
            isMobileStock: this.props.data
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    resize() {
        if (window.innerWidth <= DeviceSize.tablet) {
            this.setState({
                plotWidth: 320,
                plotHeight: 250
            });
        }

        else {
            this.setState({
                plotWidth: 670,
                plotHeight: 440
            });
        }
    }

    /* refresh stock stats */
    refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }

    /*Pause Scrolling Stocks */
    stockScrollHandler() {
        if (this.state.ispaused === 'Pause') {
            this.setState({
                ispaused: 'Resume'
            });
            document.getElementById('scroll_id').style.animationPlayState = 'paused';
        }

        else {
            this.setState({
                ispaused: 'Pause'
            });
            document.getElementById('scroll_id').style.animationPlayState = 'running';
        }
    }


    async fetchStock() {

        const pointerToThis = this;
        const API_KEY = process.env.REACT_APP_STOCK_API;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        let temp_l = [];
        let latestDate = "";
        let lastRefreshDate = "";
        let isLatestDate = false;
        let pathList = this.props.location.pathname.split("/");
        let symbol = pathList[pathList.length - 1].toUpperCase();

        if (!this.props.location.pathname) {
            pointerToThis.setState({
                isLoading: false,
                error_msg: "This Stock is not in my list."
            })
            return;
        }

        const stockListSession = isPersistedState("stock: " + this.props.location.pathname);
        if (stockListSession) {
            pointerToThis.setState({
                stock_list: stockListSession,
                isLoading: false
            });
            return;
        }

        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=60min&apikey=${API_KEY}`;

        await fetch(API_Call)
            .then(
                async function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    try {
                        for (let key in data['Time Series (60min)']) {
                            stockChartXValuesFunction.push(key);
                            stockChartYValuesFunction.push(data['Time Series (60min)'][key]['1. open']);

                            if (!isLatestDate) {
                                latestDate = key;
                                lastRefreshDate = data['Meta Data']["3. Last Refreshed"];
                                isLatestDate = true;
                            }
                        }


                        temp_l.push({
                            dateRefresh: lastRefreshDate,
                            openPrice: data['Time Series (60min)'][latestDate]['1. open'],
                            highPrice: data['Time Series (60min)'][latestDate]['2. high'],
                            lowPrice: data['Time Series (60min)'][latestDate]['3. low'],
                            closePrice: data['Time Series (60min)'][latestDate]['4. close'],
                            volume: data['Time Series (60min)'][latestDate]['5. volume'],
                            ticker: symbol,
                            stock_name: symbol,
                            date: stockChartXValuesFunction,
                            price_list: stockChartYValuesFunction
                        });
                    }

                    catch (err) {
                        pointerToThis.setState({
                            error_msg: "Error: Invalid Stock Ticker or too many requests..."
                        });
                    }


                }, (error) => {
                    if (error) {
                        pointerToThis.setState({
                            error_msg: "Cannot retrieve data. Check internet connection..."
                        });
                    }
                }

            );

        if (temp_l.length > 0) {
            sessionStorage.setItem("stock: " + this.props.location.pathname, JSON.stringify(temp_l));
        }

        pointerToThis.setState({
            stock_list: temp_l,
            isLoading: false,
        })
    }


    render() {

        return (
            this.state.isLoading
                ?
                <Wrapper>
                    <Title>
                        <h1>Loading Stock Data...</h1>
                    </Title>
                </Wrapper>
                :
                (this.state.error_msg || this.state.stock_list.length < 1)
                    ?
                    <Wrapper>
                        <ErrorTitle>
                            <h1>{this.state.error_msg}</h1>
                        </ErrorTitle>
                    </Wrapper>
                    :
                    <Wrapper isMobileStock={this.state.isMobileStock} key={this.props.location.key}>
                        {this.state.error_msg === ""
                            ?
                            <Title>
                                <h1>{this.props.location.state ? this.props.location.state.stock_name : ""}</h1>
                            </Title>
                            :
                            <ErrorTitle>
                                <h2>{this.state.error_msg}</h2>
                            </ErrorTitle>
                        }

                        <Title><h3>Other Stocks</h3></Title>


                        <div className="horizontal-container">
                            <div className="links" id='scroll_id'>
                                <Link to={{ pathname: "/stock/SPY", state: { stock_name: "S&P500" } }} onClick={this.refreshPage}>S&P500</Link>
                                <Link to={{ pathname: "/stock/TSLA", state: { stock_name: "Tesla" } }} onClick={this.refreshPage}>Tesla</Link>
                                <Link to={{ pathname: "/stock/AMZN", state: { stock_name: "Amazon" } }} onClick={this.refreshPage}>Amazon</Link>
                                <Link to={{ pathname: "/stock/AMC", state: { stock_name: "AMC Entertainment" } }} onClick={this.refreshPage}>AMC Entertainment</Link>
                                <Link to={{ pathname: "/stock/BAC", state: { stock_name: "Bank of America" } }} onClick={this.refreshPage}>Bank of America</Link>
                                <Link to={{ pathname: "/stock/PLAY", state: { stock_name: "Dave & Buster's" } }} onClick={this.refreshPage}>Dave & Buster's</Link>
                                <Link to={{ pathname: "/stock/CCL", state: { stock_name: "Carnival" } }} onClick={this.refreshPage}>Carnival</Link>
                                <Link to={{ pathname: "/stock/SONY", state: { stock_name: "Sony" } }} onClick={this.refreshPage}>Sony</Link>
                                <Link to={{ pathname: "/stock/GOOG", state: { stock_name: "Google" } }} onClick={this.refreshPage}>Google</Link>
                                <Link to={{ pathname: "/stock/U", state: { stock_name: "Unity" } }} onClick={this.refreshPage}>Unity</Link>
                            </div>
                        </div>

                        <ScrollButton className={this.state.ispaused === 'Pause' ? "pause-btn" : 'resume-btn'} onClick={this.stockScrollHandler}>{this.state.ispaused}</ScrollButton>
                        <PlotStyle plotWidth={this.state.plotWidth}>
                            {
                                <div className="plot">

                                    <Title><h2>Ticker: {this.state.stock_list[0].ticker}</h2></Title>

                                    <TableStyle>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Open</th>
                                                <th>High</th>
                                                <th>Low</th>
                                                <th>Close</th>
                                                <th>Volume</th>
                                            </tr>

                                        </thead>

                                        {
                                            <tbody>
                                                <tr>
                                                    <td>{this.state.stock_list[0].dateRefresh}</td>
                                                    <td>{this.state.stock_list[0].openPrice}</td>
                                                    <td>{this.state.stock_list[0].highPrice}</td>
                                                    <td>{this.state.stock_list[0].lowPrice}</td>
                                                    <td>{this.state.stock_list[0].closePrice}</td>
                                                    <td>{this.state.stock_list[0].volume}</td>
                                                </tr>

                                            </tbody>

                                        }
                                    </TableStyle>


                                    <Plot
                                        data={[
                                            {
                                                x: this.state.stock_list[0].date,
                                                y: this.state.stock_list[0].price_list,
                                                type: 'scatter',
                                                mode: 'lines+markers',
                                                marker: { color: 'green' },
                                            }
                                        ]}
                                        layout={{ width: this.state.plotWidth, height: this.state.plotHeight, title: `${this.props.location.state ? this.props.location.state.stock_name : this.state.stock_list[0].ticker} Plot` }}
                                    />

                                </div>
                            }
                        </PlotStyle>


                        <BottomOptionStrategies>
                            <h2>My Favorite Options Strategy</h2>
                            <OptionsLink href="/sellputs">Selling Puts</OptionsLink>
                        </BottomOptionStrategies>

                    </Wrapper>
        )
    }
}
export default Stock;