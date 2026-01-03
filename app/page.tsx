import AppBar from "./components/AppBar";
import RevenueCard from "./components/RevenueCard";
import SideBar from "./components/SideBar";

export default function Home() {
  return <div>
    {/* <AppBar></AppBar>
    <RevenueCard type="pending"  amount="222.23" orders="23"  /> */}
    <div className="w-60  ">

  <SideBar logo="nishyan.svg"></SideBar>
    </div>
  </div>;
}
