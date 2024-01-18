import styled from 'styled-components'

const Wrapper = styled.article`
background: var(--white);
box-shadow: var(--shadow-2);
transition: var(--transition);
display: grid;
grid-template-rows: auto 1fr;
border-radius: var(--borderRadius)
:hover{
    box-shadow: var(--shadow-4);
}
img {
    height: 20rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius)
}
.img {
    width: 100%;
    object-fit: 100%;
}
.footer {
    padding: 1.5rem;
    h4,h5{
        margin-bottom:0.5rem
    }
    h4{
        font-weight:700
    }
    p{
        margin-bottom:1rem;
        color: var(--grey-500)
    }
    .btn {
        text-transform: capitalize;
        background-color: var(--primary-500);
        padding: 0.5rem 1rem;
        border-radius: var(--borderRadius);
        color: var(--white);
    }
    .btn:hover {
            background-color: var(--primary-700);
        }
    
}
`

export default Wrapper
