import './YCAbout.css';
import YCAboutSection from '../../../component/YoungCongress/YCAbout/YCAboutSection'
import YCMisssion from '../../../component/YoungCongress/YCAbout/YCMisssion';
import YCVision from '../../../component/YoungCongress/YCAbout/YCVision';
import YCObjective from '../../../component/YoungCongress/YCAbout/YCObjective';
import YCATeam from '../../../component/YoungCongress/YCAbout/YCATeam';
function YCAbout() {
    return (
        <div className='yca-container p-container'>
            <YCAboutSection />
            <YCMisssion />
            {/* <YCVision /> */}
            <YCObjective />
            <YCATeam />

        </div>
    )
}

export default YCAbout