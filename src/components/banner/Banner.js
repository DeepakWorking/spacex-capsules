import React from 'react'
import Button from '../../shared/Button'

const Banner = ()=>{
    const handleCodebase = ()=>{
        window.open('https://github.com/DeepakWorking/spacex-capsules')
    }
    return (
        <section className="banner">
            <h1>Assignment Project</h1>
            <p>Aim at showing qualification for the role</p>
            <Button onClick={()=>handleCodebase()}> Explore codebase</Button>
        </section>
    )
}
export default Banner