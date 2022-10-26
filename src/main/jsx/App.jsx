import { useState , useCallback } from 'react'
import '../resources/css/App.css'
import  Header from  './Header.jsx'
import  MainPage from  './MainPage.jsx'
import  Qmenu from './Qmenu.jsx'
import { WalletRPC ,WalletData } from "./helper/Wallet"

function App() {
  const [section, setSection] = useState("main");
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [walletAddress, setWalletAddress] = useState(undefined);
  const [currentBalance, setCurrentBalance] = useState(undefined);
  const [chainId, setChainId] = useState(undefined);

  const [isConnected, setIsConnected] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const connectWallet = useCallback(async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await _connectWallet();
        event();
        setIsConnected(true);
      } else {
        // todo :
        alert("please install MetaMask");
      }
    } catch (error) {
      console.log(error);
    }
  });

  const _connectWallet = useCallback(async() => {
    const RPC = await WalletRPC();
    setProvider(RPC.provider)
    setSigner(RPC.signer)

    const WALLETDATA = await WalletData(RPC.signer);
    setWalletAddress(WALLETDATA.adress);
    setCurrentBalance(WALLETDATA.balance);
    setChainId(WALLETDATA.chainId);

    setIsSupported(CheckSupportNetwork(WALLETDATA.chainId));
  })


  // event
  const event = () => {
    window.ethereum.on("chainChanged", async () => {
      await _connectWallet();
    });

    window.ethereum.on("accountsChanged", async () => {
      await _connectWallet();
    });
  };

  const onChangeSection = (e) => {
    const value = e.currentTarget.attributes.value.value;
    setSection(value);
  }

  return (
    <div className="App">
        <Header  connectWallet ={connectWallet} isConnected={isConnected}  isSupported={isSupported}  />
        <MainPage/>
        <Qmenu />
    </div>
  )
}

export default App
