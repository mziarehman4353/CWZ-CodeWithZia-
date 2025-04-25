"use client";
import { useState, useEffect } from "react";
import styles from "../styles.module.css";
import { coffeeMessages } from "../coffee-texts";

const TypingEffectBlock = () => {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < coffeeMessages[msgIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + coffeeMessages[msgIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setMsgIndex((prev) => (prev + 1) % coffeeMessages.length);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, msgIndex]);

  return (
    <div className={styles.typing}>
      <div className={styles.typingContent}>{text}</div>
    </div>
  );
  
};

export default TypingEffectBlock;
