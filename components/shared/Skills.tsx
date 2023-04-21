import React from 'react'
import Image from 'next/image'

import {
    ABOUT_SKILLS
} from '../../variables'

function Skills() {

  const marginStartChecker = (skillId: string) => {
    if(['sass', 'bootstrap', 'js', 'react', 'git'].includes(skillId)) {
        return ' ms-5 ms-md-1';
    }
    return '';
  }

  return (
    <>
        {ABOUT_SKILLS && ABOUT_SKILLS.map((skill, idx) => {
            return (
                <div key={idx} className="col-sm-2 p-4">
                    <div className="row">
                        <div className="col d-flex flex-column align-items-center justify-content-center">
                            <div className="image-container image-skills">
                                <Image className={`mb-2${marginStartChecker(skill.id)}`} src={skill.image} alt={skill.id} height={0} width={0} />
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