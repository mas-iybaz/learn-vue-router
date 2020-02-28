// Import Component
import Kelas from "./components/Kelas";
import Mahasiswa from "./components/Mahasiswa";
import Universitas from "./components/Universitas";
import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/showBlogs";
import DataMahasiswa from "./components/DataMahasiswa";

export default [{
    path: '/',
    component: Universitas
}, {
    path: '/kelas',
    component: Kelas
}, {
    path: '/mahasiswa',
    component: Mahasiswa
}, {
    path: '/addBlog',
    component: AddBlog
}, {
    path: '/showBlogs',
    component: ShowBlogs
}, {
    path: '/dataMhs/:id',
    component: DataMahasiswa
}]