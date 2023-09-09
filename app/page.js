"use client"
import { useEffect, useState } from "react";
import  Header  from"./components/Header";
import { ethers } from "ethers";
import contractabi from "./abi/abi.json"

export default function Home() {
  const [address,setAddress]=useState(null);
  const [balance,setBalance]=useState(0);
const [contract, setContract] = useState(null)
  useEffect(()=>{
    async function initialize(){
      if(typeof window.ethereum!=="undefined"){
        const provider= new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address =  await signer.getAddress();
        const balance = await provider.getBalance(address);
        console.log(address)
        setAddress(address);
        console.log(balance)
      //  setBalance(ethers.utils.parseEther(balance).toString());
      const  mycontractaddress="0x21126Dd1813d26ac9720A3B4dC95768dDa2c1664";
        const contract = new ethers.Contract(mycontractaddress,contractabi,signer);
        setContract(contract);



      }
    }
    initialize();
  },
  []

  )
  return (
    <>
    <Header>
     
      
    </Header>
    <div className="text-center mt-[50px]">
        <p className="text-md text-blue-400 lg:text-3xl">Hi{address?.slice(0,6)}...</p>

      </div >
    </>
   
  )
}
