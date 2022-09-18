import React from 'react';
import './Objective.css';
import objective1 from '../../../assets/image/aboutRefactor/objectiveNRB2.png';

const Objective = () => {
  return (
    <div className='p-container my-6'>
      <div class='px-4 py-4 nrbObjectiveDiv'>
        <div className='grid'>
          <div class='col-12 md:col-6 flex-order-2 md:flex-order-1'>
            <h4 className='my-4 font-bold text-3xl md:text-6xl'>
              Our Objective
            </h4>
            <div className='grid my-2 py-2'>
              <div className='col-12 mt-2 mb-1'>
                <div className='objectiveContainer flex align-items-start p-4'>
                  <span class='material-icons-sharp text-3xl'>
                    check_circle_outline
                  </span>
                  <p className='m-1 pl-2 objectiveTextAbout text-lg'>
                    Food for hungry community,wants to be poverty free
                    Bangladesh.
                  </p>
                </div>
              </div>
              <div className='col-12  my-1'>
                <div className='objectiveContainer flex align-items-start p-4'>
                  <span class='material-icons-sharp text-3xl'>
                    check_circle_outline
                  </span>
                  <p className='m-1 pl-2 objectiveTextAbout text-lg'>
                    Helping the students of the country to study abroad with
                    proper funding and to get funding.
                  </p>
                </div>
              </div>
              <div className='col-12  my-1'>
                <div className='objectiveContainer flex align-items-start p-4'>
                  <span class='material-icons-sharp text-3xl'>
                    check_circle_outline
                  </span>
                  <p className='m-1 pl-2 objectiveTextAbout text-lg'>
                    To help students develop latent talents by organizing
                    various national and international competitions.
                  </p>
                </div>
              </div>
              <div className='col-12  my-1'>
                <div className='objectiveContainer flex align-items-start p-4'>
                  <span class='material-icons-sharp text-3xl'>
                    check_circle_outline
                  </span>
                  <p className='m-1 pl-2 objectiveTextAbout text-lg'>
                    Building relationship of students of the country with
                    significant expatriates in their own field.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 md:col-6 flex-order-1 md:flex-order-2 flex align-items-center justify-content-center'>
            <div className='nrbObjectiveImgContainer'>
              <img src={objective1} alt='NRB Objectives' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
