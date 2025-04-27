"use client";

import LayoutWrapper from "@/app/components/General/LayoutWrapper";
import styles from "./styles.module.css";
import TypingEffectBlock from "./components/TypingEffectBlock";
import SupportPaymentBlock from "./components/SupportPaymentBlock";

export default function CoffeePage() {
  return (
    <LayoutWrapper>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <TypingEffectBlock />
            <SupportPaymentBlock />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
