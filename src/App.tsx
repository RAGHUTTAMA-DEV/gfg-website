import './App.css'
import ProjectCard from './ProjectCard'

function App() {
 const projectData = [{
  problemNumber: "1",
  title: "Optimize Supply Chain",
  description: "Develop a solution to optimize the supply chain for a retail company, reducing costs and improving delivery times.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  roles: ["Data Analyst", "Logistics Expert", "Software Developer"],
  joinedCount: 3,
  totalSlots: 5,
  onMoreInfoClick: () => alert("More info about Problem 1")
},{
  problemNumber: "2",
  title: "Enhance Customer Experience",
  description: "Create a platform to enhance customer experience through personalized recommendations and support.",
  roles: ["UX Designer", "Frontend Developer", "Backend Developer"],
  joinedCount: 2,
  totalSlots: 4,
  onMoreInfoClick: () => alert("More info about Problem 2")
 }]
  return (
    <div className="p-4">
      {projectData.map((project) => (
        <ProjectCard key={project.problemNumber} {...project} />
      ))}
    </div>
  )
}

export default App
