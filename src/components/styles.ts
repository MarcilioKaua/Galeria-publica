import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #222;
    padding: 1em;

    img {
        margin-left: 4em;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        cursor: pointer
    }

    ul {
        font-size: 1.1rem;
        display: flex;
        list-style: none;
        align-items: center;
        margin-left: auto;
        margin-right: 5em 
    }

    a {
        margin-right: 2em;
        color: #fff; 
        cursor: pointer;
        text-decoration: none;

        &:hover {
            color: #0CCE6B;
        }
    }

`

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;

    img {
        max-width: 100%;
        min-width: 100%;
        height: 10em;
        object-fit: cover;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`