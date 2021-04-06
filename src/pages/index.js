import { Button } from '@material-ui/core';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="YouTube">
      Youtube clone
      <Button variant="outlined" color="secondary">
        Hello World
      </Button>
    </Layout>
  );
}
