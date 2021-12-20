
import React, {useState} from 'react';
import './App.css';
import {Navbar} from './components/NavBar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Home} from "./components/Home";
import StockPicks from './components/StockPicks'
import cryptocurrencyPicks from './components/CryptocurrencyPicks';
import {PageNotFound} from './components/NotFoundPage';
import {SellPuts} from './components/SellPuts';
import {Privacy} from './components/Privacy';
import Stock from './components/StockPicks/Stock';


function App() {

  const [isMobileStock, setIsMobileStock] = useState(false);

  return (  
    <>
    <Router>
         <Navbar setMobileStock = {setIsMobileStock}/>
   
         <Switch>
         <Route exact path = "/" render ={() =>{
             return( <Redirect to = '/home'/>)
             }}/>

           <Route path = "/home" component={Home}/>
           <Route path="/stockPicks" component={StockPicks} />
           <Route path="/cryptoPicks" component={cryptocurrencyPicks}/>
           <Route path="/sellputs" component={SellPuts}/>
           <Route path ="/privacy" component={Privacy}/>
           <Route path="/stock/:id" component={props => <Stock data={isMobileStock}{...props}/>}/> 
           <Route component={PageNotFound}/>
         </Switch>
         
    </Router>
 </>
    );
};

export default App;
