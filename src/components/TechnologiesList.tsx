/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/indent */
import React, { useEffect } from 'react'
import Image from 'next/image'
import { type Technology } from '../model/project.model'
import Aos from 'aos'

interface Props {
      technologies: Technology[]
}

export default function TechnologiesList ({ technologies }: Props): JSX.Element {
      useEffect(() => {
            Aos.init({ duration: 1000 })
            Aos.refresh()
          }, [])
      return (
            <ul className='w-full place-items-center my-8 gap-y-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-16 lg:gap-y-24 md:my-12'>
                  {technologies.map(tech => (
                        <div key={tech.id} className='card shadow-xl shadow-blue-900' data-aos="fade-right">
                              <li className='list-item '>
                                    <div className='icon-container '>
                                          {tech.imgUrls.map((img, index) => (
                                                <Image key={index} loading='eager' alt={img} src={img} width="30" height="30" />
                                          ))}
                                    </div>
                                    <div className='list-container '>
                                          <h2 className='list-title '>{tech.type}</h2>
                                          <div className='list-paragraph '>
                                                {tech.names.map((name, index) => (
                                                      <span key={index}>{name}</span>
                                                ))}
                                          </div>
                                    </div>
                              </li>
                        </div>
                  ))}
            </ul>
      )
}
