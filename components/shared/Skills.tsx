import React from 'react'
import Image from 'next/image'

import {
    ABOUT_SKILLS
} from '../../variables'

function Skills() {
  return (
    <>
        {ABOUT_SKILLS && ABOUT_SKILLS.map((skill, idx) => {
            return (
                <div key={idx} className="col-6 col-md-4 col-lg-2 p-3">
                    <div className="row">
                        <div className="col d-flex flex-column align-items-center justify-content-center">
                            <div className="image-container image-skills">
                                <Image className="skill-technology" src={skill.image} alt={skill.id} height={1000} width={1000} />
                            </div>
                            <span>{skill.text}</span>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Skills