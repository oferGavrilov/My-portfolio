/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/indent */
import Image from 'next/image'
import { type Technology } from '../model/project.model'

interface Props {
      technologies: Technology[]
}

export default function TechnologiesList ({ technologies }: Props): JSX.Element {
      return (
            <ul className='flex flex-col my-8 gap-6 md:grid md:grid-cols-3 md:gap-10 md:my-12'>
                  {technologies.map(tech => (
                        <li key={tech.id} className='list-item'>
                              <div className='icon-container'>
                                    {tech.imgUrls.map((img, index) => (
                                          <Image key={index} loading='eager' alt={img} src={img} width="30" height="30" />
                                    ))}
                              </div>
                              <div className='list-container'>
                                    <h4 className='list-title'>{tech.type}</h4>
                                    <div className='list-paragraph'>
                                          <span>Experience with</span>
                                          {tech.names.map((name, index) => (
                                                <span key={index}>{name}</span>
                                          ))}
                                    </div>
                              </div>
                        </li>
                  ))}
            </ul>
      )
}
