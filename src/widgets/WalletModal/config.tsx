import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import CoinbaseWallet from "./icons/CoinbaseWallet";
import BinanceChain from "./icons/BinanceChain";
import BraveWallet from "./icons/BraveWallet";
import OtherWallet from "./icons/OtherWallet";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "Wallet Connect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  },
  {
    title: "Coinbase Wallet",
    fallbackImage: '/images/wallets/coinbase.png',
    connectorId: "walletlink",
  },
  {
    title: "Brave Wallet",
    fallbackImage: '/images/wallets/brave.png',
    connectorId: "injected",
  },
  {
    title: "Injected (Other)",
    fallbackImage: '/images/wallets/other.png',
    connectorId: "injected",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
