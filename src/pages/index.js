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
      title:
        'BRKsEDU | Bi- lada lada surra de pau mole, surra de pau mole taca o pirulito pra fora e dá um surra de pau mole',
      authorId: 2,
      authorName: 'BRKsEDU',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb:
        'https://i.ytimg.com/an_webp/CPT1i8PUMB8/mqdefault_6s.webp?du=3000&sqp=COirsoMG&rs=AOn4CLCGW1ViAX_Hdx36nap40wev3Nsalw',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'MONARK PEIDOU NA CARA DO IGOR KKKKK',
      authorId: 3,
      authorName: 'Cortes do Flow [OFICIAL]',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AAUvwngfkVTAr8ZR8JtsVMoU1qtbh_CAbh97aAMVPu8y=s88-c-k-c0x00ffffff-no-rj',
      views: 3844098,
      thumb:
        'https://i.ytimg.com/vi/X4PJTtegQ8s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPO-5b77i5YeA2taEakAH1Rk0O-Q',
      videoUrl: 'url',
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
