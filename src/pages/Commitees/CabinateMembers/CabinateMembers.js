import CabinateCard from '../../../component/Commitees/CabinateMembers/CabinateCard';
import './CabinateMembers.css';
const CabinateMembers = () => {
  return (
    <div className='cabinetcontainer p-container'>
      {/* <div className="cabinet" style={{ padding: '30px' }}>
                <p className="cabinet-para">The Cabinet</p>
                <h3>The Cabinete role is to advise the President on any subject he or she may require relating to the duties of each member’s respective office.</h3>
                <h4>
                    President Mehrab Ali Cabinet includes Vice President Jara Ali Khan and the heads of the 15 executive departments — the Secretaries of Agriculture, Commerce, Defense, Education, Energy, Health and Human Services, Homeland Security, Housing and Urban Development, Interior, Labor, State, Transportation, Treasury, and Veterans Affairs, and the Attorney General. Additionally, the Cabinet includes the White House Chief of Staff, the US Ambassador to the United Nations, the Director of National Intelligence, and the US Trade Representative, as well as the heads of the Environmental Protection Agency, Office of Management and Budget, Council of Economic Advisers, Office of Science and Technology Policy, and Small Business Administration.
                </h4>
            </div> */}
      <div className='cabinateTeamContainer mt-8 grid'>
        <div className='col-12 md:col-9'>
          <h3 className='my-4 font-bold text-xl text-gray-700'>
            The Cabinet Team
          </h3>
          <h2 className='my-4 font-bold text-4xl text-blue-900 pr-1 md:pr-8 mr-0 md:mr-4'>
            Meet our Team of experts including the founder who have been
            managing NRB Global.
          </h2>
          <h3 className='text-gray-600'>
            To be the organization our members want us to be, it takes an
            electric group of passionate operators. Get to know the people
            leading the way at NRB Global.
          </h3>
        </div>
      </div>
      <CabinateCard />
    </div>
  );
};

export default CabinateMembers;
