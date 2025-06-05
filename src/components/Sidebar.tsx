// import React from 'react'; // No longer needed with react-jsx
import logo from '../assets/sidebar-ul-logo.svg'; // Assuming you have the logo

const Sidebar = () => {
  const sidebarLinks = [
    { name: 'Hub', href: '#', icon: 'fa-solid fa-signs-post', isActive: false },
    { name: 'Workspaces', href: '#', icon: 'fa-solid fa-briefcase', isActive: true },
    { name: 'Maps', href: '#', icon: 'fa-regular fa-map', isActive: false },
    { name: 'Explore', href: '#', icon: 'fa-regular fa-map', isActive: false },
    { name: 'Projects', href: '#', icon: 'fa-regular fa-folder-open', isActive: false },
    { name: 'Reports', href: '#', icon: 'fa-regular fa-file-lines', isActive: false },
    { name: 'Drive', href: '#', icon: 'fa-regular fa-folder-closed', isActive: false },
  ];

  const userOptionsLinks = [
    { name: 'Inbox', href: '#', icon: 'fa-regular fa-bell' },
  ];

  return (
    <div
      className="ul-sidebar tw-bg-white tw-border tw-border-t-0 tw-border-b-0 tw-border-solid tw-border-brand-border-sidebar"
    >
      <div className="sidebar-content tw-flex tw-flex-col tw-h-full tw-w-sidebar tw-px-[12px] tw-text-ui-16">
        <div className="tw-flex tw-justify-center tw-py-[24px] tw-mb-[16px]">
          <img className="tw-w-logo tw-h-logo" src={logo} alt="UrbanLogiq Logo" />
        </div>
        <div className="tw-flex tw-flex-col tw-grow">
          <div className="view-icons-container tw-flex tw-flex-col tw-space-y-[2px]">
            {sidebarLinks.map((link) => (
              <a
                key={link.name}
                className={`view-icon-link tw-no-underline tw-py-[8px] tw-rounded-[2px] hover:tw-bg-brand-bg-active tw-transition-colors tw-duration-300 tw-ease-in-out`}
                data-link-name={link.name}
                href={link.href}
                aria-current={link.isActive ? 'page' : undefined}
              >
                <div className="tw-flex tw-flex-col tw-items-center">
                  <div
                    className="sidebar-icon-button tw-w-full tw-text-center tw-h-sidebar-icon"
                    tabIndex={-1}
                    id={`ul-${link.name.toLowerCase()}-menu-button`}
                    role="button"
                  >
                    <div className="feedback-container">
                      <i
                        className={`${link.icon} tw-text-ui-24 tw-mb-[4px] tw-transition-colors tw-duration-300 tw-ease-in-out ${
                          link.isActive ? 'tw-text-ul-primary-blue' : 'tw-text-brand-icon-inactive'
                        }`}
                      ></i>
                    </div>
                  </div>
                  <span
                    className={`tw-font-semibold tw-text-ui-14 tw-transition-colors tw-duration-300 tw-ease-in-out ${
                      link.isActive ? 'tw-text-ul-primary-blue' : 'tw-text-ul-text-black'
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="user-options-container tw-flex tw-flex-col tw-mt-auto tw-mb-[16px]">
          {userOptionsLinks.map((link) => (
            <a
              key={link.name}
              data-link-name={link.name.toLowerCase()}
              className="view-icon-link tw-no-underline tw-py-[8px] tw-group tw-rounded-[2px] hover:tw-bg-brand-border-sidebar tw-transition-colors tw-duration-300 tw-ease-in-out"
              href={link.href}
            >
              <div className="tw-flex tw-flex-col tw-items-center">
                <div
                  className="sidebar-icon-button tw-w-full tw-text-center tw-h-sidebar-icon"
                  tabIndex={-1}
                  id={`ul-${link.name.toLowerCase()}-menu-button`}
                  role="button"
                >
                  <div className="feedback-container">
                    <i className={`${link.icon} tw-text-ui-24 tw-text-brand-icon-inactive tw-mb-[4px] tw-transition-colors tw-duration-300 tw-ease-in-out`}></i>
                  </div>
                </div>
                <span className="tw-font-semibold tw-text-ui-14 tw-transition-colors tw-duration-300 tw-ease-in-out tw-text-ul-text-black">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
          <div className="view-icon-container tw-no-underline tw-rounded-[2px]">
            <div className="tw-flex tw-flex-col tw-items-center tw-cursor-pointer tw-py-2 hover:tw-bg-ul-gray-300 tw-rounded-sm">
              <div className="sidebar-icon-button tw-w-full tw-text-center tw-h-sidebar-icon" tabIndex={-1} role="button">
                <div className="feedback-container">
                  <i className="fa-regular fa-circle-question tw-text-ui-24 tw-text-brand-icon-inactive tw-mb-[4px] tw-transition-colors tw-duration-300 tw-ease-in-out"></i>
                </div>
              </div>
              <span className="tw-font-semibold tw-text-ui-14 tw-text-ul-text-black">Help</span>
            </div>
          </div>
            {/* Dropdown for user - simplified for now, no actual dropdown logic */}
      
            {/* Actual dropdown menu would go here, hidden by default */}
  
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 