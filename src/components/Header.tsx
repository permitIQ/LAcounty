// import React from 'react'; // No longer needed with react-jsx

const Header = () => {
  return (
    <div
      className="top-bar tw-top-0 tw-left-sidebar tw-right-0 tw-z-tooltip tw-bg-white tw-h-16 tw-px-4 tw-border-x-0 tw-border-t-0 tw-border-b tw-border-solid tw-border-ul-gray-300 tw-flex tw-items-center tw-justify-between tw-overflow-visible tw-absolute tw-text-ui-16"
      style={{ width: 'calc(100vw - 120px)' }} // Matches example, 120px is sidebar width
    >
      <div className="workspace-picker">
        <div
          className="focus-within:tw-outline tw-outline-ul-primary-blue tw-bg-brand-input-bg tw-flex tw-text-ui-18 tw-py-1 tw-rounded-sm" // Added tw-py-1 for padding: 4px 0px approx.
          data-variant="default"
          data-with-right-section="true"
          // style is mostly replaced by Tailwind classes, some flex properties might need to be on parent or here
          // style={{
          //   // backgroundColor: 'rgb(237, 237, 242)', // now tw-bg-brand-input-bg
          //   display: 'flex',
          //   flexGrow: 0, // default
          //   // fontSize: '18px', // now tw-text-ui-18
          //   // padding: '4px 0px', // now tw-py-1 (approx)
          //   borderRadius: '2px', // now tw-rounded-sm
          // }}
        >
          <input
            className="tw-bg-brand-input-bg tw-font-semibold tw-rounded-none tw-cursor-pointer tw-border-none focus:tw-outline-none tw-px-3" // tw-px-3 for padding-left/right
            data-variant="default"
            readOnly
            aria-haspopup="dialog"
            aria-expanded="false"
            // aria-controls="mantine-vus60ero9-dropdown" // Mantine specific, remove for now
            aria-invalid="false"
            // id="mantine-vus60ero9-target" // Mantine specific, remove for now
            defaultValue="LA County Permitting" // Changed from value to defaultValue for uncontrolled component
            // @ts-ignore TS doesn't know about fieldSizing yet
            style={{ fieldSizing: 'content' }} // Kept field-sizing from example as it's specific
          />
          <div data-position="right" className="tw-flex tw-items-center">
            <i
              className="fa-solid fa-chevron-down tw-pr-3 tw-text-brand-input-icon" // tw-pr-3 for padding-right, tw-pt-[5px] removed as flex alignment should handle vertical centering
            ></i>
          </div>
        </div>
      </div>
      {/* Other header elements like search, notifications, user menu would go here */}
      <div>
        {/* Placeholder for right side elements */}
      </div>
    </div>
  );
};

export default Header; 