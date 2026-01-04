import AppBar from "./components/AppBar";
import Dashboard from "./components/Dashboard";
import RevenueCard from "./components/RevenueCard";
import SideBar from "./components/SideBar";
import TransactionCard from "./components/TransactionRow";
import TransactionsTable from "./components/TransactionsTable";

export default function Home() {
  return (
    <div>
      {/* <AppBar></AppBar>
    <RevenueCard type="pending"  amount="222.23" orders="23"  /> */}
      {/* <div className="w-60  ">
        <SideBar logo="nishyan.svg"></SideBar>
      </div> */}

      {/* <TransactionCard></TransactionCard> */}
      <Dashboard />
    </div>
  );
}
