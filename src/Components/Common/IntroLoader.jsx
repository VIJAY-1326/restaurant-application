import { useEffect, useRef, useState } from "react";

import "./IntroLoader.css";

function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const hasFinished = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hasFinished.current) return;

      hasFinished.current = true;
      setVisible(false);
    }, 2600);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-loader">
      <div className="intro-loader-glow" />

      <div className="intro-content">
        <div className="intro-est">
          EST. 2026
        </div>

        <div className="intro-dot" />

        <div className="intro-logo-wrap">
          <h1 className="intro-logo">
            RESTAURA
          </h1>

          <div className="intro-logo-line" />
        </div>

        <div className="intro-subtitle">
          FINE DINING
        </div>

        <div className="intro-loading">
          <span>
            PREPARING YOUR EXPERIENCE
          </span>

          <div className="intro-progress">
            <div className="intro-progress-bar" />
          </div>
        </div>
      </div>

      <div className="intro-corner intro-corner-top-left">
        R
      </div>

      <div className="intro-corner intro-corner-top-right">
        26
      </div>

      <div className="intro-corner intro-corner-bottom-left">
        EST. 2026
      </div>

      <div className="intro-corner intro-corner-bottom-right">
        HYDERABAD · INDIA
      </div>
    </div>
  );
}

export default IntroLoader;
