import TransactionRow from "./TransactionRow";

function TransactionsTable() {
  const transactions = [
    {
      orderId: "23141",
      status: "Successful",
      transactionId: "TRX21355",
      refundDate: "Today, 8:45 PM",
      orderAmount: "1225.23",
    },
    {
      orderId: "23142",
      status: "Pending",
      transactionId: "TRX21356",
      refundDate: "Yesterday, 5:30 PM",
      orderAmount: "850.00",
    },
    {
      orderId: "23143",
      status: "Successful",
      transactionId: "TRX21357",
      refundDate: "Yesterday, 3:15 PM",
      orderAmount: "430.75",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <div className="relative  w-70 bg-whit mb-3 ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <svg
              className="w-4 h-4 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body border-gray-300 rounded rounded-sm h-10"
            placeholder="Order ID or transactions ID
"
            required
          />
        </div>

        <div className="flex border p-2 w-12 h-10 border-gray-300 rounded-sm items-center">
          Sort
        </div>
      </div>

      <div className="grid grid-cols-5 items-center bg-gray-200 rounded-sm p-3 text-gray-500 font-semibold mb-1">
        <div>Order ID</div>
        <div>Status</div>
        <div>Transaction ID</div>
        <div>Refund Date</div>
        <div className=" text-right">Order Amount</div>
      </div>

      {transactions.map((t) => (
        <div>
          <TransactionRow
            refundDate={t.refundDate}
            orderId={t.orderId}
            orderAmount={t.orderAmount}
            transactionId={t.transactionId}
            status={t.status}
          ></TransactionRow>
        </div>
      ))}
    </div>
  );
}

export default TransactionsTable;
