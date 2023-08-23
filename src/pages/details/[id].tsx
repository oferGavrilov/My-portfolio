import { type NextPage, type GetServerSideProps } from 'next'
import projects from '../../constants/projects.json'
import { type Project } from '../../model/project.model'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'

interface ProjectDetailsProps {
  project: Project | undefined
}

const ProjectDetails: NextPage<ProjectDetailsProps> = ({ project }) => {
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
