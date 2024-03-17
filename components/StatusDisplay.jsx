function StatusDisplay({status}) {
  const getColor = (status) => {
    switch (status) {
      case "Not Started":
        return "bg-red-200";
      case "Already Started":
        return "bg-yellow-200";
      case "Almost Done":
        return "bg-green-200";
      default:
        return "bg-gray-200";
    }
  }
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
      {status}
    </span>
  )
}

export default StatusDisplay
