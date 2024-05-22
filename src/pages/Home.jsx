import { useNavigate, useParams } from "react-router-dom"
import { useUrls } from "../context/UrlContext"
import { UseAuth } from "../context/AuthContext"
import { useEffect } from "react"
import SectionContainer from "../components/SectionContainer"
import FormUrl from "../components/FormUrl"
import UrlList from "../components/UrlList"

const Home = () => {
  const { urls, getAllUrls } = useUrls()
  const { signIn } = UseAuth()
  const { usertest } = useParams()
  const navigate = useNavigate()

  const makeLogin = async () => {
    if (usertest === 'usertest') {
      return await signIn({ username: 'franco', password: 'password' })
    }
    return navigate('/login')
  }
  const getData = async () => {
    await makeLogin();
    await getAllUrls()
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <header>
        <nav></nav>
      </header>

      <main className='w-full relative'>

        <SectionContainer>
          <h1 className='text-center text-3xl sm:text-5xl mt-6 mb-5'>Short url</h1>

          <FormUrl />
          <UrlList urls={urls} />

        </SectionContainer>
      </main>
    </>
  )

}

export default Home
