import { Box, Grid } from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = [
    {
      id: 1,
      title:
        'OROCHI 【 大蛇 】☯ Japanese Trap & Bass Type Beat ☯ Trapanese & Lofi Hip Hop Mix',
      authorId: 1,
      authorName: 'Mr_MoMo Music',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AAUvwniol5D8-DUDQPhTBdeIYcKgCHyGjDxEIIX9OI4Hhw=s88-c-k-c0x00ffffff-no-rj',
      views: 165723,
      thumb:
        'https://i.ytimg.com/vi/sdy4MaxAxTE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCo851TaOjuqeW19Hy0ug2pkrr4qA',
      videoUrl: 'https://www.youtube.com/watch?v=sdy4MaxAxTE',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Drake - Laugh Now Cry Later (Official Music Video) ft. Lil Durk',
      authorId: 2,
      authorName: 'Drake',
      authorAvatar: 'avatarUrl',
      views: 267882045,
      thumb:
        'https://i.ytimg.com/vi/JFm7YDVlqnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjqZ9bWZI5VnF4HJwtFeb2o0wTEw',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Childish Gambino - This Is America (Official Video)',
      authorId: 3,
      authorName: 'Donald Glover',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AAUvwniVUbN5jshpw4H75DtYXmhcqmZthwtH3n4981ZIAw=s48-c-k-c0x00ffffff-no-rj-mo',
      views: 767345985,
      thumb:
        'https://i.ytimg.com/vi/VYOjWnS4cMY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7sdnsRa5TUyXoIW7kEo0aJZhMZQ',
      videoUrl: 'https://www.youtube.com/watch?v=VYOjWnS4cMY',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      // will be passed to the page component as props
    },
  };
}

export default Home;
