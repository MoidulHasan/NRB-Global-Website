// import ExecutiveAbassadorProfile from '../../../component/Commitees/ExecutiveAmbassador/ExecutiveAmbassadorProfile';
import './ExecutiveAmbassador.css';
import { Button } from 'primereact/button';
import ExOverlayCard from '../../../component/Commitees/ExecutiveAmbassador/ExOverlayCard';
import { Link } from 'react-router-dom';
function ExecutiveAbassador() {
  return (
    <div className='executive-container p-container'>
      <p className='executive-container-para'>Executive Ambassador</p>
      {/* <ExecutiveAbassadorProfile /> */}
      <ExOverlayCard />
      <div className='executive-memberBtn'>
        <Link className='no-underline' to='/emIndividualRegistration'>
          <Button label='Become an Executive Ambassador' />
        </Link>
      </div>
    </div>
  );
}
export default ExecutiveAbassador;
