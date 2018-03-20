import  {css} from 'styled-components';

export const ContainerStyles = css`
    display : flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content:${props => props.justifyContent || 'flex-start'};
    align-items: ${props => props.alignItems || 'flex-start'};
    align-content: ${props => props.alignContent || 'flex-start'};
`;
export const TextStyles  = css`
    color: ${props => props.color || 'black'};;
    font-family: "Times New Roman";
    font-size: 1.25em;
`;