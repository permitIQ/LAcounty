// import React from 'react'; // No longer needed with react-jsx

const MainContent = () => {
  return (
    <div className="mapAndReportContainer tw-pt-[56px] tw-ml-0" style={{ width: 'calc(100vw - 120px)', marginLeft: '120px'}}>
      <iframe
        src="https://permitiq.streamlit.app/?embed=true"
        style={{marginLeft: '-120px', height: 'calc(100vh - 56px)', width: '100%' }} // Adjusted height to fill remaining space
        className="mapAndReportContainer" // Re-using class, though specific iframe styles might be better
        title="PermitIQ Streamlit App"
      ></iframe>
    </div>
  );
};

export default MainContent; 