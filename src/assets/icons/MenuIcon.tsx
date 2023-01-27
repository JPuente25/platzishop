// import ReactComponent from "../svg/menu.svg";

const MenuIcon = ({ width = '60px', height = '60px' }: {width?: string, height?: string}) => (
   <div style={{ cursor: 'pointer' }}>
      <svg
         width={width}
         height={height}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M4 7H20M4 12H20M4 17H20"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   </div>
);

export { MenuIcon };
