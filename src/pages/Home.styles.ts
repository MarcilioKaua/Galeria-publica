import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #1d2a35;
    color: #fff;

    h1 {
        margin-top: 4.5em;
        margin-bottom: 0;
        font-size: 2.5rem;
    }

    span {
        color: #0CCE6B;
    }

    button {
        margin-top: 0.5em;
        background-color: #222;
        border: none;
        border-radius: 5px;
        color: #fff;
        padding: 1em 1.5em;
        text-decoration: none;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: bold;

        &:hover {
            color: #0CCE6B;
        }
    }
`