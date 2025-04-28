'use client';

import Image from "next/image";
import styles from "../styles.module.css";

const SupportPaymentBlock = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className="text-xl font-bold mb-2 text-white text-center">Buy Me a Coffee ☕</h2>
        <p className="text-white text-center mb-4">Fuel my next big idea 💡</p>
        <Image
          src="/images/qr-code.jpeg"
          alt="QR Code"
          width={150}
          height={150}
          className={styles.qrImg}
        />
        <p className="text-center text-sm text-white mt-2">
          Bank: PK88SCBL0000001161805201
          <br />
          Wallet: abc@crypto
        </p>
      </div>
    </div>
  );
};

export default SupportPaymentBlock;
