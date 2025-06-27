import { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = ({ typingData, extraClassName }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typingData
        ? typingData
        : [
          "I know <strong>React.js</strong>",
          "I know <strong>TypeScript</strong>",
          "I know <strong>JavaScript</strong>",
          "I'm a <strong>Frontend Developer</strong>",
          "I build <strong>UI/UX</strong>",
        ], 
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 60,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      className={`${extraClassName} typing-subtitle`}
      id="subtitle"
      ref={el}
    ></span>
  );
};
export default TypingAnimation;
