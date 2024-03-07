import styled, {css} from "styled-components";

export const HeadlineStyles = css`
    font-family: var(--font-primary);
    font-weight: var(--font-weight-700);    
    color: var(--color-grey-600);
    font-size: var(--font-size-18);
`

export const StyledTitle = styled.h2`
    ${HeadlineStyles};
`

export const StyledParagraph = styled.p`
    ${HeadlineStyles};
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-14);
`
export const StyledParagraphSmall = styled.span`
    ${HeadlineStyles};
    font-weight: var(--font-weight-400);
    font-size: var(--font-size-12);
    color: var(--color-grey-400);
`