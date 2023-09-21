import React from "react";
import styled from "@emotion/styled";

import { colors, themes } from "../theme";

const SVGWrapper = styled("div")`
  height: 100%;
  width: 100%;

  > svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

const SVGLogo = props => {
  return (
    <SVGWrapper>
      <svg
        data-name="Layer 1"
        viewBox="0 0 360 150.82"
        width="1em"
        height="1em"
        {...props}
      >
        <defs>
          <linearGradient
            id="Wordmark_svg__a"
            x1={118.62}
            y1={69.31}
            x2={345.43}
            y2={181.87}
            gradientTransform="matrix(1 0 0 -1 0 150.95)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#3d2f90" />
            <stop offset={1} stopColor="#ea0578" />
          </linearGradient>
          <linearGradient
            id="Wordmark_svg__b"
            x1={153.2}
            y1={-0.36}
            x2={380.02}
            y2={112.21}
            xlinkHref="#Wordmark_svg__a"
          />
          <linearGradient
            id="Wordmark_svg__c"
            x1={110.47}
            y1={85.74}
            x2={337.28}
            y2={198.31}
            xlinkHref="#Wordmark_svg__a"
          />
          <linearGradient
            id="Wordmark_svg__d"
            x1={132.19}
            y1={41.99}
            x2={359}
            y2={154.56}
            xlinkHref="#Wordmark_svg__a"
          />
          <linearGradient
            id="Wordmark_svg__e"
            x1={98.64}
            y1={109.56}
            x2={325.45}
            y2={222.13}
            xlinkHref="#Wordmark_svg__a"
          />
          <linearGradient
            id="Wordmark_svg__f"
            x1={130.52}
            y1={47.49}
            x2={364.27}
            y2={163.5}
            xlinkHref="#Wordmark_svg__a"
          />
          <linearGradient
            id="Wordmark_svg__g"
            x1={13.42}
            y1={72.58}
            x2={346.58}
            y2={72.58}
            xlinkHref="#Wordmark_svg__a"
          />
          <linearGradient
            id="Wordmark_svg__h"
            x1={86.06}
            y1={89.18}
            x2={274.73}
            y2={89.18}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.23} stopColor="#3d2f90" />
            <stop offset={1} stopColor="#9f1782" />
          </linearGradient>
        </defs>
        <g opacity={0.15}>
          <path
            d="M215.54 86.65h-23.25V41h-10.54v45.65H158.5V41H142l-8.33-20h94.25l-.45 20h-12z"
            fill="url(#Wordmark_svg__a)"
          />
          <path
            d="M339.67 139L254 92.43l22-22.36-21.6-49.25h86.18v8.25L326.36 39l15.87 13.86h-39.14l11.13 24-12.44 12.6z"
            fill="url(#Wordmark_svg__b)"
          />
          <path
            d="M105.76 87.44L88.25 69.73l20.55-49.12h22.4l27.62 66H133.6l-3.38-8.53h-20.79z"
            fill="url(#Wordmark_svg__c)"
          />
          <path
            d="M256.83 86.65h-27.21V21.06h23.24V63h18l3 6.8z"
            fill="url(#Wordmark_svg__d)"
          />
          <path
            d="M21.56 139l38-49.57-12.47-12.67 11.14-24H19l15.87-13.83L20.63 29v-8.28h86.17L85.28 70.13l22 22.3z"
            fill="url(#Wordmark_svg__e)"
          />
        </g>
        <path
          d="M87.27 125.08a3.06 3.06 0 00.84-.72l-1.65 1.11z"
          fill="url(#Wordmark_svg__f)"
        />
        <path
          d="M343.93 133.36l-88.33-48 22.65-23.05-22.17-50.51h88.81V20l-14.66 10.19 16.35 14.28h-40.34l11.48 24.69-12.82 13.1zM259 84.84L336.51 127l-34.3-44.92 13.07-13.35L303 42.4h38.11L326.92 30l15.93-11.13v-5.39h-83.66l21.48 49.26zm57.7-57.75a4.75 4.75 0 114.74-4.75 4.66 4.66 0 01-4.79 4.75zm0-7.49a2.74 2.74 0 102.74 2.74 2.7 2.7 0 00-2.79-2.74zm-185-7.81l8.3 20.58h17.31v46.21L129.1 11.81H106C99 28.68 91.89 45.08 84.83 62l18 18.25 3.68-9.63h21.59q1.72 4.41 3.47 8.8h49.62v-47h10.88v47H216v-47h12.28V11.8zm1.3 65.55l-3.47-8.8h-24.38l-3.05 8-14.86-15c6.71-16.05 13.42-31.6 20.13-47.64h20.37c8.93 21.32 17.85 42.16 26.77 63.49zm93.34-47H214v47h-19.9v-47h-14.95v47h-19.87v-47h-17.94l-6.77-16.5h91.73zM109.91 55h14.93l-7.47-19.8q-3.73 9.92-7.46 19.8zm2.94-2l4.52-12 4.52 12zm160 2h-18.54V11.8h-23.52l-.43 67.39 28.09.19 17.46-17.29zm-15.24 22.34l-25.21-.18V13.47h19.85V57h19.21l2 4.59zm-155.18 9.09zm0 0zm0 0zM43.4 17.6a4.75 4.75 0 104.75 4.74 4.65 4.65 0 00-4.75-4.74zm0 7.48a2.74 2.74 0 112.74-2.74 2.69 2.69 0 01-2.74 2.74zm38.33 37.55l22.12-50.8H15.12V20l14.65 10.22-16.35 14.27h40.34l-11.48 24.7 12.8 13.11L16.81 133l82.84-45.06 4.68-2.54zm19.37 22.2L23.53 127l34.31-44.91-13.07-13.35L57 42.4H18.89L33.12 30 17.2 18.89v-5h83.62c-5 11.68-21.57 49.2-21.57 49.2z"
          fill="url(#Wordmark_svg__g)"
        />
        <path
          d="M271.62 55.66c-.23-.26-.17-.48-.69-.44a.74.74 0 00-.43 1.21c.08.09-.2.2-.24.18a3.85 3.85 0 00-.44-.19c-.08 0-.13.11-.17-.05s-.34-.41-.52-.35-.05.08-.15 0-.2-.21-.36-.18a26.54 26.54 0 00-6.15 2.16 4.38 4.38 0 01-1.27.5c-.2 0-.37-.38-.65-.23a5.68 5.68 0 01-.77.42c-.19 0-.24-.09-.39 0-3.16 1.26-6.21 2.65-9.28 4.07a6.76 6.76 0 01-1 .32c-1.08.36-2.12.67-3.22 1a15.64 15.64 0 00-3.32 1.12.55.55 0 00.06 1c-2.37 1-4.82 1.88-7.25 2.74-.78.27-.46 1.19.29 1.19-.21.23-.16.1-.43.41a4.37 4.37 0 00-.93 1.57c0 .18.25.49.25.62a1.69 1.69 0 010 .21c-.12 5.6.05 11.16.23 16.75l-.54.15a40.47 40.47 0 01-6 1 21.23 21.23 0 01-3.56.12c-.18 0-.3-.36-.48-.39a.63.63 0 01-.39-.13c-.83-.65-1.57-1-2.38-1.81a18.7 18.7 0 01-2.26-3l.06-.12a7 7 0 01.54-.76c.17-.21.38-.52.58-.75a6.21 6.21 0 00.42-.81 15.73 15.73 0 011.7-2.19c.68-.77.86-.9 1.78-2s3.47-4 4.35-5.13a11.59 11.59 0 001.53-2.28c.22-.44 0-.76.14-1.14a2.57 2.57 0 00.16-.93 2.13 2.13 0 00-.63-1.13 2.94 2.94 0 00-.81-.56c-.31-.15-.52-.31-.86-.44s-.52-.63-.87-.76a4.06 4.06 0 01-1.23-.45c-.34-.26-.76-.78-1.12-.8s-.71.54-1 .76-.81.56-1.09.77.12.4.21.41.34.26.26.33-.31-.13-.51-.07-.34-.14-.62.2c-1.47 1.75-3.95 4.69-5.31 6.22a20.74 20.74 0 00-2.45 3.44c-.32.49-.62.91-1 1.36l-1.12 1.43c-.29.39-.36.47-.61.83v-1.84c0-.84 0-2.07.05-3 0-1.52-.09-3.48-.09-4.9a11.51 11.51 0 00-.72-3.5c-.23-.83.2-1.82.12-2.56s-.46-.72-1-.67a.73.73 0 00-1.24-.76c-.55.61-.73 1.28-1.28 1.77-.88.77-1.84 1.33-2.69 2.12-2.23 0-2.4 1.66-2.55 3.52a1.51 1.51 0 000 .7 4.64 4.64 0 01.05 1c.06.82 0 2 .07 2.68s-.38 1.06-.38 1.55c0 1.71.19 3.36.08 5-.08 1.09-.11 2-.19 3.11-.43-.5-.85-1-1.26-1.51-2.74 1.08-5.55 2.22-8.29 3.15a3.45 3.45 0 01-.66.19c-.23 0-.36.25-.54.21s-.38.18-.54 0a12 12 0 01-1.2-2.32c-.36-.76-.8-1.81-1.1-2.54l-.78-1.88c-.27-.66-.6-1.2-.86-1.86s-.39-1.44-.67-2.11a2.09 2.09 0 01-.08-.23 18 18 0 00-2.83-6.09c-.14-.23-.26-.71-.38-.67a2.44 2.44 0 00-.79 1c-.06.28.64.89.62 1.12s-.58 0-.64-.09 0-.05 0-.15a.66.66 0 00-.25-.37c-.08 0 0-.15 0-.11a12.69 12.69 0 00-.75 1.09 1.39 1.39 0 01-1.69.42c-1.19-.55-2.33-1.15-3.51-1.71a5.54 5.54 0 00-.57-.21c-1.07 2.51-1.71 5.11-3.37 7.32 0 .07-.19.11-.24.16a4.61 4.61 0 00-.76 2 1.91 1.91 0 01-.07.3c-.27.59-.64 1.51-.87 2s.06.6.12.9 0 .07-.09.46a18.56 18.56 0 01-.56 1.78 2.17 2.17 0 000 .51c0 .14.15.28.13.39-.1.61-.3 1.32-.42 1.89s-.32 1.42-.42 1.87-.18.79-.24 1 0 0-.05.09 0 0 0 .06a.1.1 0 010 .09v.07a1 1 0 000 .12v.13a1.27 1.27 0 01-.06.18V92c0 .07 0 0 0 0v.07a.13.13 0 000 .08v.07c0 .07 0-.1 0 0a3.48 3.48 0 01-.1.41v.2c0 .02 0 0 0 0v-.07c0 .01 0 0 0 0v.15c0 .02 0 0 0 0v.25c0 .05 0 0 0 0v.19a.58.58 0 000 .18v.06a.51.51 0 010 .13v.06a.45.45 0 000 .11v.19c0 .04 0 0 0 0a.54.54 0 010 .15s0 .22-.08.31 0-.07 0 0v.11c0 .19-.15.65-.23 1a28.7 28.7 0 00-1.06 5.79 5.35 5.35 0 00.15 1c-.16.21-.32.38-.48.58a2 2 0 01.63.44c.08.12 0 .1 0 .15s-.05 0-.05.06v.08a.33.33 0 010 .14v.14a.26.26 0 000 .15V104.62c0 .07 0-.06 0 0v.35c0 .05.05 0 0 0s0 0 0 .06v1.04c0 .03 0 .06 0 0v.1c0 .03 0 0 0 0v.06c0 .06 0 0 0 0a.31.31 0 010 .1v.09a1.94 1.94 0 010 .24s0-.06 0 0a1.29 1.29 0 010 .19s.06 0 0 .07a.19.19 0 00-.05.11v1.83c0 .21-.06 0 0 0s0 .06 0 .1 0-.06 0 0v.5c0 .02 0 .1 0 0s-.05-.37-.06-.46a1.15 1.15 0 010-.21v-.07-.52-.39a.72.72 0 010-.23v-.05a.16.16 0 000-.09v-.05c0-.05.06 0 0-.07a1.77 1.77 0 01-.05-.32c0-.06.05 0 .06 0a2.36 2.36 0 010-.37v-.07-.05a1.89 1.89 0 00-.06.18v.09a.55.55 0 000 .18v.06c0 .06 0 0 0 0v-.06c0 .01-.06 0-.07 0s0 .14 0 .22V107.65c0 .01 0 0 0 0a.53.53 0 010 .13V108.93a1.07 1.07 0 000 .25v.07a.29.29 0 010 .09V109.83a2.18 2.18 0 000 .25 1.62 1.62 0 000-.22.31.31 0 000-.1v-.06a1.82 1.82 0 010-.33v-.18a.74.74 0 000-.15s0-.06 0 0a1.19 1.19 0 01.05.22v.11a.13.13 0 010 .09v.1s0-.07 0 0a.65.65 0 010 .2v.25a1.48 1.48 0 010 .22.12.12 0 000 .09v-.1c0-.01 0 0 0 0s0-.06 0 0v.12a.46.46 0 010 .14c0 .09.06.4.08.49s0 0 0 .1v.21h.07v-.08-.06s0-.12.05-.11 0 .06.05.08a.15.15 0 010 .07v-.07c0-.03 0 0 0 0a2.64 2.64 0 010-.29c0-.05.05 0 0-.05s0 0 0-.06v-.06-.12a3.23 3.23 0 00.58 1.24 2 2 0 002 .71 34.67 34.67 0 003.8 3.47c.45.33 1.3.2 1.24-.52a42.61 42.61 0 011-11 37.32 37.32 0 00.6-5c0-.45.08-1.23.07-1.71a17.14 17.14 0 001.53 2.92c.6.72 1.28.24 1.25-.47 0 0-.06-.08 0-.1a60.1 60.1 0 015.64-2.31c.5-.17 1-.34 1.54-.48.16.52.51 1.57.66 1.94s0 0 0 .06 0 .2.17.21a1.78 1.78 0 01.88.33c.1.14.1.08.11.12.88 3.28 1.53 6.54 2.08 9.87a.32.32 0 00.54.13c.88-1 1.12-2.38 1.57-3.53s1-2 1.42-3.13c.09-.2.3-.31.43-.5a9.13 9.13 0 001.06-1.91c.06-.15.09-.3.16-.44a3.21 3.21 0 01.24-.36c.1-.15 0-.21 0-.39a6.1 6.1 0 01.13-.84c0-.18 0-.11.06-.27s-.07 0 0-.28a13.8 13.8 0 00.35-1.41.74.74 0 00-.94-.8c-.12-.43-.44-1.16-.54-1.5s-.31-.42-.27-.67-.48-.45-.17-.63c1.12-.7 2.3 0 3.77-1.15A32.81 32.81 0 01202 90.6c.18 1.94.11 4.31.27 6.18 0 .4-.23.13-.32.32a.39.39 0 000 .44c.09.13.18.1.2.24s.28.3.32.39.05 0 0 .13-.36.07-.45.21a.87.87 0 00.06.66c.09.18.25.42.34.56a1.28 1.28 0 01.19.34c0 .16.05.56.07.68s-.06.12-.06.18.08 0 .08 0c.19 1.64.42 3.29.5 4.94a2.84 2.84 0 01-.1.65c0 .21.11.38.12.56a10.85 10.85 0 01-.16 2.28c-.05.27-.32.45-.4.71-.26.8.47 1.49 1.21.92 0 0-.06 0 0-.05a.86.86 0 00.47-.37c.13-.25.62-1 .74-1.24-.13.32-.36.7-.49 1.05-.3.87.78 1.61 1.28.76.92-1.54 1.55-3.23 2.43-4.76.06-.1.25 0 .35-.06a6.31 6.31 0 001.88-2.61 34.47 34.47 0 001-3.31 8.37 8.37 0 01.37-1.35c.51-1.24 1.26-2.64 1.92-3.87a7 7 0 001.44 1 37.56 37.56 0 006.37 1.92c.34.09.52.23.78.29s.19 0 .47 0 1.18.28 1.39.34.14.1.19.11a15.09 15.09 0 002.6.38 16.39 16.39 0 003 0c.37 0 .78-.15 1.14-.18 1.2-.12 2.37-.19 3.55-.4 0 .65.12 1.31.12 1.95 0 .12-.15.19-.18.32a3.18 3.18 0 00.54 2.85v1c0 1.14-.17 2.53.6 3.52 0 0 .12.07.13.12.13.8.33 1.8 1.26 1.86a7.35 7.35 0 002.34-.51c1-.21 1.82-.49 3-.75s2.4-.69 3.77-.94 3.3-.54 4.71-.93 2.45-.83 3.88-1.29 3.22-.75 4.7-1.24a.74.74 0 00-.21-1.46 14.51 14.51 0 00-2.94.61 13 13 0 002.63-1.16c.33-.21.9-.4.95-.72.19-1.07.35-2.65.61-3.58s.42-1.3.6-2.06c.05-.19-.18-.39-.36-.45s-.58 0-.82-.17-.51-.4-.74-.62-.53-.57-.77-.76-.55-.6-.86-.51a20 20 0 01-2.52.94 12.39 12.39 0 00-2.31 1.1c-.93.33-1.95.21-2.76.47s-1.4.36-2.12.57a18.91 18.91 0 01-2.18.46 4.08 4.08 0 01-1.64-.23v-2.94c0-1.04 0-2.21-.05-3.27a3.52 3.52 0 001.21 0c.43-.12 1 .12 1.42.07s.78-.35 1.15-.27a1.9 1.9 0 00.94-.15 1.42 1.42 0 01.4-.06h.61a7.28 7.28 0 002.23-.54.85.85 0 01.19-.09c.14 0 .74-.26.86-.28s.13-.13.15-.08c.32.61.9.44 1.31.2s.57-.36.59-.75-.05-1 0-1.26.16-.18.21-.26c.34-.52 1.11-1.1 1.35-1.54a1.51 1.51 0 00-.06-1.19 1.94 1.94 0 00-.5-1c-.21-.11-.79 0-.91-.12 0-.77.06-1.52.12-2.28 0-.23-.1-.35-.16-.53a.79.79 0 00-1.52-.09c0 .07 0 .21-.06.21s0 0-.19-.06-.33-.36-.8-.23-1.08.32-1.78.45-1.89.45-2.69.54c-1.28.14-2.79.89-4 .32-.27-.12.69-3.9.7-4.3s-.07-.26 0-.28c2.09-1 4.15-2.11 6.25-3.08 2.62-1.21 5.27-2.3 7.95-3.35 2-.79 4.08-1.48 6.13-2.18-.12-.31-.1-.59.26-.75 1.25-.57 2.59-1 3.9-1.43a6.92 6.92 0 001.3-.5 1.15 1.15 0 00.29-.84c0-.09-.5.11-.76.09a4.71 4.71 0 01-1 0c-.43-.07-.93-.73-.46-1.17.08-.07.12.2.21.19s.14.08.22.08h.13c-.07 0-.1 0 0 0a.69.69 0 00.32 0h.07c.07 0 .06 0 .22-.11a1 1 0 00.39-.77.66.66 0 00-.48-.61c-.31-.11-.52.15-.7.31a2.08 2.08 0 00-.37.35c-.13.16.14.28-.08.39a2.21 2.21 0 01-1 .15c-.52 0-.78-.88-.32-1.26s1.09-.47 1.31-.74 0-.74 0-.81a4.37 4.37 0 00-.94.13c-.22 0-.81-.27-.83-.41s-.09 0 .08 0 .59 0 .94.09a1.1 1.1 0 001.27-1.19c-.06-.64-.78-.76-1-.87s-.39 0-.31-.06a22.56 22.56 0 012.11-1.2 2.39 2.39 0 00.34-.18c.23-.14.78-.39 1.14-.58.75-.4 1.63-.8 2.4-1.23.16-.08.33-.09.48-.27s.26-.71.41-1c-1.07.44-2.12.85-3.15 1.22zm-90.93 35.1c-1 .21-1.92.39-2.88.57a1.85 1.85 0 01-.54.11c-.15 0-.56.22-.57.09a4 4 0 01.33-1c.1-.34.29-.69.42-1.09a29.15 29.15 0 011.09-2.94c.42-1 1-1.91 1.48-2.89.07-.15.14-.42.2-.59.58 1.16 1.16 2.37 1.71 3.54s1 2.29 1.58 3.46c-.93.25-1.87.53-2.82.74zm-19.42-16.94a.61.61 0 00-.77-.21l-.36-.33c-1.9-2.24-3.76-4.49-5.8-6.51a.62.62 0 00-.32.47l-.31 2v.23c-.38 2.38-.74 4.73-1.1 7.09a.75.75 0 00.38.8 3.19 3.19 0 01-.45 1.19c0 1.1.16 2.24.22 3.21v2.71a1.22 1.22 0 000 .27 1.09 1.09 0 010 .36 1 1 0 010 .34v1.28a.54.54 0 000 .18v1.54a.17.17 0 010 .14 3.53 3.53 0 010 .65 20.08 20.08 0 01-1 4.78 6.22 6.22 0 01-.29.71 101.58 101.58 0 00-4.11-11.21 7.49 7.49 0 00-.24-1.39.2.2 0 01.29 0l-.09.11a1.93 1.93 0 010-.34.49.49 0 000-.24 1.81 1.81 0 00-.22-.32v-.2h.15c.16 0 .18 0 .2-.31a10.6 10.6 0 00-.6-1.33c-.45-3-.79-5.92-1-9a.73.73 0 00-.76-.68 4 4 0 01-.16-.45 1 1 0 00-.22-.34l-.36.3a66.17 66.17 0 01-7.72 8.25c-.49.74-1 1.48-1.43 2.24V80a1.27 1.27 0 01.9.87.77.77 0 00.4-.29l.36-.52c-.5 2.61-1 5.21-1.55 7.79L134 93.71a28.65 28.65 0 00-1 5.74.25.25 0 00.25.25c-.2 1-.43 2.11-.63 3.12a.58.58 0 00-.31.63 7.39 7.39 0 001.25 2.49c.29.47.63 1 1 1.61s.89 1.48 1.39 2.24a13.37 13.37 0 001.59 1.93 4.63 4.63 0 00.65.52 43.92 43.92 0 012.09 4 .72.72 0 001.32-.17l2.76-15.3.2.36c.16-.41 2.09-1.77 2.09-1.06v.45a.46.46 0 01.42.27c.59 1.26 4 8 4.49 9a37.3 37.3 0 003 4.8 18.27 18.27 0 012.51 2.69.72.72 0 001 .23.73.73 0 00.33-.58c.52-4.06 1.95-11.65 2.09-15.71a4.18 4.18 0 01.51-.8c.05-1 .15-2 .3-3 0-1.06.18-2 .26-2.94.39-2.92.74-5.83 1.13-8.73.29-2.24.62-4.48.83-6.72a7.27 7.27 0 00-2.25-5.21zm-25.46-11.64l-.63.92a.67.67 0 00-.88-.37l-.27.13a.75.75 0 00-.31-.6.53.53 0 000-.74.53.53 0 00-.25-.63 1.19 1.19 0 00-.6-.2.51.51 0 00-.25-.59 12.81 12.81 0 001.3-.74.61.61 0 010-.27 2.18 2.18 0 01.61-.6l-2.25 1.59a1.09 1.09 0 00-.67 0 .72.72 0 00-.54 0 .68.68 0 00-.49.63c-1.12.65-2.24 1.34-3.3 2H127a1.36 1.36 0 00-.81.62l-2.24 1.4a16.6 16.6 0 00-2.87 1.9l-.94.49q.33-.27.69-.51c2.25-1.66 4.65-3.21 6.73-5.07.43-.36 0-1-.58-.74a59.61 59.61 0 00-7.25 4.87c-2.24 1.7-4.68 3.43-7 5.2-4.49 3.45-9.13 6.95-13.46 10.77a.62.62 0 00-.25.47 12 12 0 00-2.78 2.35c.49 3.12 2.74 5.5 4.22 8.28a71.94 71.94 0 019.4 2c1 .29 2 .61 2.91.94a8 8 0 012.8 1.28 4.35 4.35 0 01.66 4.73 30.7 30.7 0 01-3.95 3.7c-1.64.81-3.28 1.6-4.89 2.43s-2.83 1.48-4.22 2.24a1 1 0 010 .25c-.85.27-1.68.67-2.35.89a45 45 0 00-5 2 .56.56 0 00-.19.77.53.53 0 00.37.26.5.5 0 00.11.69.5.5 0 00.43.08 23.27 23.27 0 004.24-1.8l.29-.13a89 89 0 01-10.45 7.42c-1.51 1-3 2-4.49 3a.69.69 0 01.16.18 47.72 47.72 0 017.49-4.26c.54-.25 1.14.42.65.87a52.65 52.65 0 00-4.17 3.57l.45-.16H91a24.48 24.48 0 013.22-1.86.83.83 0 011.08.47l.16-.13h.13l1-.41-1.26.7a.51.51 0 01-.22.54l-.18.13a7.83 7.83 0 00.92-.45l.38-.24c.56-.36 1 .38.67.83 1.8-1 3.59-1.91 5.41-2.79a.73.73 0 000 .36l-.36.23a.33.33 0 00.25.6 36.92 36.92 0 004.1-1.32l2.92-1.68.38-.2a5.38 5.38 0 011.5 0 .36.36 0 00.42-.29 1.14 1.14 0 010-.45.34.34 0 00.54.36 4.73 4.73 0 01.83-.78 23.8 23.8 0 004.19-2.25 11.66 11.66 0 002.13-1.25l1.21-.94c.65-.43 1.28-.86 1.89-1.33l.53-.45a8.8 8.8 0 001.44-1.14 11.53 11.53 0 011.39-.92.29.29 0 00.13-.39l.59-.89a18.3 18.3 0 001.84-4.49 14.38 14.38 0 00.33-5 7.1 7.1 0 00-.74-2.67l-.69-1.37c-.39-.77-.82-1.52-1.28-2.24a16.27 16.27 0 00-3.52-3.26 23.53 23.53 0 00-4.49-2.24 18.39 18.39 0 01-4.73-1.68.6.6 0 01-.2-.27c3-1.91 6-3.9 9-5.85 3.72-2.45 7.58-4.8 11.21-7.5l2.47-1.25v-.18a1.23 1.23 0 01-.81-1 1.3 1.3 0 01-.47-.85.48.48 0 00.16-.12 4.48 4.48 0 00.94-2.24.57.57 0 00.82 0 .53.53 0 00.17-.25 4.17 4.17 0 000-.5.7.7 0 00-.65-.63c.24-.42.47-.87.71-1.27a.58.58 0 00-.51-.65z"
          fill="url(#Wordmark_svg__h)"
        />
      </svg>
    </SVGWrapper>
  );
};

const StyledLogo = styled(SVGLogo)`
  > path {
    fill: ${({ color, theme }) => {
      return !color
        ? theme === themes.dark
          ? colors.white
          : colors.purple
        : color;
    }};
  }
`;

export default StyledLogo;