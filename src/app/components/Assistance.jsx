import assistanceLi from "../consts/assitanceLi";
export default function Assistance() {
  return (
    <>
      <ul>Assitance to the buyer</ul>
      {assistanceLi.map((val) => {
        const key = Object.keys(val)[0];
        const text = val[key];
        return <li key={key}>{text}</li>;
      })}
    </>
  );
}
