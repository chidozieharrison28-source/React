import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";


function App() {
  return (
    <div>
      <StudentProfile />
      <CourseCard />
      <Header />
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