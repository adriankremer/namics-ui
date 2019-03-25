import { css } from "@pulsar-ui/core/styled";

export const Cell = props => {
  const { xs, sm, md, lg, xl } = props.theme.breakpoints;
  return css`
    grid-column-end: span ${props.xs || 1};
    grid-row-end: span ${props.height || 1};
    @media screen and (min-width: ${xs}) {
      grid-column-end: span ${props.sm};
    }
    @media screen and (min-width: ${sm}) {
      grid-column-end: span ${props.md};
    }
    @media screen and (min-width: ${md}) {
      grid-column-end: span ${props.lg};
    }
    @media screen and (min-width: ${lg}) {
      grid-column-end: span ${props.xl};
    }
  `;
};

const Grid = props => css`
  display: grid;
  grid-gap: ${props.theme.spacing[1]};
  grid-template-columns: repeat(12, 1fr);
  ${props.fit &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    `}
`;

export default Grid;
