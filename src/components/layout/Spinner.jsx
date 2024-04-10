import gif from "./assets/spinner (1).gif";
function Spinner() {
  return (
    <div className="flex justify-center">
      <img className="w-10 h-10" src={gif} alt="load page..."></img>
    </div>
  );
}

export default Spinner;
