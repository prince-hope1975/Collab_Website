import { IconProps, PropTypes, SvgIconProps } from "@mui/material";
import { SVGProps } from "react";

export const BlockIcon =  ()=>{
    return (
      <>
        <svg
          width="30"
          height="22"
          viewBox="0 0 30 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="21.0922"
            width="21.0922"
            height="29.2684"
            transform="rotate(-90 0 21.0922)"
            fill="white"
          />
          <circle
            cx="23.5647"
            cy="10.5459"
            r="2.30958"
            transform="rotate(-90 23.5647 10.5459)"
            fill="#070707"
          />
        </svg>
      </>
    );
}

export const HamburgerIcon = (props: any) =>{
    return (
      <>
        <svg {...props}
          width="20"
          height="7"
          viewBox="0 0 20 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="20" y2="0.5" stroke="white" />
          <line y1="6.5" x2="20" y2="6.5" stroke="white" />
        </svg>
      </>
    );
}
export const Oval = () =>{
return (
  <svg style={{position:"absolute", top: "50%" ,left:"50%" , transform:"translate(-16px, -16px)"}}
    width="32"
    height="31"
    viewBox="0 0 32 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="15.9998"
      cy="15.5476"
      r="13.6327"
      stroke="white"
      stroke-width="3"
    />
    <path
      d="M19.3917 15.0663L13.3837 11.5161C12.8887 11.226 12.1548 11.5161 12.1548 12.2159V19.3163C12.1548 19.9649 12.8375 20.3574 13.3837 20.0331L19.3917 16.483C19.9208 16.1587 19.9208 15.3906 19.3917 15.0663Z"
      fill="#FBFAFC"
    />
  </svg>
);



}


export const Mail = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6.3033C22 5.2033 21.1 4.3033 20 4.3033H4C2.9 4.3033 2 5.2033 2 6.3033V18.3033C2 19.4033 2.9 20.3033 4 20.3033H20C21.1 20.3033 22 19.4033 22 18.3033V6.3033ZM20 6.3033L12 11.3033L4 6.3033H20ZM20 18.3033H4V8.3033L12 13.3033L20 8.3033V18.3033Z"
        fill="white"
      />
    </svg>
  );
}

export const UpRigtArrow = ({style}:SvgIconProps) =>{
  return (
    <div style={style}>
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.0002 14C26.0002 13.4477 25.5524 13 25.0002 13L16.0002 13C15.4479 13 15.0002 13.4477 15.0002 14C15.0002 14.5523 15.4479 15 16.0002 15L24.0002 15L24.0002 23C24.0002 23.5523 24.4479 24 25.0002 24C25.5524 24 26.0002 23.5523 26.0002 23L26.0002 14ZM15.1007 25.3137L25.7073 14.7071L24.2931 13.2929L13.6864 23.8995L15.1007 25.3137Z"
          fill="white"
        />
      </svg>
    </div>
  );



}
export const Xclose = () =>{
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.646447"
        y1="14.7886"
        x2="14.7886"
        y2="0.646462"
        stroke="white"
      />
      <line
        x1="1.35355"
        y1="0.788597"
        x2="15.4957"
        y2="14.9307"
        stroke="white"
      />
    </svg>
  );

}