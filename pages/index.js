import Navbar from '../components/Navbar';
import Head from 'next/head';
import Link from 'next/link';

const Index = (props) => (
  <section>
    <Head>
      <title>Hello NextJS</title>
    </Head>
    <h1>Hello NextJS</h1>
    <Navbar />
    <div>
      <Link as={`/posts/${props.slug}`} href={`/post?title=${props.title}`}>
        <a>Latest Post NextJS</a>
      </Link>
    </div>
  </section>
);

Index.getInitialProps = async function(props) {
  let title = 'This is the title';
  let slug = 'this-is-the-title';

  return {
    title,
    slug
  }
}

export default Index;
