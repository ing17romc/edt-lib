import { Button, Card, Layout, NavBar, Footer, Title, TitleSize } from 'edt-lib';

export default function HomePage() {
  return (
    <Layout>
      <NavBar title="Next.js App Router" />
      <main style={{ padding: '2rem', display: 'grid', gap: '1.5rem' }}>
        <Card title="SSR-safe setup" subtitle="Using ThemeProvider from the root layout.">
          <Title size={TitleSize.H3}>edt-lib inside Next.js</Title>
          <div style={{ marginTop: '1rem' }}>
            <Button>Render component</Button>
          </div>
        </Card>
      </main>
      <Footer />
    </Layout>
  );
}
