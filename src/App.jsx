import './App.css';
import Sidebar from './components/Sidebar';
import AppHeader from './components/AppHeader';
import WalletHeader from './components/WalletHeader';
import TransactionCard from './components/TransactionCard';

function App() {
  return (
    <div className="App">
      <AppHeader /> 
      <div className="App-layout">
        <Sidebar />  
        <main className="App-content">
          <WalletHeader />
          <TransactionCard />
        </main>
      </div>
    </div>
  );
}

export default App;
