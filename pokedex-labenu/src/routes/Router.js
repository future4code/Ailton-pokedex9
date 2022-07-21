import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListPage from '../pages/ListPage/ListPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import DetailPages from '../pages/DetailPages/DetailPages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ListPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/pokemon/:name" element={<DetailPages />} />
            </Routes>
        </BrowserRouter>
    )
}