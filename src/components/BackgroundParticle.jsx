import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import web from '../asset/web.json'

function BackgroundParticle() {
    async function loadParticles(main) {
        await loadFull(main)
    }

    return (
        <div>
            <Particles
                id="tsparticles"
                init={loadParticles}
                options={web} // For the web like background
                // options={lines} // For the web like background
            />
        </div>
    )
}

export default BackgroundParticle
