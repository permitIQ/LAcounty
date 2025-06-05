// import React from 'react'; // No longer needed with react-jsx
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './app-styles.css'; // We will add the custom styles here

function App() {
  return (
    <div id="root" data-theme="v2Theme">
      <div className="tw-h-full tw-w-full tw-flex tw-flex-col tw-fixed">
        <div className="tw-w-full" style={{ height: 'calc(0px + 100vh)' }}>
          <div className="ulV2Main">
            {/* <div className="mapOverlay"></div> */}
            <Sidebar />
            <Header />
            <MainContent />
            {/* Modal structure from example.html - can be componentized later if needed */}
            <div className="ul-user-projects-manager-save-user-project-modal" style={{display: 'none'}}> {/* Hidden for now */}
              <div className="content-container">
                <h2 className="header">Save Project</h2>
                <div className="padding-container">
                  <div className="text-input">
                    <div className="header-row"><span className="label">Name</span></div><input className="input"
                      placeholder="Project Name" defaultValue="Contextual Project" />
                  </div>
                  <div className="ul-multi-select-dropdown-with-pills">
                    <div className="header-row"><span className="label">Tag</span><span className="help-text">maximum
                      3</span></div>
                    <div className="input-wrapper">
                      <div tabIndex={0} className="input-container"><input className="input-field" defaultValue="" /></div>
                      <div className="dropdown">
                        <div className="dropdown-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="action-row"><button type="button"
                  className="ul-btn ul-btn-solid-style ul-btn-secondary-action btn-primary ul-btn-small btn">Cancel</button><button
                    type="button"
                    className="ul-btn ul-btn-solid-style ul-btn-primary-action btn-primary ul-btn-small btn">Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 

 