import styles from "../styles.module.css";

const ThankYouWall = () => {
  const names = ["Ali", "Jenny", "Zara", "Sultan"];

  return (
    <div className={styles.thankyouWall}>
      <div className={styles.thankyouContent}>
        <h3 className="text-lg  text-white font-semibold mb-2">Big Thanks to 💖</h3>
        <ul className="text-sm text-white flex flex-wrap justify-center gap-3">
          {names.map((name, i) => (
            <li key={i}>✨ {name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThankYouWall;
