import envelope from "/envelope.svg";

const Mail = ({ className }: { className?: string }) => {
  return <img src={envelope} className={className} alt="Email logo" />;
};

export default Mail;
