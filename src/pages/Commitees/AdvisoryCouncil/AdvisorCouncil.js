import AdvisorCouncilCard from '../../../component/Commitees/AdvisorCouncil/AdvisorCouncilCard';
import { Button } from 'primereact/button';
import './AdvisorCouncil.css'
function AdvisorCouncil() {
    return (
        <div className='advisor-council-container p-container'>
            <p className='advisor-council-container-para'>Advisor Council</p>
            <AdvisorCouncilCard />
            {/* <div className="advisorBtn">
                <Button label="Become a Advisor Councilor" />
            </div> */}
            <div className="advisor-memberBtn">
                <Button label="Become a Advisor" />
            </div>
        </div>
    )
}
export default AdvisorCouncil