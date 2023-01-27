const CloseIcon = ({ width = '20px', height = '20px' }: { width?: string; height?: string }) => (
   <div style={{ cursor: 'pointer' }}>
      <svg
         width={width}
         height={height}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_429_11083)">
            <path
               d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
               stroke="#292929"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
         <defs>
            <clipPath id="clip0_429_11083">
               <rect
                  width="24"
                  height="24"
                  fill="white"
               />
            </clipPath>
         </defs>
      </svg>
   </div>
);

export { CloseIcon };
