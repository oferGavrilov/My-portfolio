
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container } from './LayoutStyles'

export default function Layout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
