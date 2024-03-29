import React from "react";
import styled from "styled-components";

export const ChevronLeft = () => (
    <ChevronComponent>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            width="30px"
            height="30px"
            viewBox="0 0 512 512"
        >
            <g fillRule="nonzero">
                <path
                    /* eslint-disable-next-line max-len */
                    d="M280.88 156.92a9.788 9.788 0 0 1 13.92-.12c3.87 3.85 3.92 10.15.11 14.06l-83.71 86.31 83.63 83.89c3.86 3.87 3.87 10.16.04 14.06a9.778 9.778 0 0 1-13.92.04l-90.56-90.85c-3.83-3.85-3.87-10.12-.07-14.02l90.56-93.37z"
                />
                <path
                    /* eslint-disable-next-line max-len */
                    d="M0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.7-28.65 134.7-74.98 181.02C390.7 483.35 326.7 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256zM89.08 89.08C46.37 131.8 19.94 190.81 19.94 256c0 65.19 26.42 124.21 69.14 166.92 42.72 42.71 101.73 69.14 166.92 69.14 65.19 0 124.21-26.42 166.92-69.14 42.72-42.71 69.14-101.73 69.14-166.92 0-65.19-26.43-124.2-69.14-166.92C380.21 46.36 321.19 19.94 256 19.94c-65.19 0-124.2 26.43-166.92 69.14z"
                />
            </g>
        </svg>
    </ChevronComponent>
);

const ChevronComponent = styled.div`
  width: 30px;
  height: 30px;
`;
