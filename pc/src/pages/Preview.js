import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Preview.css';
import About from './About';

const Preview = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="preview_container">
      <About />
      <div className="preview_content">
        <div className="preview_image">
          <img src={`${location.state}`} alt="preview" />
          <button
            onClick={e => {
              return navigate(-1);
            }}
          >
            <i className="fas fa-times fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
