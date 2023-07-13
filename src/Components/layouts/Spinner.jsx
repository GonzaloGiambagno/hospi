import SpinnerHilp from '../../assets/spinner.gif'

const Spinner = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <img src={SpinnerHilp} alt="Loading" className="w-auto h-auto opacity-80" />
      </div>
    );
  };
  
export default Spinner;