import AdvisorCouncilCard from '../../../component/Commitees/AdvisorCouncil/AdvisorCouncilCard';
import { Button } from 'primereact/button';
import './AdvisorCouncil.css'
function AdvisorCouncil() {
    return (
        <div>
            <p>Advisor Council</p>
            <AdvisorCouncilCard />
            {/* <div className="advisorBtn">
                <Button label="Become a Advisor Councilor" />
            </div> */}
        </div>
    )
}

export default AdvisorCouncil