import './App.css';
import Sidebar from './components/Sidebar';
import AppHeader from './components/AppHeader';
import WalletHeader from './components/WalletHeader';
import TransactionCard from './components/TransactionCard';
import { faMugHot, faShoppingBag, faCreditCard, faGift } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <AppHeader /> 
      <div className="App-layout">
        <Sidebar />  
        <main className="App-content">
          <WalletHeader />
          
          {/* Here you can add your transaction cards */}
          <div className="transactions-list">
            <TransactionCard icon={faMugHot} title="Restaurants & Cafe" date="20 August 2019" amount="-$99.00" />
            <TransactionCard icon={faShoppingBag} title="Clothes & Shopping" date="25 September 2019" amount="-$2,357" />
            <TransactionCard icon={faCreditCard} title="Credit & Loans" date="10 April 2019" amount="-$4,867" />
            <TransactionCard icon={faGift} title="Gifts Card" date="10 October 2019" amount="-$85.00" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
