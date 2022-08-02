import styled from 'styled-components';

export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    text-align: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    

    h1 {

        margin-bottom: 1rem;
        font-family: sans-serif;
    }
    input {
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        width: 15rem;
        height: 2.5rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        padding: 0.5rem;        
    }

    `; 
export const ButtonSubmit = styled.button` 
        padding: 0.5rem;
        color: #fff;
        border: none;
        font-size: 1rem;
        background-color: #22bb33;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 50ms;
        margin-bottom: 1rem;

        &:hover {
            font-size: 1.03rem;
        }

        :active {
            background-color: #00a822;
        }`;

        export const ButtonUpdate = styled.button` 
        padding: 0.5rem;
        color: #fff;
        border: none;
        font-size: 1rem;
        background-color: #5DADE2;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 50ms;
        margin-bottom: 1rem;

        :active {
            background-color:#2E86C1 ;
        }`;

        export const ButtonDelete = styled.button` 
        padding: 0.5rem;
        color: #fff;
        border: none;
        font-size: 1rem;
        background-color: #E74C3C ;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 50ms;
        margin-bottom: 1rem;

        :active {
            background-color: #CB4335;
        }`;

    export const List = styled.div`
    font-family: Tahoma, sans-serif;
    color: #424949 ;
    width: 100%;
    font-size: 1rem;
    cursor: inherit;
    p {
        font-size: 1.5rem;

    }
    
    ul:nth-child(2n+1) {
        background-color: #F2F3F4;
    }
    li {
        //border: 1px solid magenta;
        display: flex;
        justify-content: center ;
        margin: 0.1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        list-style-type: none;
        padding: 0.1rem;        
    }
    button {
        justify-content: center;
        margin: .3rem;
    }  
    `;

