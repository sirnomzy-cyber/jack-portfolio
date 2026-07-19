interface LiveProjectButtonProps {
  className?: string;
}

const LiveProjectButton = ({ className = '' }: LiveProjectButtonProps) => {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-9 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
    </button>
  );
};

export default LiveProjectButton;
