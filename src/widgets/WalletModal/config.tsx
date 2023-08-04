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
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  },
  {
    title: "Coinbase Wallet",
    icon: CoinbaseWallet,
    connectorId: "walletlink",
  },
  {
    title: "Brave Wallet",
    icon: BraveWallet,
    connectorId: "injected",
  },
  {
    title: "Injected (Other)",
    icon: OtherWallet,
    connectorId: "injected",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
