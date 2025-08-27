const ErrorMessage = ({ message }) => {
  console.log(message);
  return (
    <div className="text-red-600 text-center font-bold text-2xl">
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorMessage;
