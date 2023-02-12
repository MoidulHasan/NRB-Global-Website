import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './AnnirversaryModal.css';
// import anniversaryImg from '../../assets/image/nrb anniversary.png';
// import anniversaryImg2 from '../../assets/image/anniversaryModal2.png';
import anniversaryImg3 from '../../assets/image/anniversarymodal3.png';

const AnnirversaryModal = (props) => {
  console.log(props.show);
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 10, exit: 300 }}
    >
      <div className='modal anniversaryModal' onClick={props.onClose}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <span
              onClick={props.onClose}
              className='closeButtonContainer flex align-items-end justify-content-end mr-2'
            >
              <i className='pi pi-times' style={{ fontSize: '1.5rem' }}></i>
            </span>
          </div>
          <div className='modal-body'>
            <div className='modalImageContainer'>
              <img src={anniversaryImg3} alt='3 Year Anniversary Celebration' />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')
  );
};

export default AnnirversaryModal;
