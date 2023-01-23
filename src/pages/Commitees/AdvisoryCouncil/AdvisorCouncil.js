import AdvisorCouncilCard from '../../../component/Commitees/AdvisorCouncil/AdvisorCouncilCard';
import { Button } from 'primereact/button';
import './AdvisorCouncil.css';
import { Link } from 'react-router-dom';
function AdvisorCouncil() {
  return (
    <div className='advisor-council-container p-container'>
      <p className='advisor-council-container-para'>Advisor Council</p>
      <AdvisorCouncilCard />
      {/* <div className="advisorBtn">
                <Button label="Become a Advisor Councilor" />
            </div> */}
      <div className='advisor-memberBtn'>
        <Link className='no-underline' to='/emIndividualRegistration'>
          <Button label='Become an Advisor' />
        </Link>
      </div>
    </div>
  );
}
export default AdvisorCouncil;
