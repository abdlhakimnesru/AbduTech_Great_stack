import React from 'react';
import './Program.css';
import programImg_1 from '../../assets/images/program-1.png';
import programImg_2 from '../../assets/images/program-2.png';
import programImg_3 from '../../assets/images/program-3.png';
import programIcon1 from '../../assets/images/program-icon-1.png';
import programIcon2 from '../../assets/images/program-icon-2.png';
import programIcon3 from '../../assets/images/program-icon-3.png';

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={programImg_1} alt="Program 1" />
        <div className="caption">
          <img className='image' src={programIcon1} alt="Icon 1" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={programImg_2} alt="Program 2" />
        <div className="caption">
          <img src={programIcon2} alt="Icon 2" />
          <p>Master Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={programImg_3} alt="Program 3" />
        <div className="caption">
          <img src={programIcon3} alt="Icon 3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
