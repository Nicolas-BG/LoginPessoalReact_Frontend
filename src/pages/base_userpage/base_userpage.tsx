import Header from '../../components/header/header.js'
import Sidebar from '../../components/sidebar/sidebar.js'
import Footer from '../../components/footer/footer.js'

interface PageProps {
  numero: number;
  children: React.ReactNode;
}

function Base_userpage({ numero = 0, children }: PageProps) {

  return (
    <>
      <Header />
      <div className="sides">
        <Sidebar numero={numero} />
        <div style={{ minHeight: '90vh', minWidth: '89%'}}>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Base_userpage
