import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout(props) {
    return (
        <div>
            <Topbar />
            <Sidebar />
        </div>
    );
}