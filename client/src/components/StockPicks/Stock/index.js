import React, { Fragment } from 'react';
import Plot from 'react-plotly.js';
import { Wrapper, Title, PlotStyle, OptionsLink, BottomOptionStrategies, ErrorTitle, ScrollButton } from './Stock.styles';
import { isPersistedState } from "../../SessionStorageHelper";
import { DeviceSize, PlotSize } from "../../Responsive";
import { Link } from 'react-router-dom';
import { stockLinks } from './StockScrollLinks';
import './HorizontalStocks.css';
import '../../GridStyle/GridStyle.css';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbol: "",
            price: 0,
            stock_list: [],
            error_msg: "",
            isLoading: true,
            plotWidth: window.innerWidth <= DeviceSize.tablet ? PlotSize.tabletWidth : PlotSize.desktopWidth,
            plotHeight: window.innerWidth <= DeviceSize.tablet ? PlotSize.tabletHeight : PlotSize.desktopHeight,
            isMobileStock: false,
            ispaused: "Pause"
        };

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
                plotWidth: PlotSize.tabletWidth,
                plotHeight: PlotSize.tabletHeight
            });
        }

        else {
            this.setState({
                plotWidth: PlotSize.desktopWidth,
                plotHeight: PlotSize.desktopHeight
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

    gridData() {
        return this.state.stock_list.map((elem, idx) => {

            let { dateRefresh, openPrice, highPrice, lowPrice, closePrice, volume } = elem;
            volume = +volume * 1000;
            return (
                <Fragment key={idx}>
                    <div>{dateRefresh}</div>
                    <div>{openPrice}</div>
                    <div>{highPrice}</div>
                    <div>{lowPrice}</div>
                    <div>{closePrice}</div>
                    <div>{volume}</div>
                </Fragment>
            );
        });
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
                error_msg: "This stock is not in the list."
            });
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
        });
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
                                {
                                    stockLinks().map((link, idx) => {
                                        const { ticker, state } = link;
                                        return (
                                            <Link key={idx} to={{ pathname: `/stock/${ticker}`, state: { stock_name: state.stock_name } }} onClick={this.refreshPage}>{state.stock_name}</Link>
                                        );
                                    })}
                            </div>
                        </div>

                        <ScrollButton className={this.state.ispaused === 'Pause' ? "pause-btn" : 'resume-btn'} onClick={this.stockScrollHandler}>{this.state.ispaused}</ScrollButton>


                        <PlotStyle plotWidth={this.state.plotWidth}>
                            <Title><h2>Ticker: {this.state.stock_list.length > 0 ? this.state.stock_list[0].ticker : 'undefined'}</h2></Title>

                            <div className='stock-grid'>
                                <div className='header'>Date</div>
                                <div className='header'>Open</div>
                                <div className='header'>High</div>
                                <div className='header'>Low</div>
                                <div className='header'>Close</div>
                                <div className='header'>Volume</div>
                                {this.gridData()}
                            </div>

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

                        </PlotStyle>


                        <BottomOptionStrategies>
                            <h2>My Favorite Options Strategy</h2>
                            <OptionsLink href="/sellputs">Selling Puts</OptionsLink>
                        </BottomOptionStrategies>

                    </Wrapper>
        );
    }
}
export default Stock;