import { useState } from 'react';
import '../../../styles/navbar.styles.css';

export default function HeadingToggleText() {
  const [headingIsVisible, setHeadingIsVisible] = useState(false);

  const handleToggle = () => {
    setHeadingIsVisible(prev => !prev);
  };

  return (
    <div className="flex items-center justify-center hover:mx-3 duration-200 transition-all cursor-pointer hover:scale-x-[1.02]">
      {/* "N" heading always visible */}
      <h1 className="heading text-3xl text-stone-800 dark:text-stone-200">N</h1>

      {/* Conditional rendering for "aineel" text with pop-out effect */}
      {headingIsVisible && (
        <h1
          className={`heading text-3xl text-stone-800 dark:text-stone-200 pop-out`}
        >
          <span className="text-shadow-blue">aineel</span>
        </h1>
      )}

      {/* "S" heading always visible */}
      <h1 className="heading text-3xl text-stone-800 dark:text-stone-200">S</h1>

      {/* Conditional rendering for "oyantar" text with pop-out effect */}
      {headingIsVisible && (
        <h1
          className={`heading text-3xl text-stone-800 dark:text-stone-200 pop-out`}
        >
          <span className="text-shadow-blue">oyantar</span>
        </h1>
      )}

      <button onClick={handleToggle} className="hidden">Toggle Visibility</button>
    </div>
  );
}
