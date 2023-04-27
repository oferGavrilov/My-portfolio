import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import projects from '../data/projects.json'
import { Project } from '../model/project.model'

function ProjectDetails() {
      const [project, setProject] = React.useState<Project[] | null>(null)
      const { id } = useRouter().query

      useEffect(() => {
            console.log(projects)
            const data = projects.filter(project => project.id === id)
            setProject(data)
      }, [])
      return (
            <div>ProjectDetails</div>
      )
}

export default ProjectDetails