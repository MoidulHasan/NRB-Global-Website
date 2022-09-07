import CabinateCard from "../../../component/Commitees/CabinateMembers/CabinateCard";
import './CabinateMembers.css';
const CabinateMembers = () => {
    return (
        <div className="cabinetcontainer p-container">
            <div className="cabinet" style={{ padding: '30px' }}>
                <p className="cabinet-para">The Cabinet</p>
                <h3>The Cabinete role is to advise the President on any subject he or she may require relating to the duties of each member’s respective office.</h3>
                <h4>
                    President Mehrab Ali Cabinet includes Vice President Jara Ali Khan and the heads of the 15 executive departments — the Secretaries of Agriculture, Commerce, Defense, Education, Energy, Health and Human Services, Homeland Security, Housing and Urban Development, Interior, Labor, State, Transportation, Treasury, and Veterans Affairs, and the Attorney General. Additionally, the Cabinet includes the White House Chief of Staff, the US Ambassador to the United Nations, the Director of National Intelligence, and the US Trade Representative, as well as the heads of the Environmental Protection Agency, Office of Management and Budget, Council of Economic Advisers, Office of Science and Technology Policy, and Small Business Administration.
                </h4>
            </div>
            <CabinateCard />
        </div>

    );
};

export default CabinateMembers;