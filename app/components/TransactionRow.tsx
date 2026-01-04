function TransactionRow({
  orderId = "23141",
  status = "Successful",
  transactionId = "TRX21355",
  refundDate = "Today, 8:45 PM",
  orderAmount = "1225.23",
}) {
  const statusColor = status === "Successful" ? "bg-green-500" : "bg-gray-400";

  return (
    <div className="grid grid-cols-5 items-center bg-gray-50 p-2">
      <div className="text-blue-500 ">#{orderId}</div>
      <div className="flex ">
        <div
          className={`w-2.5 h-2.5 rounded-full ${statusColor} self-center mr-2`}
        ></div>
        {status}
      </div>
      <div>{transactionId}</div>
      <div>{refundDate}</div>
      <div className=" text-right">₹{orderAmount}</div>
    </div>
  );
}

export default TransactionRow;
