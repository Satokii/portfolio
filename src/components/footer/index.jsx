import '../../styles/footer/footer.css'

function Footer() {

    return (
        <footer className='footer grid'>
            <button className='jump-to-top-btn' onClick={() => scrollTo(0, 0)}>Jump to top</button>
        </footer>
    )
}

export default Footer