import styled from "styled-components";

export const RightMiddle = styled.div`
    position: absolute;
    bottom: 50%;
    // right: 5vw;
    font-weight: 400;
    line-height: 1em;
    letter-spacing: -0.01em;
    font-size: 16px;
    // transform: rotate(-90deg) translate3d(50%, 0, 0);
    // transform-origin: 100% 50%;
    color: white;
    
`;

export const Container = styled.div`
    position: absolute;
    z-index: 100;
    font-family: "Inter", sans-serif;
    font-size: 1.5em;
    color: white;

    h1 {
        padding: 0;
        margin: 0 0 0.05em 0;
        font-family: "JetBrains Mono", monospace;
        font-weight: 400;
        font-size: min(14vw, 10em);
        line-height: 0.85em;
        letter-spacing: -0.1em;
        z-index: 200; /* Higher z-index for the text content */
    }
`;


export const TopLeft = styled.div`
    top: 5vw;
    padding-left:1vw;
`;

export const TopRight = styled.div`
  
    top: 5vw;
    padding-left:1vw;
`;

export const BottomLeft = styled.div`
    
    bottom: 5vw;
    left: 5vw;
    width: 30ch;
    max-width: 40%;
`;

export const BottomRight = styled.div`
    
    bottom: 5vw;
    right: 5vw;
`;

export const Option = styled.span`
    cursor: pointer;
`;
