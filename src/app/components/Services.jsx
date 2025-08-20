import servicesLi from "../consts/servicesLi";
export default function Services() {
  return (
    <>
      <ul>Services</ul>
      {servicesLi.map((val) => {
        const key = Object.keys(val)[0];
        const text = val[key];
        return <li key={key}>{text}</li>;
      })}
    </>
  );
}
