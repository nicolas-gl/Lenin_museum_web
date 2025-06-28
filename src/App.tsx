import { Routes, Route, Navigate } from "react-router";
import Header from "./Components/Header"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import { Temp } from "./Components/Temp";





type Props = {}

export default function App({ }: Props) {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Content />} />
        <Route path="/biography" element={<Temp />} />
        <Route path="/about" element={<Temp />} />
        <Route path="/contacts" element={<Temp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
