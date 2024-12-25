import '../../../styles/navbar.styles.css';

export default function HeadingToggleText() {
  return (
    <div className="flex items-center justify-center hover:mx-4 duration-200 transition-all cursor-pointer hover:scale-x-[1.02]">
      {/* "N" heading always visible */}
      <h1 className="heading text-3xl text-stone-800 dark:text-stone-200">N</h1>

      {/* "S" heading always visible */}
      <h1 className="heading text-3xl text-stone-800 dark:text-stone-200">S</h1>
    </div>
  );
}
