const RtronSmallLogo = ({ height = 20 }) => (
    <svg height={height} version="1.1" viewBox="0 0 100 39.76" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="linear-gradient" x1="31.01" x2="79.02" y1="64.71" y2="-23.65" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6cbe45" offset=".13"/>
                <stop stopColor="#5bc28f" stopOpacity=".83" offset=".34"/>
                <stop stopColor="#4ec5c7" stopOpacity=".7" offset=".55"/>
                <stop stopColor="#47c7e9" stopOpacity=".63" offset=".74"/>
                <stop stopColor="#44c8f5" stopOpacity=".6" offset=".9"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="68.5" x2="65.31" y1="12.24" y2="19.86" gradientUnits="userSpaceOnUse">
                <stop stopColor="#92d8ef" offset="0"/>
                <stop stopColor="#6dbe49" offset="1"/>
            </linearGradient>
        </defs>
        <path d="M100,39.76C4.26,21.75,30.09,6.83,89.26.55V0C40.58,0-26,5.27,10.48,39.76Z" fill="url(#linear-gradient)"/>
        <ellipse cx="67.36" cy="14.96" rx="3.4" ry="3.33" fill="url(#linear-gradient-2)"/>
    </svg>
);

export default RtronSmallLogo;
