import { type NextPage, type GetServerSideProps } from 'next'
import projects from '../../constants/projects.json'
import { type Project } from '../../model/project.model'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { useState } from 'react'

interface ProjectDetailsProps {
  project: Project | undefined
}

interface ImageState {
  zoomed: boolean
  clickPosition: { x: number, y: number }
}

const ProjectDetails: NextPage<ProjectDetailsProps> = ({ project }) => {
  const [imageStates, setImageStates] = useState<ImageState[]>([
    { zoomed: false, clickPosition: { x: 0, y: 0 } },
    { zoomed: false, clickPosition: { x: 0, y: 0 } },
    { zoomed: false, clickPosition: { x: 0, y: 0 } }
    // Add more items for additional images
  ])

  const handleImageClick = (index: number, event: React.MouseEvent<HTMLImageElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newImageStates = [...imageStates]
    newImageStates[index] = {
      zoomed: !imageStates[index].zoomed,
      clickPosition: { x, y }
    }

    setImageStates(newImageStates)
  }


  if (!project) {
    return (
      <div>
        Project not found.
      </div>
    )
  }
  return (
    <>
      <Link href="/" className='slide-bottom text-4xl'>
        <AiFillHome />
      </Link>
      <section className='fade'>
        <div className="hero-container">
          <img className="project-image hidden lg:block" src={project.largeImg} alt={project.title + '-large'} />
          <img className={`project-image md:block lg:hidden ${project.name === 'airbnb' && '!object-top'}`} src={project.tabletImg} alt={project.title + '-tablet'} />
          <img className={`project-image md:hidden ${project.name === 'airbnb' && '!object-top'}`} src={project.mobileImg} alt={project.title + '-mobile'} />
        </div>
        <div className='flex flex-col text-[#dce3e4] absolute -bottom-24 mx-10 md:mx-20 lg:mx-32'>
          <h2 style={{ color: project?.color }} className="text-[4.25rem] py-6 font-bold custom-shadow">{project?.title}</h2>
          <p className='custom-paragraph'>{project?.description}</p>
        </div>
      </section>
      <section className='bg-[#141414] pt-24 px-10 md:px-20 lg:px-32'>

        <div className='py-10'>
          <h2 style={{ color: project?.color, textShadow: `0px 3px 11px ${project?.color}` }} className='text-5xl font-bold py-8'>Architecture</h2>
          <p className='custom-paragraph'>{project?.architecture}</p>

          {project.name === 'rolling' && (
            <div className='py-12 flex flex-col w-full items-center'>
              <div className='text-center'>
                <h2 className='text-4xl pt-8 pb-4' style={{ color: project?.color }}>Frontend Components Architecture</h2>
                <div className={`image-container${imageStates[0].zoomed ? ' zoomed z-10' : ''}`}>
                  <img
                    src="https://res.cloudinary.com/dqkstk6dw/image/upload/v1693131275/chat-app/frontent-components_l0y7pr.png"
                    alt=""
                    onClick={(event) => { handleImageClick(0, event) }}
                    style={{
                      transform: imageStates[0].zoomed ? 'scale(2)' : 'scale(1)',
                      transformOrigin: `${imageStates[0].clickPosition.x}px ${imageStates[0].clickPosition.y}px`,
                      transition: 'transform 0.2s ease-in-out'
                    }}
                  />
                </div>
              </div>
              <div className='text-center'>
                <h2 className='text-4xl pt-8 pb-4' style={{ color: project?.color }}>Frontend Services</h2>
                <div className={`image-container${imageStates[1].zoomed ? ' zoomed z-10' : ''}`}>
                  <img
                    src="https://res.cloudinary.com/dqkstk6dw/image/upload/v1693215073/chat-app/frontend-services_lvgsd7.png"
                    alt=""
                    onClick={(event) => { handleImageClick(1, event) }}
                    style={{
                      transform: imageStates[1].zoomed ? 'scale(2)' : 'scale(1)',
                      transformOrigin: `${imageStates[1].clickPosition.x}px ${imageStates[1].clickPosition.y}px`,
                      transition: 'transform 0.2s ease-in-out'
                    }}
                  />
                </div>
              </div>
              <div className='text-center'>
                <h2 className='text-4xl pt-8 pb-4' style={{ color: project?.color }}>Backend Architecture</h2>
                <div className={`image-container${imageStates[2].zoomed ? ' zoomed z-10' : ''}`}>
                  <img
                    src="https://res.cloudinary.com/dqkstk6dw/image/upload/v1693215549/chat-app/backend-architecture_z8p18j.png"
                    alt=""
                    onClick={(event) => { handleImageClick(2, event) }}
                    style={{
                      transform: imageStates[2].zoomed ? 'scale(1.8)' : 'scale(1)',
                      transformOrigin: `${imageStates[2].clickPosition.x}px ${imageStates[2].clickPosition.y}px`,
                      transition: 'transform 0.2s ease-in-out'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        <div className='py-10'>
          <h2 style={{ color: project?.color, textShadow: `0px 3px 11px ${project?.color}` }} className='text-5xl font-bold py-8'>Responsive Design</h2>
          <p className='pb-14 custom-paragraph'>The {project?.title} application using Responsive design for any device sizes.</p>
          <div className='flex flex-col lg:flex-row justify-center md:justify-evenly items-center gap-24'>
            <img className='mockup-img bounce' src={project.mockupDesktop} alt={project.title + '-desktop'} />
            <img className='mockup-img bounce' src={project.mockupLaptop} alt={project.title + '-laptop'} />
            <img className='mockup-img !w-[130px] md:!w-[180px] bounce' src={project.mockupMobile} alt={project?.title + '-mobile'} />
          </div>
        </div>
        <div className='py-32 flex gap-x-16 md:gap-x-32 justify-center text-2xl md:text-4xl tracking-wider uppercase font-mono'>
          <Link className='project-link bounce' style={{ color: project?.color, boxShadow: `-2px 0px 15px 0px ${project?.color}`, textShadow: `0px 3px 11px ${project?.color}` }} href={'' + project?.visit} target='_blank' >
            Visit Here
          </Link>
          <Link className='project-link bounce' style={{ color: project?.color, boxShadow: `-2px 0px 15px 0px ${project?.color}`, textShadow: `0px 3px 11px ${project?.color}` }} href={'' + project?.source} target='_blank' >
            Source Code
          </Link>
        </div>
      </section>
    </>
  )
}
export default ProjectDetails

export const getServerSideProps: GetServerSideProps<ProjectDetailsProps> = async (context) => {
  const { id } = context.params ?? {}
  const project: Project | undefined = projects.find((project) => project.id === id)

  if (!project) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      project
    }
  }
}
