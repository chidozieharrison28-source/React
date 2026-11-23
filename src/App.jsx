import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";
import StudentCard from "./components/StudentCard";



function App() {
  return (
    <div>
      <Header />
      <StudentProfile />
      <StudentCard />
      <CourseCard />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>House Modeling</h1>
    </header>
  )
}

function Footer() {
  return(
    <footer>
      <p>&copy; 2026</p>
    </footer>
  )
}




export default App;