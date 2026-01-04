import AppBar from "./AppBar";
import RevenueCard from "./RevenueCard";
import SideBar from "./SideBar";
import TransactionsTable from "./TransactionsTable";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar />

      <div className="flex">
        <div className="w-60 h-[calc(100vh-4rem)] hidden lg:block">
          <SideBar></SideBar>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-start">
            <RevenueCard
              type="payout"
              amount="20,022.23"
              orders="23"
              nextPayment="Today, 4:00PM"
            />
            <RevenueCard type="pending" amount="10,203.23" orders="15" />
            <RevenueCard type="processed" amount="2,22,302.23" />
          </div>
        

        <div className="m-6">
          <TransactionsTable></TransactionsTable>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
