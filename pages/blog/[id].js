import posts from "../../posts.json";
import Head from "next/head";

const Post = (props) => {
  return (
    <div>
      <Head>
        <title>The page title</title>
      </Head>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <style jsx>{`
        h1 {
          font-size: 3rem;
          color: gray;
        }
      `}</style>
    </div>
  );
};

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id],
  };
};

export default Post;
