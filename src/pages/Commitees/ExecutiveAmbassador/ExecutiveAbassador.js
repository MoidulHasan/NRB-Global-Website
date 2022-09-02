import ExecutiveAbassadorProfile from "../../../component/Commitees/ExecutiveAmbassador/ExecutiveAmbassadorProfile"
import './ExecutiveAmbassador.css'
import { Button } from 'primereact/button';
function ExecutiveAbassador() {
    return (
        <div className="executivecontainer">
            <p>ExecutiveAbassador</p>
            <ExecutiveAbassadorProfile />
            <div className="memberBtn">
                <Button label="Become a Executive Ambassador" />
            </div>
        </div>
    )
}

export default ExecutiveAbassador