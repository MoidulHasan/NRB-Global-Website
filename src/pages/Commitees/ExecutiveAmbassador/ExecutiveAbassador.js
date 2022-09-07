import ExecutiveAbassadorProfile from "../../../component/Commitees/ExecutiveAmbassador/ExecutiveAmbassadorProfile"
import './ExecutiveAmbassador.css'
import { Button } from 'primereact/button';
function ExecutiveAbassador() {
    return (
        <div className="executive-container p-container">
            <p className="executive-container-para">ExecutiveAbassador</p>
            <ExecutiveAbassadorProfile />
            <div className="executive-memberBtn">
                <Button label="Become a Executive Ambassador" />
            </div>
        </div>
    )
}

export default ExecutiveAbassador