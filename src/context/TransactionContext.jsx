import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWallet = async () => {
    const ethereumProvider = await detectEthereumProvider();
    if (ethereumProvider) {
      const ethersProvider = new ethers.providers.Web3Provider(ethereumProvider);
      setProvider(ethersProvider);

      ethereumProvider.request({ method: 'eth_requestAccounts' }).then(accounts => {
        setCurrentAccount(accounts[0]);
        const ethersSigner = ethersProvider.getSigner();
        setSigner(ethersSigner);
        const contractInstance = new ethers.Contract(contractAddress, contractABI, ethersSigner);
        setContract(contractInstance);
      });
    } else {
      alert('MetaMask is not installed. Please install MetaMask and try again.');
    }
  };

  const disconnectWallet = () => {
    setCurrentAccount(null);
    setProvider(null);
    setSigner(null);
    setContract(null);
  };

  const deposit = async (amount) => {
    if (provider && signer) {
        try {
            const transaction = {
                to: "0xc7Df83388E55ee0c2972e4765BD31FC76170A66E", // Replace with the seller's address
                value: ethers.utils.parseEther(amount)
            };
            const txResponse = await signer.sendTransaction(transaction);
            await txResponse.wait();
            alert('Deposit successful!');
        } catch (error) {
            console.error(error);
            alert('Deposit failed.');
        }
    } else {
        alert('Wallet not connected.');
    }
};

  const approveTransaction = async () => {
    if (contract) {
      try {
        const isSeller = await contract.isSeller(currentAccount);
        if (!isSeller) {
          alert('Only the seller can approve the transaction.');
          return;
        }
        const txn = await contract.approveTransaction();
        await txn.wait();
        alert('Transaction approved!');
      } catch (error) {
        console.error(error);
        alert('Approval failed.');
      }
    }
  };

  const releaseFunds = async () => {
    if (contract) {
      try {
        const txn = await contract.releaseFunds();
        await txn.wait();
        alert('Funds released to seller!');
      } catch (error) {
        console.error(error);
        alert('Failed to release funds.');
      }
    }
  };

  const refundBuyer = async () => {
    if (contract) {
      try {
        const txn = await contract.refundBuyer();
        await txn.wait();
        alert('Funds refunded to buyer!');
      } catch (error) {
        console.error(error);
        alert('Failed to refund.');
      }
    }
  };

  return (
    <TransactionContext.Provider value={{ provider, signer, contract, currentAccount, connectWallet, disconnectWallet, deposit, approveTransaction, releaseFunds, refundBuyer }}>
      {children}
    </TransactionContext.Provider>
  );
};
