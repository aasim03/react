function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const Day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const Year = props.date.getFullYear();
  
  return (
    <div>
      <div>{Year}</div>
      <div>{month}</div>
      <div>{Day}</div>
    </div>
  );
}

export default ExpenseDate;
