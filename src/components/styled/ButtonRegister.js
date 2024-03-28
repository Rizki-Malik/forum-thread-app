import styled from "styled-components";

const BRegister = styled.button`
    margin-left: 12px;
    margin-bottom: 12px;
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 6px;
    padding: ${(props) => props.padding};
`;

BRegister.defaultProps = {
    padding: '12px',
    backgroundColor: 'rgb(34 211 238 / var(--tw-bg-opacity))',
    textColor: 'rgb(255 255 255 / var(--tw-text-opacity))'
}

export default BRegister;