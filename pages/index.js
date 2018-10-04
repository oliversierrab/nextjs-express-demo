import Navbar from '../components/Navbar';

const Index = () => (
  <section>
    <h1>Hello NextJS</h1>
    <Navbar />
    <style jsx global>{`
      a {
        padding: 10px;
        text-decoration: none;
        color: green;
      }
    `}
    </style>
  </section>
)

export default Index;
