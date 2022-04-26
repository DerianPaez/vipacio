const Hr = ({ ...props }) => {
  return (
    <svg
      width="32"
      height="5"
      viewBox="0 0 32 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <line y1="1.25" x2="32" y2="1.25" stroke="#05FF00" strokeWidth="1.5"/>
      <line y1="4.25" x2="18" y2="4.25" stroke="#05FF00" strokeWidth="1.5"/>
    </svg>

  )
}

export default Hr
