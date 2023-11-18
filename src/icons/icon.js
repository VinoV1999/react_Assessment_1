export const QrCode = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
    {...rest}
    className={className}
  >
    <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
  </svg>
);

export const Plus = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
    fill="white"
    {...rest}
    className={className}
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);

export const Puzle = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={className}
  >
    <path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8v0c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2v0c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2v0c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2v0c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8v0c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320v0c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256v0C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2v0z" />
  </svg>
);

export const ExportCSV = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={className}
  >
    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
  </svg>
);

export const SearchIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={className}
  >
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
  </svg>
);

export const AngleUpArrow = ({ className, ...rest }) => (
  <svg
    fill="#000000"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={className}
  >
    <g id="SVGRepo_bgCarrier"></g>
    <g id="SVGRepo_tracerCarrier"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z"></path>
    </g>
  </svg>
);

export const EditPencil = ({ className, ...rest }) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 528.899 528.899"
    {...rest}
    className={className}
  >
    <g id="SVGRepo_bgCarrier"></g>
    <g id="SVGRepo_tracerCarrier"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"></path>{" "}
      </g>{" "}
    </g>
  </svg>
);

export const DeleteIcon = ({ className, ...rest }) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={className}
  >
    <g id="Icon/Operators/Delete">
      <path
        id="Vector"
        d="M8.75341 24.4167C8.25359 24.4167 7.82451 24.2375 7.46617 23.8791C7.10782 23.5208 6.92865 23.0917 6.92865 22.5919V7.07375H5.75V5.60798H10.8265V4.71802H18.1735V5.60798H23.2499V7.07375H22.0713V22.5919C22.0713 23.0933 21.8925 23.5228 21.535 23.8803C21.1775 24.2379 20.748 24.4167 20.2465 24.4167H8.75341ZM20.6055 7.07375H8.39442V22.5919C8.39442 22.6966 8.42933 22.7826 8.49913 22.8499C8.56894 22.9172 8.6537 22.9509 8.75341 22.9509H20.2465C20.3363 22.9509 20.4186 22.9135 20.4933 22.8387C20.5681 22.7639 20.6055 22.6816 20.6055 22.5919V7.07375ZM11.5699 20.5308H13.0357V9.47437H11.5699V20.5308ZM15.9643 20.5308H17.4301V9.47437H15.9643V20.5308Z"
        fill="white"
      />
    </g>
  </svg>
);