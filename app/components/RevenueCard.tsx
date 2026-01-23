function RevenueCard({ type='payout', amount='0', orders='0', nextPayment="" }) {
  return (
    <div
      className={`w-full rounded-xl shadow-sm ${
        type == "payout" ? "text-white border-blue-500" : null
      }`}
    >
      <div
        className={`${
          type == "payout" ? "bg-blue-500 rounded-t-md" : "bg-white rounded-md"
        } p-5`}
      >
        <div className="p-1 flex mb-3">
          {type == "payout" ? <div>Next Payout </div> : null}
          {type == "pending" ? (
            <div className="text-gray-700">Amount Pending</div>
          ) : null}
          {type == "processed" ? (
            <div className="text-gray-700">Amount Processed</div>
          ) : null}
          <div className={`ml-1 items-center flex ${type=='payout'?"text-white" :"text-gray-600"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.2"
              stroke="currentColor"
              className="size-4.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between text-3xl font-medium  ">
          <div className="font-semibold">₹{amount}</div>


          {orders && (type == "pending" || type == "payout") ? (
            <div
              className={`flex underline text-base items-center ${
                type == "payout" ? "text-white" : "text-blue-500"
              }`}
            >
              <div>{orders} Orders</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>

      {nextPayment && type == "payout" ? (
        <div className="flex justify-between bg-blue-800 rounded-b-md px-6 py-2">
          <div>Next Payment Date:</div>
          <div>{nextPayment}</div>
        </div>
      ) : null}
    </div>
  );
}

export default RevenueCard;
