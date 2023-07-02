import React from 'react'

const FooterGenerator = () => {
    return (
        <div>
            <footer className='footer'>
                <span>All Rights Reserved &copy; {new Date().getFullYear()}</span>
            </footer>
        </div>
    )
}

export default FooterGenerator;