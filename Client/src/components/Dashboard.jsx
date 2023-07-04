import style from './Dashboard.module.css'
import SideBarDash from './SideBarDash'

export default function Dashboard() {

    return (
        <div>
            <div className={style.dashboardContainer}>
                <SideBarDash className={style.sideBar} />
                <div>
                    <p className={style.PrincipalTitle}>DASHBOARD</p>
                    <div className={style.homeContainer}>

                    </div>

                    <div className={style.charts}>
                        
                    </div>
                </div>
            </div>
        </div>


    )
}