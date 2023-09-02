import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import {contractABI, contractAddress} from '../utils/constants'

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    if (ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults")
        provider = ethers.getDefaultProvider()
    }
    
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({provider, signer, transactionContract});
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    });

    const handleChange = (event, name) => {
        setFormData((prevState) => ({...prevState, [name]: event.target.value}));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert('Please install metamask');

            const accounts = await ethereum.request({method: 'eth_accounts'});
            if (accounts.length) {
                setCurrentAccount(accounts[0]);

                // getAllTransactions();
            } else {
                console.log('No accounts found');
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
    }

    const sendTransaction = async () => {
        try{
            if(!ethereum) return alert("Please install metamask");

            const { addressTo, amount, keyword, message } = formData;
            getEthereumContract();

        }catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return(
        <TransactionContext.Provider 
            value={{ 
                connectWallet, 
                currentAccount, 
                formData,
                handleChange,
                sendTransaction
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}
