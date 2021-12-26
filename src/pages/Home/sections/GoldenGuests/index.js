import { useEffect, useState } from "react";
import Empty from "../../../../assets/empty1.jpg";
import DogYear from "../../../../assets/dogyear.jpg";
import Godfather from "../../../../assets/the-godfather.jpg";
import GundamShiba from "../../../../assets/gundam-shiba.jpg";

import "./index.css";

const data = [
  {
    id: `1_Guest`,
    name: "DogYear",
    img: DogYear,
  },
  {
    id: `2_Guest`,
    name: "The GodFather",
    img: Godfather,
  },
  {
    id: `3_Guest`,
    name: "Gundam Shiba",
    img: GundamShiba,
  },
  {
    id: `4_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `5_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `6_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `7_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `8_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `9_Guest`,
    name: "Coming soon",
    img: Empty,
  },
  {
    id: `10_Guest`,
    name: "Coming soon",
    img: Empty,
  }
];


function GoldenGuests() {
  const [ walletAccount, setWalletAccount ] = useState('')
  const [ isConnected, setIsConnected ] = useState(false)
  const [ amount, setAmount ] = useState(1);
  const [ total, setTotal ] = useState(0)
   const handleConnectWallet = async () => {

      console.log('Connecting MetaMask...')

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const account = accounts[0]
      
      console.log('Account: ', account)
      setWalletAccount(account)
      setIsConnected(true)
  }
  const handleSendTransaction = async () => {
     try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x3' }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{ chainId: '0x3' }],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
  }
  // if(window.ethereum){
  //   const oldProvider = web3.currentProvider;
  //   window.myWeb3 = new Web3(oldProvider);
  //   window.myWeb3.eth.sendTransaction({
  //     "from": localStorage.getItem('myaccount'),
  //     "to": '0x4Ab625ba2db0E6fe0da6cC484983bB0AFE1C9e26',
  //     "gas": "21000", // 30400
  //     "value" : window.myweb3.utils.toWei(amount * 0.01, 'ether'),
  //     }, function(error, hash){
  //         console.log("Never");
  //   });
  // }
    const gasPrice = '0x5208' // 21000 Gas Price
    const amountHex = (amount * 0.01 * Math.pow(10,18)).toString(16)
    
    const tx = {
      from: walletAccount,
      to: "0x4Ab625ba2db0E6fe0da6cC484983bB0AFE1C9e26",
      value: amountHex,
      gas: gasPrice,
    }

    await window.ethereum.request({ method: 'eth_sendTransaction', params: [ tx ]})

    // setShowTransactionModal(false)
  }
  const increase = () => {
    if(amount < 5 ) {
      setAmount(amount + 1)
    }    
  }
   const decrease = () => {
    if(amount > 1 ) {
      setAmount(amount - 1)
    }    
  }
  useEffect(() => {
    let today = new Date().valueOf()
    let k = new Date().setHours(0,0,0,0)
    setTotal(Math.round((today - k) * 7777 / 2 / 24 / 60 / 60 / 1000))
    const slider = document.querySelector(".custom-slider");
    const initSlider = new window.Swiper(slider, {
      spaceBetween: 30,
      slidesPerView: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 30,
          slidesPerView: 7,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 4,
        }
      }
    });
  }, []);

  return (
    <>
      <section id="guests" className="section--spacing">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 guests--content mb-5">
              <h2 className="d-block mb-4 text-uppercase f-akira">
                OUR SPECIAL LEGENDARY COLLECTION
              </h2>
              <p className="">
                Discover our special legendary collection, they are the rarest
                and unique.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-12 guests--wrapper">
            <div className="swiper-container custom-slider">
              <div className="swiper-wrapper">
                {data.map(({ id, name, img }) => (
                  <div key={id} className="guest--item swiper-slide">
                    <img src={img} alt={name} />
                    <h6>{name}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
       <div className="mint-title">
            Limited Mint Date
        </div>
        <div className="mint-date">
            December 15 - 2 pm EST
        </div>
        <div className="mint-category">
            <div>
                Minted<br/>
                <span>{total}/7777</span>
            </div>  
            <div>
                Price<br/>
                <span>0.11 Eth</span>
            </div>  
            <div>
                Max<br/>
                <span>5 per wallet</span>
            </div>  
        </div>
        <div className="mint-card">
            <div className="mint-card-title">
                Limited Sale
            </div>
            <div className="payment-info">
                <div>
                    <img src={DogYear}  alt="monster" />
                </div>
                <div className="payment-price">
                    Price Per NFT<br/>
                    <span>0.11 ETH Each</span>
                </div>
            </div>
            <div className="payment-count">
                <div className="btn-group">
                    <div>
                        <button onClick={()=> decrease()}>-</button>
                    </div>
                    <div>
                        {amount}
                    </div>
                    <div>
                        <button onClick={()=> increase()}>+</button>
                    </div>
                </div>
                <div className="set-max">
                    <button onClick={() => setAmount(5)}>Set Max</button>
                </div>
            </div>
            <div className="total-price">
                <div>
                    Total
                </div>
                <div>
                    {amount * 0.11}ETH
                </div>
            </div>
            <div className="connect">
              { isConnected? <button onClick={()=> handleSendTransaction()}>Mint</button> : 
                <button onClick={()=> handleConnectWallet()}>Connect</button>
              }
            </div>
        </div>
    </>
  );
}

export default GoldenGuests;