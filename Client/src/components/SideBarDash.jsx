import style from './SideBarDash.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import FeedIcon from '@mui/icons-material/Feed';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

export default function SideBarDash() {

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userRole");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("Name");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("mail");
        window.location.reload();
    };
    return (
        <div className={style.sideBar}>

            <div className={style.top}>
                <span className={style.logo}>The DevPool Soft<br /> Administrador </span>
            </div>
            <hr className={style.hr} />
            <div className={style.center}>
                <ul>
                    <p className={style.title}>PRINCIPAL</p>
                    <Link to='/dashboard'><li className={style.li}>
                        <DashboardIcon className={style.icon} />
                        <span className={style.span}>DashBoard</span> </li>
                    </Link>
                    <p className={style.title}>LISTAS</p>

                    <Link to="/companies">  <li className={style.li}>
                        <BusinessIcon className={style.icon} />
                        <span className={style.span}>Companies</span></li>
                    </Link>
                    <li className={style.li}>
                        <PeopleAltOutlinedIcon className={style.icon} />
                        <span className={style.span}>Developers</span></li>
                    <Link to="/home">
                        <li className={style.li}>
                            <FeedIcon className={style.icon} />
                            <span className={style.span}>TechNews</span></li>
                    </Link>

                    <Link to="">
                        <li className={style.li}>
                            <PaymentsIcon className={style.icon} />
                            <span className={style.span}>Sales</span></li>
                    </Link>
                    <p className={style.title}>UTILIDADES</p>
                    <Link to='/statistics'> <li className={style.li}>
                        <QueryStatsOutlinedIcon className={style.icon} />
                        <span className={style.span}>Statistics</span></li>
                    </Link>
                    <p className={style.title}>USUARIO</p>

                    <Link to="/profile">  <li className={style.li}>
                        <AccountCircleOutlinedIcon className={style.icon} />
                        <span className={style.span}>Profile</span></li>
                    </Link>
                    <li className={style.li}>
                        <LockOutlinedIcon className={style.icon} />
                        <div>
                            {sessionStorage.getItem("token") ? (
                                <div>
                                    <li>
                                        <button className={style.span} onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </div>
                            ) : (
                                <Link to="/login" className="text-2xl list-none text-chocolate-oscuro no-underline pl-3.5  font-serif ">
                                    <li>
                                        <button className={style.span}>
                                            Login
                                        </button>
                                    </li>
                                </Link>
                            )}
                        </div>
                    </li>



                </ul>
            </div>
        </div>
    )
}