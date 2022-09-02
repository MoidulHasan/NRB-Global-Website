import './YCAtivities.css'
import YCAtivitesGrid from '../../../component/YoungCongress/YCActivities/YCAtivitesGrid'
import YCActivitiesSlide from '../../../component/YoungCongress/YCActivities/YCActivitiesSlide'
function YCAtivities() {
    return (
        <div className='YCAtivities'>
            <YCActivitiesSlide />
            <YCAtivitesGrid />
        </div>
    )
}
export default YCAtivities