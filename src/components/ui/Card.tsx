const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-md w-full">
      {children}
    </div>
  );
};

export default Card;
